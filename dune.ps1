# dune.ps1
# Dune (GF9, 2019) spice-deck worm-odds calculator.
#
# Usage after loading this file:
#   dune spice                      standard: 1 deck, defaults to 15 territories + 6 worms
#   dune spice -d                   double spice: 2 decks, defaults to 15 territories + 5 worms
#   dune spice 6 15                 worms, then territories (works with -d too)
#   dune spice -w 6 -t 15 -d        same thing, by name
#   dune spice -d -n 50000          games simulated for -d (default 10000)
#
# Compare game styles side by side (simulated full games, identical rules for every column):
#   dune spice -Compare s:6:15,d:5:15,d:4:15,d:5:16
#   dune spice -Compare s:6:15,d:3-6:15-17 -n 50000 -Csv .\worms.csv
#     scenario = [label=]s|d:worms:territories   (s = single deck, d = double spice)
#     worms and territories can be a range: d:3-6:15-17 means every combination
#     separate scenarios with commas (no spaces); -Csv saves a spreadsheet-ready file
#
# Worms/territories are the totals in the deck(s) at the START of the game (before Turn 1's draw).
#
# To make `dune` available in every PowerShell session, add this line to your
# PowerShell profile (edit with: notepad $PROFILE):
#   . "C:\path\to\dune.ps1"

function Set-DuneDecks {
    # Shuffle the cards and deal them into the deck(s) as evenly as possible (deck A gets the extra card if odd).
    # $Decks is a hashtable of lists: key A only (standard) or keys A and B (double spice).
    param($Cards, $Decks)
    $shuffled = @($Cards | Get-Random -Count @($Cards).Count)
    $Decks['A'].Clear()
    if ($Decks.ContainsKey('B')) {
        $Decks['B'].Clear()
        $sizeA = [int][math]::Ceiling($shuffled.Count / 2)
        $Decks['A'].AddRange([string[]]($shuffled[0..($sizeA - 1)]))
        $Decks['B'].AddRange([string[]]($shuffled[$sizeA..($shuffled.Count - 1)]))
    }
    else {
        $Decks['A'].AddRange([string[]]$shuffled)
    }
}

function Invoke-DuneReshuffle {
    # Pool = whatever is left in the deck(s) + every discarded card EXCEPT, in each discard pile, the most
    # recent territory card and any worms drawn after it. The pool is shuffled and dealt into new deck(s).
    param($Decks, $Discards)
    $pool = [System.Collections.Generic.List[string]]::new()
    foreach ($side in $Decks.Keys) {
        $pool.AddRange($Decks[$side])
    }
    foreach ($side in $Discards.Keys) {
        $discard = $Discards[$side]
        $lastTerritory = $discard.LastIndexOf('T')
        if ($lastTerritory -gt 0) {
            $pool.AddRange($discard.GetRange(0, $lastTerritory))
            $discard.RemoveRange(0, $lastTerritory)
        }
    }
    Set-DuneDecks -Cards $pool -Decks $Decks
}

function Invoke-DuneSimulation {
    # Plays $Games whole games (turns 2..$LastTurn) with 1 deck (standard) or 2 decks (double spice) and
    # returns per-turn and per-game worm statistics. Every game is played out through the last turn.
    param(
        [int]$Territories,
        [int]$Worms,
        [ValidateSet(1, 2)][int]$DeckCount,
        [int]$Games,
        [int]$LastTurn = 10,
        [string]$ProgressLabel = ''
    )

    $sides = if ($DeckCount -eq 2) { @('A', 'B') } else { @('A') }

    # Cards are 'T' (territory) or 'W' (worm). Cards are drawn from the END of a deck's list.
    # Each deck has its own discard pile, in the order the cards were discarded.
    $decks = @{}
    $discards = @{}
    foreach ($side in $sides) {
        $decks[$side] = [System.Collections.Generic.List[string]]::new()
        $discards[$side] = [System.Collections.Generic.List[string]]::new()
    }

    # After Turn 1 (one territory drawn from each deck; worms drawn on Turn 1 are shuffled back in)
    $startingCards = @('T') * ($Territories - $DeckCount) + @('W') * $Worms

    $gamesWithWormOnTurn = @(0) * ($LastTurn + 1)   # games where at least 1 worm was drawn on this turn
    $firstWormOnTurn     = @(0) * ($LastTurn + 1)   # games where this turn had the game's first worm
    $wormsDrawnOnTurn    = @(0) * ($LastTurn + 1)   # worms drawn this turn, summed over all games
    $firstWormTurnSum = 0

    for ($game = 0; $game -lt $Games; $game++) {
        if ($ProgressLabel -ne '' -and ($game % 500 -eq 0)) {
            Write-Progress -Activity 'Simulating games' -Status $ProgressLabel -PercentComplete ([int](100 * $game / $Games))
        }

        Set-DuneDecks -Cards $startingCards -Decks $decks
        # Turn 1's territories are the only cards in the discard piles
        foreach ($side in $sides) {
            $discards[$side].Clear()
            $discards[$side].Add('T')
        }

        $wormSeen = $false   # has a worm already been drawn on an earlier turn of this game?
        for ($turn = 2; $turn -le $LastTurn; $turn++) {
            $wormsThisTurn = 0

            # Draw from deck A, then deck B. If a worm is drawn, keep drawing from that same deck until a territory appears.
            foreach ($side in $sides) {
                $deck = $decks[$side]
                do {
                    $card = $deck[$deck.Count - 1]
                    $deck.RemoveAt($deck.Count - 1)
                    $discards[$side].Add($card)
                    if ($card -eq 'W') { $wormsThisTurn++ }

                    # Reshuffle ONLY right after the last card of a deck has been drawn (the card just drawn
                    # is already in the discard pile, so a territory drawn this turn is kept out of the shuffle)
                    if ($deck.Count -eq 0) {
                        Invoke-DuneReshuffle -Decks $decks -Discards $discards
                    }
                } while ($card -eq 'W')
            }

            $wormsDrawnOnTurn[$turn] += $wormsThisTurn
            if ($wormsThisTurn -gt 0) {
                $gamesWithWormOnTurn[$turn]++
                if (-not $wormSeen) {
                    $firstWormOnTurn[$turn]++
                    $firstWormTurnSum += $turn
                    $wormSeen = $true
                }
            }
        }
    }
    if ($ProgressLabel -ne '') {
        Write-Progress -Activity 'Simulating games' -Completed
    }

    $avgWormsByTurn = @(0.0) * ($LastTurn + 1)
    $pWormByTurn    = @(0.0) * ($LastTurn + 1)
    $gamesWithWorm = 0
    for ($turn = 2; $turn -le $LastTurn; $turn++) {
        $avgWormsByTurn[$turn] = $wormsDrawnOnTurn[$turn] / $Games
        $pWormByTurn[$turn]    = $gamesWithWormOnTurn[$turn] / $Games
        $gamesWithWorm += $firstWormOnTurn[$turn]
    }

    $meanFirstWormTurn = $null
    if ($gamesWithWorm -gt 0) { $meanFirstWormTurn = $firstWormTurnSum / $gamesWithWorm }

    [pscustomobject]@{
        Games             = $Games
        AvgWormsByTurn    = $avgWormsByTurn      # average worms drawn on each turn (index = turn)
        PWormByTurn       = $pWormByTurn         # chance of at least one worm on each turn
        FirstWormOnTurn   = $firstWormOnTurn     # number of games whose first worm came on each turn
        AvgTotalWorms     = ($avgWormsByTurn | Measure-Object -Sum).Sum   # worms per game, turns 2..last
        AvgTurnsWithWorm  = ($pWormByTurn | Measure-Object -Sum).Sum      # turns with any worm per game
        MeanFirstWormTurn = $meanFirstWormTurn   # among games that had a worm
        PNoWorm           = 1 - ($gamesWithWorm / $Games)
    }
}

function Write-DuneCompareRow {
    param($RowLabel, $Cells, $Widths)
    $line = ([string]$RowLabel).PadRight(30)
    for ($i = 0; $i -lt $Cells.Count; $i++) {
        $line += '  ' + ([string]$Cells[$i]).PadLeft($Widths[$i])
    }
    Write-Host $line
}

function Invoke-DuneCompare {
    param(
        [string[]]$Scenarios,
        [int]$Games = 10000,
        [string]$CsvPath,
        [int]$LastTurn = 10
    )

    # --- Turn the scenario strings into a list of scenarios -------------------------------------
    $pattern = '^(?:(?<label>[^=]+)=)?(?<mode>[sd]):(?<w1>\d+)(?:-(?<w2>\d+))?:(?<t1>\d+)(?:-(?<t2>\d+))?$'
    $plan = [System.Collections.Generic.List[object]]::new()
    foreach ($spec in $Scenarios) {
        $m = [regex]::Match($spec.Trim(), $pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        if (-not $m.Success) {
            Write-Error "Can't read scenario '$spec'. Use [label=]s|d:worms:territories, e.g. s:6:15 or d:3-6:15-17"
            return
        }
        $deckCount = if ($m.Groups['mode'].Value -eq 'd') { 2 } else { 1 }
        $modeLetter = if ($deckCount -eq 2) { 'D' } else { 'S' }
        $minTerritories = if ($deckCount -eq 2) { 4 } else { 2 }
        $w1 = [int]$m.Groups['w1'].Value
        $w2 = if ($m.Groups['w2'].Success) { [int]$m.Groups['w2'].Value } else { $w1 }
        $t1 = [int]$m.Groups['t1'].Value
        $t2 = if ($m.Groups['t2'].Success) { [int]$m.Groups['t2'].Value } else { $t1 }
        if ($w1 -gt $w2 -or $t1 -gt $t2) {
            Write-Error "Ranges must go low-high in '$spec'."
            return
        }
        if ($w1 -lt 1 -or $t1 -lt $minTerritories) {
            Write-Error "'$spec' needs at least 1 worm and $minTerritories territory cards."
            return
        }
        $combos = ($w2 - $w1 + 1) * ($t2 - $t1 + 1)
        $userLabel = ''
        if ($m.Groups['label'].Success) { $userLabel = $m.Groups['label'].Value.Trim() }

        for ($w = $w1; $w -le $w2; $w++) {
            for ($t = $t1; $t -le $t2; $t++) {
                $label = "$modeLetter$($w)W/$($t)T"
                if ($userLabel -ne '') {
                    if ($combos -gt 1) { $label = "$userLabel $($w)W/$($t)T" } else { $label = $userLabel }
                }
                $plan.Add([pscustomobject]@{ Label = $label; DeckCount = $deckCount; Worms = $w; Territories = $t })
                if ($plan.Count -gt 60) {
                    Write-Error 'That is more than 60 scenarios - narrow the ranges.'
                    return
                }
            }
        }
    }

    # Column names must be unique
    $seenLabels = @{}
    foreach ($p in $plan) {
        if ($seenLabels.ContainsKey($p.Label)) {
            $seenLabels[$p.Label]++
            $p.Label = "$($p.Label) ($($seenLabels[$p.Label]))"
        }
        else {
            $seenLabels[$p.Label] = 1
        }
    }

    # --- Simulate each scenario ------------------------------------------------------------------
    $results = [System.Collections.Generic.List[object]]::new()
    $done = 0
    foreach ($p in $plan) {
        $done++
        $r = Invoke-DuneSimulation -Territories $p.Territories -Worms $p.Worms -DeckCount $p.DeckCount -Games $Games -LastTurn $LastTurn -ProgressLabel "$($p.Label)  ($done of $($plan.Count))"
        $results.Add($r)
    }

    # --- Print ---------------------------------------------------------------------------------
    $labels = @($plan | ForEach-Object { $_.Label })
    $widths = @($plan | ForEach-Object { [math]::Max(7, $_.Label.Length) })

    Write-Host ''
    Write-Host "Average worms drawn per turn ($Games simulated games per scenario)" -ForegroundColor Cyan
    Write-DuneCompareRow -RowLabel 'Turn' -Cells $labels -Widths $widths
    for ($turn = 1; $turn -le $LastTurn; $turn++) {
        # First Turn always reshuffles drawn worms back into deck!
        $cells = @($results | ForEach-Object { if ($turn -eq 1) { '0.000' } else { '{0:F3}' -f $_.AvgWormsByTurn[$turn] } })
        Write-DuneCompareRow -RowLabel $turn -Cells $cells -Widths $widths
    }

    Write-Host ''
    Write-Host "Per game (turns 2-$LastTurn)" -ForegroundColor Cyan
    Write-DuneCompareRow -RowLabel '' -Cells $labels -Widths $widths
    $cellsWorms = @($results | ForEach-Object { '{0:F2}' -f $_.AvgTotalWorms })
    $cellsTurns = @($results | ForEach-Object { '{0:F2}' -f $_.AvgTurnsWithWorm })
    $cellsFirst = @($results | ForEach-Object { if ($null -eq $_.MeanFirstWormTurn) { 'n/a' } else { '{0:F2}' -f $_.MeanFirstWormTurn } })
    $cellsNone  = @($results | ForEach-Object { '{0:P1}' -f $_.PNoWorm })
    Write-DuneCompareRow -RowLabel 'Worms drawn' -Cells $cellsWorms -Widths $widths
    Write-DuneCompareRow -RowLabel 'Turns with at least one worm' -Cells $cellsTurns -Widths $widths
    Write-DuneCompareRow -RowLabel 'Mean turn of first worm' -Cells $cellsFirst -Widths $widths
    Write-DuneCompareRow -RowLabel 'Games with no worm' -Cells $cellsNone -Widths $widths
    Write-Host ''
    Write-Host 'S = single deck, D = double spice; labels read worms/territories at the start of the game.'
    Write-Host 'Mean turn of first worm only counts games that had a worm.'
    Write-Host ''

    # --- Spreadsheet ----------------------------------------------------------------------------
    if ($CsvPath) {
        $csvRows = [System.Collections.Generic.List[object]]::new()

        function Add-DuneCsvRow {
            param($RowLabel, $Values)
            $row = [ordered]@{ Metric = $RowLabel }
            for ($i = 0; $i -lt $plan.Count; $i++) {
                $row[$plan[$i].Label] = $Values[$i]
            }
            $csvRows.Add([pscustomobject]$row)
        }

        Add-DuneCsvRow -RowLabel 'Decks (1 = single, 2 = double spice)' -Values @($plan | ForEach-Object { $_.DeckCount })
        Add-DuneCsvRow -RowLabel 'Worms at game start' -Values @($plan | ForEach-Object { $_.Worms })
        Add-DuneCsvRow -RowLabel 'Territories at game start' -Values @($plan | ForEach-Object { $_.Territories })
        Add-DuneCsvRow -RowLabel 'Games simulated' -Values @($plan | ForEach-Object { $Games })
        for ($turn = 1; $turn -le $LastTurn; $turn++) {
            $vals = @($results | ForEach-Object { if ($turn -eq 1) { 0 } else { [math]::Round($_.AvgWormsByTurn[$turn], 4) } })
            Add-DuneCsvRow -RowLabel "Avg worms, turn $turn" -Values $vals
        }
        Add-DuneCsvRow -RowLabel "Worms drawn per game (turns 2-$LastTurn)" -Values @($results | ForEach-Object { [math]::Round($_.AvgTotalWorms, 4) })
        Add-DuneCsvRow -RowLabel 'Turns with at least one worm per game' -Values @($results | ForEach-Object { [math]::Round($_.AvgTurnsWithWorm, 4) })
        Add-DuneCsvRow -RowLabel 'Mean turn of first worm' -Values @($results | ForEach-Object { if ($null -eq $_.MeanFirstWormTurn) { '' } else { [math]::Round($_.MeanFirstWormTurn, 4) } })
        Add-DuneCsvRow -RowLabel 'Games with no worm (%)' -Values @($results | ForEach-Object { [math]::Round(100 * $_.PNoWorm, 3) })

        try {
            $csvRows | Export-Csv -Path $CsvPath -NoTypeInformation -Encoding UTF8
            Write-Host ("Saved spreadsheet: " + (Resolve-Path $CsvPath).Path)
        }
        catch {
            Write-Error "Couldn't write '$CsvPath': $($_.Exception.Message)"
        }
        Write-Host ''
    }
}

function Invoke-DuneSpice {
    [CmdletBinding()]
    param(
        [Alias('d')][switch]$DoubleSpice,
        [Alias('w')][ValidateRange(1, 1000)][int]$Worms,
        [Alias('t')][ValidateRange(1, 1000)][int]$Territories,
        [Alias('n')][ValidateRange(100, 10000000)][int]$Games = 10000
    )

    # Defaults depend on the mode; anything passed in wins
    $totalWorms = if ($PSBoundParameters.ContainsKey('Worms')) { $Worms } elseif ($DoubleSpice) { 5 } else { 6 }
    $territoryCards = if ($PSBoundParameters.ContainsKey('Territories')) { $Territories } else { 15 }

    # Turn 1 always draws territories (1 card standard, 2 cards double), and a reshuffle has to be able to put
    # a territory card back in every deck, so very small territory counts can't be modelled.
    $minTerritories = if ($DoubleSpice) { 4 } else { 2 }
    if ($territoryCards -lt $minTerritories) {
        Write-Error "This mode needs at least $minTerritories territory cards."
        return
    }

    if ($DoubleSpice) {
        $mode = "Double-spice variant: 2 decks (1 draw from each); $territoryCards territory cards + $totalWorms worms"
    }
    else {
        $deckA = $territoryCards + $totalWorms
        $mode = "Standard: 1 card per turn; $territoryCards territory cards + $totalWorms worms"
    }

    $turn = 1
    $cumulativeNoWorm = 1.0
    $pByThisTurn = 0.0
    $expectedWormsThisTurn = 0
    $tempWorms = 0
    $tempDeck = 0
    $anyNotReachable = $false

    function Write-DuneRow {
        # $null for PAny/Expected means "not defined for this turn" and is shown as n/a
        param($Turn, $PAny, $PBy, $Expected)
        $a = if ($null -eq $PAny) { 'n/a' } else { '{0:P2}' -f $PAny }
        $b = '{0:P2}' -f $PBy
        $c = if ($null -eq $Expected) { 'n/a' } else { '{0:F3}' -f $Expected }
        Write-Host ('{0,5}    {1,34}    {2,31}    {3,28}' -f $Turn, $a, $b, $c)
    }

    Write-Host "`nDune spice-deck worm odds" -ForegroundColor Cyan
    Write-Host $mode
    Write-Host ''
    if ($DoubleSpice) {
        Write-Host 'Turn-by-turn odds over simulated full games (worms drawn on earlier turns and reshuffles included):' -ForegroundColor Cyan
    }
    else {
        Write-Host 'Turn-by-turn odds, conditional on NO worm having appeared on an earlier turn:' -ForegroundColor Cyan
    }
    Write-Host ('{0,5}    {1,34}    {2,31}    {3,28}' -f 'Turn', 'Chance of worm appearing this turn', 'Chance of worm appearing by now', 'Average # of worms this turn')
    Write-Host ('{0,5}    {1,34}    {2,31}    {3,28}' -f '-----', '----------------------------------', '-------------------------------', '----------------------------')

    # First Turn always reshuffles drawn worms back into deck!
    Write-DuneRow -Turn $turn -PAny 0 -PBy 0 -Expected 0
    $turn++
    if ($DoubleSpice){
        # Calculating the odds exactly is way too complicated (we would have to average over every starting deck
        # configuration AND every reshuffle). So we simulate whole games card by card and count what happens.
        $lastTurn = 10
        $sim = Invoke-DuneSimulation -Territories $territoryCards -Worms $totalWorms -DeckCount 2 -Games $Games -LastTurn $lastTurn -ProgressLabel 'Double spice'

        $cumulativeFirstWorm = 0
        for ($turn = 2; $turn -le $lastTurn; $turn++) {
            $cumulativeFirstWorm += $sim.FirstWormOnTurn[$turn]
            $pByThisTurn = $cumulativeFirstWorm / $Games
            Write-DuneRow -Turn $turn -PAny $sim.PWormByTurn[$turn] -PBy $pByThisTurn -Expected $sim.AvgWormsByTurn[$turn]
        }
        Write-Host ''
        Write-Host "Estimated from $Games simulated games."
    }
    else {
        $deckA--   # Turn 1 drew a territory
        while ($turn -lt 11) {
            if ($cumulativeNoWorm -le 0) {
                # Only worms were left in the deck on an earlier turn, so a worm was certain by then
                Write-DuneRow -Turn $turn -PAny $null -PBy 1 -Expected $null
                $anyNotReachable = $true
                $turn++
                continue
            }

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

            Write-DuneRow -Turn $turn -PAny $pAnyThisTurn -PBy $pByThisTurn -Expected $expectedWormsThisTurn
            $turn++
        }
    }

    if ($anyNotReachable) {
        Write-Host 'n/a = a worm is certain to have appeared earlier, so this turn has no "no earlier worm" case.'
    }
    Write-Host ''
}

function dune {
    [CmdletBinding()]
    param(
        [Parameter(Position=0)]
        [ValidateSet('spice')]
        [string]$Command,
        [Parameter(Position=1)]
        [Alias('w')]
        [ValidateRange(1, 1000)]
        [int]$Worms,
        [Parameter(Position=2)]
        [Alias('t')]
        [ValidateRange(1, 1000)]
        [int]$Territories,
        [Alias('d')]
        [switch]$DoubleSpice,
        [Alias('c')]
        [string[]]$Compare,
        [Alias('n')]
        [ValidateRange(100, 10000000)]
        [int]$Games = 10000,
        [Alias('o')]
        [string]$Csv
    )

    if ($Command -eq 'spice') {
        if ($PSBoundParameters.ContainsKey('Compare')) {
            Invoke-DuneCompare -Scenarios $Compare -Games $Games -CsvPath $Csv
            return
        }
        if ($PSBoundParameters.ContainsKey('Csv')) {
            Write-Warning '-Csv only applies together with -Compare.'
        }

        # Only pass worms/territories along if they were given, so each mode keeps its own defaults
        $spiceArgs = @{ DoubleSpice = [bool]$DoubleSpice; Games = $Games }
        if ($PSBoundParameters.ContainsKey('Worms')) { $spiceArgs.Worms = $Worms }
        if ($PSBoundParameters.ContainsKey('Territories')) { $spiceArgs.Territories = $Territories }
        Invoke-DuneSpice @spiceArgs
    }
    else {
        Write-Host 'Usage: dune spice [worms] [territories] [-d]   (or: dune spice -w 6 -t 15 -d)'
        Write-Host '       dune spice -Compare s:6:15,d:5:15,d:4:15 [-n games] [-Csv file.csv]'
    }
}

# Running this file directly supports: .\dune.ps1 spice [worms] [territories] [-d] [-Compare ...]
# Dot-sourcing it loads the `dune` function into the current session.
if ($MyInvocation.InvocationName -ne '.') {
    if ($args.Count -gt 0) { & dune @args }
    else { Write-Host 'Loaded dune command. Use: dune spice [worms] [territories] [-d]   or   dune spice -Compare s:6:15,d:5:15' }
}
