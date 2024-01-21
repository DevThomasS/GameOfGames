import { Alarms, Expansions, Notes } from '../../models';

export default class GameNotes {
  game_id: number;
  rules_disputes: Notes[];
  variant_concerns: Notes[];
  meta_insights: Notes[];

  constructor(
    gameId: number,
    rulesDisputes: Notes[],
    variantConcerns: Notes[],
    metaInsights: Notes[],
  ) {
    this.game_id = gameId;
    this.rules_disputes = rulesDisputes;
    this.variant_concerns = variantConcerns;
    this.meta_insights = metaInsights;
  }

  public static getNotesByGameId( gameId: number ): GameNotes {
    const gameNotes = this.getAllGameNotes().find( notes => notes.game_id === gameId );
    return gameNotes ? gameNotes : new GameNotes( -1, [], [], [] );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  private static getAllGameNotes(): GameNotes[] {
    return [
      new GameNotes( 0,
        [
          new Notes( 'Truthtrance', Expansions.BaseGame, Alarms.Disagreement,
          'Can you use ask a player a question that limits future actions?' ),
        ],
        [
          new Notes( 'Amal + Bribes', Expansions.IxiansTleilaxu, Alarms.Disruptive,
          'Should Amal halve the spice in front of player shields from bribes?' ),
        ],
        [
          new Notes( 'Poison Blade + Shield Snooper', Expansions.BaseGame, Alarms.Watch,
          'Any limitations on either of these cards? Should they count as 2 treachery cards in battle?' ),
          new Notes( 'Seat Chance %', Expansions.BaseGame, Alarms.Watch,
          'Seat 1 last order: 17.92%;  Seat 2 last order: 16.56%;  Seat 3 last order: 16.33%;  Seat 4 last order: 16.32%;  Seat 5 last order: 16.33%;  Seat 6 last order: 16.33%' ),
        ]
      ),
      new GameNotes( 2,
        [
        ],
        [
          new Notes( 'Karama Cards', Expansions.CHOAMRichese, Alarms.Watch,
          'This expansion provided replacements to the 2 base Karama cards. We like to add them to treachery deck.' ),
          new Notes( 'Richese Special Cards', Expansions.CHOAMRichese, Alarms.Watch,
          'Make sure to only include the 10. We decided to rule that discarded black market cards get reshuffled with rest of the discards.' ),
          new Notes( 'Sandtrout', Expansions.CHOAMRichese, Alarms.Watch,
          'This card has once again quickly decided the game.  Needs a change?' ),
        ],
        [
          new Notes( '8 players', Expansions.BaseGame, Alarms.Watch,
          'Eight players was not bad! But the saving grace was technology giving another settlement & Jucarutu Sietch.  Perhaps we need to make sure #settlments = #players?' ),
        ]
      ),
      // ... Add more notes as needed
    ];
  }
}
