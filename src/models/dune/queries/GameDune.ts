import { DuneComponent, Locations, Players,  } from '../../models';

export default class GameDune {
  game_id: number;
  end_turn: number;
  players: Players[];
  components: DuneComponent[];
  duration: number;
  location: Locations;

  constructor(
    gameId: number,
    endTurn: number,
    players: Players[],
    components: DuneComponent[],
    duration: number,
    location: Locations
  ) {
    this.game_id = gameId;
    this.end_turn = endTurn;
    this.players = players;
    this.components = components;
    this.duration = duration;
    this.location = location;
  }
  
  public static getGameByGameId( gameId: number ): GameDune {
    const game = this.getAllGames().find( game => game.game_id === gameId );
    return game ? game : new GameDune( -1, -1, [], [], -1, Locations.Unknown );
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
  public static getAllGames(): GameDune[] {
    return [
      new GameDune( 0, 10,
        Players.getPlayersByGameId( 0 ),
        // Default Exhibition + All extra Treachery Cards + Alliance Betrayal Cards
        DuneComponent.getComponentsByQuery( [], [ 4, 11, 15 ] ),
        8,
        Locations.Chicago
      ),
      new GameDune( 1, 5,
        Players.getPlayersByGameId( 1 ),
        // Core Game - No Battle Payment, No Karama Faction Powers
        DuneComponent.getComponentsByQuery( [ 2, 51, ], [] ),
        3,
        Locations.Chicago
      ),
      // ... Add more games as needed
    ];
  }
}
