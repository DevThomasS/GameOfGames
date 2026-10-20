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
        $deckA = 10
        $deckB = 10
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
        # TODO: Implement deckA & deckB for double-spice variant (1 draw from each pile).
    }

    while ($turn -lt 11) {
        # Given no worm has appeared, every card removed so far was territory.
        if ($DoubleSpice) {
            # TODO: Implement exact odds for double-spice variant (1 draw from each pile). This is BROKEN right now
            # Approximation: treat the 20 cards as one combined pool and draw
            # two without replacement. The exact two-pile odds need each pile's
            # individual worm/territory composition.
            # $pNoWormThisTurn = ($remainingTerritory / $remainingCards) *
            #                    (($remainingTerritory - 1) / ($remainingCards - 1))
            # $pAnyThisTurn = 1 - $pNoWormThisTurn
            # $cumulativeNoWorm *= $pNoWormThisTurn
            # $pByThisTurn = 1 - $cumulativeNoWorm
            # $remainingCards -= 2
            # $remainingTerritory -= 2
        }
        else {
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
        }

        Write-Host ('{0,5}    {1,34:P2}    {2,31:P2}    {3,28:F3}' -f $turn, $pAnyThisTurn, $pByThisTurn, $expectedWormsThisTurn)
        $turn++
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
