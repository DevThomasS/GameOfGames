import { Factions, People, VictoryTypes } from '../../models/models';

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
        VictoryTypes.Defeat
      ),
      new Players( 0, 2,
        People.ChrisS,
        Factions.Harkonnen,
        VictoryTypes.Solo
      ),
      new Players( 0, 3,
        People.AmandaS,
        Factions.Fremen,
        VictoryTypes.Defeat
      ),
      new Players( 0, 4,
        People.TomS,
        Factions.Emperor,
        VictoryTypes.Defeat
      ),
      new Players( 0, 5,
        People.AliciaS,
        Factions.Atreides,
        VictoryTypes.Defeat,
      ),
      new Players( 0, 6,
        People.KenS,
        Factions.SpacingGuild,
        VictoryTypes.Defeat
      ),
      // ... Add more players as needed
    ];
  }
}
