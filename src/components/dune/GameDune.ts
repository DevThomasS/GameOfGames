import { Locations } from '../../models/common/Locations';
import Components from './Components';
import Players from './Players';

export default class GameDune {
  game_id: number;
  end_turn: number;
  players: Players[];
  components: Components[];
  start: Date;
  end: Date;
  location: Locations;

  constructor(
    gameId: number,
    endTurn: number,
    players: Players[],
    components: Components[],
    start: Date,
    end: Date,
    location: Locations
  ) {
    this.game_id = gameId;
    this.end_turn = endTurn;
    this.players = players;
    this.components = components;
    this.start = start;
    this.end = end;
    this.location = location;
  }

  public static getGameByGameId( gameId: number ): GameDune {
    const game = this.getAllGames().find( game => game.game_id === gameId );
    return game ? game : new GameDune( -1, -1, [], [], new Date(), new Date(), Locations.Unknown );
  }

  public static getGamesByLocation( location: Locations ): GameDune[] {
    return this.getAllGames().filter( game => game.location === location );
  }

  public static getGamesByNumberOfPlayers( playerCount: number ): GameDune[] {
    return this.getAllGames().filter( game => game.players.length === playerCount );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  private static getAllGames(): GameDune[] {
    return [
      new GameDune( 0, 10,
        Players.getPlayersByGameId( 0 ),
        // Did not include: normal spice blows, technology tokens, advanced strongholds, leader skill cards, objective cards.
        Components.getComponentsByExcludedComponents( [ 0, 6, 7, 8, 17 ] ),
        new Date( 2023, 11, 26 ),
        new Date( 2023, 11, 29 ),
        Locations.Chicago
      ),
      // ... Add more games as needed
    ];
  }
}
