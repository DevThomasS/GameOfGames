# dune.ps1
# Dune (GF9, 2019) spice-deck worm-odds calculator.
#
# Usage after loading this file:
#   dune spice
#   dune spice -d
#
# To make `dune` available in every PowerShell session, add this line to your
# PowerShell profile (edit with: notepad $PROFILE):
#   . "C:\path\to\dune.ps1"

function Invoke-DuneSpice {
    [CmdletBinding()]
    param([Alias('d')][switch]$DoubleSpice)

    if ($DoubleSpice) {
        # 13 territories and 5 worms AFTER Turn 1 spice blows mixed into 2 sub decks
        $deckA = 9
        $deckB = 9
        $totalWorms = 5
        $cardsDrawnPerTurn = 2
        $mode = 'Double-spice variant: 2 decks (1 draw from each); 15 territory cards + 5 worms'
    }
    else {
        $deckA = 21
        $deckB = 0
        $totalWorms = 6
        $cardsDrawnPerTurn = 1
        $mode = 'Standard: 1 card per turn; 15 territory cards + 6 worms'
    }

    $territoryCards = 15
    $turn = 1
    $cumulativeNoWorm = 1.0
    $pByThisTurn = 0.0
    $expectedWormsThisTurn = 0
    $tempWorms = 0
    $tempDeck = 0
    $expectedWormsPerGame = 0

    Write-Host "`nDune spice-deck worm odds" -ForegroundColor Cyan
    Write-Host $mode
    Write-Host ''
    Write-Host 'Turn-by-turn odds, conditional on NO worm having appeared on an earlier turn:' -ForegroundColor Cyan
    Write-Host ('{0,5}    {1,34}    {2,31}    {3,28}' -f 'Turn', 'Chance of worm appearing this turn', 'Chance of worm appearing by now', 'Average # of worms this turn')
    Write-Host ('{0,5}    {1,34}    {2,31}    {3,28}' -f '-----', '----------------------------------', '-------------------------------', '----------------------------')
    
    # First Turn always reshuffles drawn worms back into deck!
    Write-Host ('{0,5}    {1,34:P2}    {2,31:P2}    {3,28:F3}' -f $turn, 0, 0, 0)
    $deckA--
    $turn++
    if ($DoubleSpice){
        # Calculating the odds exactly is way too complicated (we would have to average over every starting deck
        # configuration AND every reshuffle). So we simulate the decks card by card and count what happens.
        # The table is conditional on NO worm on an earlier turn, so each simulated game stops after the turn
        # of its first worm.
        $simulations = 20000
        $lastTurn = 10

        $gamesReachingTurn = @(0) * ($lastTurn + 1)   # games with no worm on any earlier turn
        $firstWormOnTurn   = @(0) * ($lastTurn + 1)   # of those, games whose first worm came on this turn
        $wormsDrawnOnTurn  = @(0) * ($lastTurn + 1)   # worms drawn this turn, summed over games reaching this turn

        # Cards are 'T' (territory) or 'W' (worm). Cards are drawn from the END of a deck's list.
        # Each deck has its own discard pile, in the order the cards were discarded.
        $decks    = @{ A = [System.Collections.Generic.List[string]]::new(); B = [System.Collections.Generic.List[string]]::new() }
        $discards = @{ A = [System.Collections.Generic.List[string]]::new(); B = [System.Collections.Generic.List[string]]::new() }

        function Set-DuneDecks {
            # Shuffle the cards and deal them into the two decks as evenly as possible (deck A gets the extra card if odd)
            param($Cards, $DeckA, $DeckB)
            $shuffled = @($Cards | Get-Random -Count @($Cards).Count)
            $sizeA = [int][math]::Ceiling($shuffled.Count / 2)
            $DeckA.Clear()
            $DeckB.Clear()
            $DeckA.AddRange([string[]]($shuffled[0..($sizeA - 1)]))
            $DeckB.AddRange([string[]]($shuffled[$sizeA..($shuffled.Count - 1)]))
        }

        function Invoke-DuneReshuffle {
            # Pool = whatever is left in either deck + every discarded card EXCEPT, in each discard pile, the most
            # recent territory card and any worms drawn after it. Pool is shuffled and dealt into two new decks.
            param($DeckA, $DeckB, $DiscardA, $DiscardB)
            $pool = [System.Collections.Generic.List[string]]::new()
            $pool.AddRange($DeckA)
            $pool.AddRange($DeckB)
            foreach ($discard in $DiscardA, $DiscardB) {
                $lastTerritory = $discard.LastIndexOf('T')
                if ($lastTerritory -gt 0) {
                    $pool.AddRange($discard.GetRange(0, $lastTerritory))
                    $discard.RemoveRange(0, $lastTerritory)
                }
            }
            Set-DuneDecks -Cards $pool -DeckA $DeckA -DeckB $DeckB
        }

        # After Turn 1 (one territory drawn from each deck): all worms + the remaining territories are shuffled into 2 decks
        $startingCards = @('T') * ($territoryCards - 2) + @('W') * $totalWorms

        for ($game = 0; $game -lt $simulations; $game++) {
            Set-DuneDecks -Cards $startingCards -DeckA $decks['A'] -DeckB $decks['B']
            # Turn 1's two territories are the only cards in the discard piles
            $discards['A'].Clear(); $discards['A'].Add('T')
            $discards['B'].Clear(); $discards['B'].Add('T')

            for ($turn = 2; $turn -le $lastTurn; $turn++) {
                $gamesReachingTurn[$turn]++
                $wormsThisTurn = 0

                # Draw from deck A, then deck B. If a worm is drawn, keep drawing from that same deck until a territory appears.
                foreach ($side in 'A', 'B') {
                    $deck = $decks[$side]
                    do {
                        $card = $deck[$deck.Count - 1]
                        $deck.RemoveAt($deck.Count - 1)
                        $discards[$side].Add($card)
                        if ($card -eq 'W') { $wormsThisTurn++ }

                        # Reshuffle ONLY right after the last card of a deck has been drawn (the card just drawn
                        # is already in the discard pile, so a territory drawn this turn is kept out of the shuffle)
                        if ($deck.Count -eq 0) {
                            Invoke-DuneReshuffle -DeckA $decks['A'] -DeckB $decks['B'] -DiscardA $discards['A'] -DiscardB $discards['B']
                        }
                    } while ($card -eq 'W')
                }

                $wormsDrawnOnTurn[$turn] += $wormsThisTurn
                if ($wormsThisTurn -gt 0) {
                    $firstWormOnTurn[$turn]++
                    break   # first worm of this game; later turns don't matter for the table
                }
            }
        }

        $cumulativeFirstWorm = 0
        for ($turn = 2; $turn -le $lastTurn; $turn++) {
            $cumulativeFirstWorm += $firstWormOnTurn[$turn]
            $reached = $gamesReachingTurn[$turn]
            $pAnyThisTurn = 0
            $expectedWormsThisTurn = 0
            if ($reached -gt 0) {
                $pAnyThisTurn = $firstWormOnTurn[$turn] / $reached
                $expectedWormsThisTurn = $wormsDrawnOnTurn[$turn] / $reached
            }
            $pByThisTurn = $cumulativeFirstWorm / $simulations
            Write-Host ('{0,5}    {1,34:P2}    {2,31:P2}    {3,28:F3}' -f $turn, $pAnyThisTurn, $pByThisTurn, $expectedWormsThisTurn)
        }
    }
    else {
        while ($turn -lt 11) {
            # Draw 1 from deck & assume no worm is ever drawn (except for 4th column, which is the expected # of worms drawn on this turn IF first worm in game is drawn now)
            $pAnyThisTurn = $totalWorms / $deckA
            $cumulativeNoWorm *= (1 - $pAnyThisTurn)
            $pByThisTurn = 1 - $cumulativeNoWorm
            $deckA--

            # Calculate the expected # of worms drawn on this turn (odds of one being drawn + odds of another after, and so on)
            $expectedWormsThisTurn = $pAnyThisTurn
            $tempDeck = $deckA
            # Assume card drawn was worm to calculate cascading worm draws. Each successive worm still relies on previous chance of worm being drawn.
            $tempWorms = $totalWorms - 1
            $pAnyMore = 1
            while ($tempWorms -gt 0)
            {
                $pAnyMore *= ($tempWorms / $tempDeck)
                $expectedWormsThisTurn += $pAnyMore
                $tempWorms--
                $tempDeck--
            }

            Write-Host ('{0,5}    {1,34:P2}    {2,31:P2}    {3,28:F3}' -f $turn, $pAnyThisTurn, $pByThisTurn, $expectedWormsThisTurn)
            $turn++
        }
    }

    Write-Host ''
}

function dune {
    [CmdletBinding()]
    param(
        [Parameter(Position=0)]
        [ValidateSet('spice')]
        [string]$Command,
        [Alias('d')]
        [switch]$DoubleSpice
    )

    if ($Command -eq 'spice') {
        Invoke-DuneSpice -DoubleSpice:$DoubleSpice
    }
    else {
        Write-Host 'Usage: dune spice [-d]'
    }
}

# Running this file directly supports: .\dune.ps1 spice [-d]
# Dot-sourcing it loads the `dune` function into the current session.
if ($MyInvocation.InvocationName -ne '.') {
    if ($args.Count -gt 0) { & dune @args }
    else { Write-Host 'Loaded dune command. Use: dune spice [-d]' }
}
