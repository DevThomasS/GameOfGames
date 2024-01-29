import { Factions, People, VictoryTypes } from '../../models';

export default class Players {
  person: People;
  game_id: number;
  faction: Factions;
  seat_position: number;
  victory_type: VictoryTypes;

  constructor(
    gameId: number,
    seatPosition: number, // 1-12, initial storm order. Also implies number of players.
    person: People,
    faction: Factions,
    victoryType: VictoryTypes
  ) {
    this.game_id = gameId;
    this.seat_position = seatPosition;
    this.person = person;
    this.faction = faction;
    this.victory_type = victoryType;
  }

  public static getPlayersByGameId( gameId: number ): Players[] {
    return this.getAllPlayers().filter( player => player.game_id === gameId );
  }

  public static getPlayersByPersonId( person: People ): Players[] {
    return this.getAllPlayers().filter( player => player.person === person );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  private static getAllPlayers(): Players[] {
    return [
      // Dec 29, 2023
      new Players( 0, 1,
        People.ThomasS,
        Factions.Moritani,
        VictoryTypes.Defeat,
      ),
      new Players( 0, 2,
        People.ChrisS,
        Factions.Harkonnen,
        VictoryTypes.SandTroutSolo,
      ),
      new Players( 0, 3,
        People.AmandaS,
        Factions.Fremen,
        VictoryTypes.Defeat,
      ),
      new Players( 0, 4,
        People.TomS,
        Factions.Emperor,
        VictoryTypes.Defeat,
      ),
      new Players( 0, 5,
        People.AliciaS,
        Factions.Atreides,
        VictoryTypes.Defeat,
      ),
      new Players( 0, 6,
        People.KenS,
        Factions.SpacingGuild,
        VictoryTypes.Defeat,
      ),
      // Jan 13, 2024
      new Players( 1, 1,
        People.JackI,
        Factions.SpacingGuild,
        VictoryTypes.Alliance,
      ),
      new Players( 1, 2,
        People.ZakA,
        Factions.Atreides,
        VictoryTypes.Defeat,
      ),
      new Players( 1, 3,
        People.TeddyI,
        Factions.Fremen,
        VictoryTypes.Alliance,
      ),
      new Players( 1, 4,
        People.ZachH,
        Factions.BeneGesserit,
        VictoryTypes.Defeat,
      ),
      new Players( 1, 5,
        People.LoganR,
        Factions.Harkonnen,
        VictoryTypes.Defeat,
      ),
      // Jan 20, 2024
      new Players( 2, 1,
        People.ThomasS,
        Factions.Richese,
        VictoryTypes.Defeat,
      ),
      new Players( 2, 2,
        People.ChrisS,
        Factions.BeneGesserit,
        VictoryTypes.Defeat,
      ),
      new Players( 2, 3,
        People.NathanW,
        Factions.CHOAM,
        VictoryTypes.Defeat,
      ),
      new Players( 2, 4,
        People.ElizabethS,
        Factions.Emperor,
        VictoryTypes.SandTroutSolo,
      ),
      new Players( 2, 5,
        People.MeganW,
        Factions.Fremen,
        VictoryTypes.SandTroutDefeat,
      ),
      new Players( 2, 6,
        People.AmandaS,
        Factions.Harkonnen,
        VictoryTypes.Defeat,
      ),
      new Players( 2, 7,
        People.FrScott,
        Factions.SpacingGuild,
        VictoryTypes.Defeat,
      ),
      new Players( 2, 8,
        People.JoeS,
        Factions.Moritani,
        VictoryTypes.Defeat,
      ),
      // Jan 28, 2024
      new Players( 3, 1,
        People.ThomasS,
        Factions.Atreides,
        VictoryTypes.Defeat,
      ),
      new Players( 3, 2,
        People.RyanH,
        Factions.Emperor,
        VictoryTypes.Defeat,
      ),
      new Players( 3, 3,
        People.ChrisS,
        Factions.Harkonnen,
        VictoryTypes.SpecialSpacingGuild,
      ),
      new Players( 3, 4,
        People.TheresaB,
        Factions.Tleilaxu,
        VictoryTypes.Defeat,
      ),
      new Players( 3, 5,
        People.SarahH,
        Factions.SpacingGuild,
        VictoryTypes.SpecialSpacingGuild,
      ),
      new Players( 3, 6,
        People.TylerM,
        Factions.Fremen,
        VictoryTypes.Defeat,
      ),
      // ... Add more players as needed
    ];
  }
}
