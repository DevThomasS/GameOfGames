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
        ]
      ),
      // ... Add more notes as needed
    ];
  }
}
