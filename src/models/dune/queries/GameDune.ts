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
        DuneComponent.getComponentsByQuery( [], [ 4, 11, 15, ] ),
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
      new GameDune( 2, 8,
        Players.getPlayersByGameId( 2 ),
        // Default Exhibition + Technology Cards
        DuneComponent.getComponentsByQuery( [], [ 13, ] ),
        9,
        Locations.Madison
      ),
      new GameDune( 3, 10,
        Players.getPlayersByGameId( 3 ),
        // Default Exhibition - Faction Leaders
        DuneComponent.getComponentsByQuery( [ 50, ], [] ),
        8,
        Locations.Madison
      ),
      new GameDune( 4, 8,
        Players.getPlayersByGameId( 4 ),
        // Default Exhibition - Faction Leaders - Advanced Strongholds
        DuneComponent.getComponentsByQuery( [ 20, 50, ], [] ),
        6,
        Locations.Remote
      ),
      new GameDune( 5, 10,
        Players.getPlayersByGameId( 5 ),
        // Default Exhibition - Advanced Strongholds
        DuneComponent.getComponentsByQuery( [ 20, ], [] ),
        10,
        Locations.Madison
      ),
      new GameDune( 6, 4,
        Players.getPlayersByGameId( 6 ),
        // Default Exhibition - Advanced Strongholds
        DuneComponent.getComponentsByQuery( [ 20, 22, 23, 24, 26, 50, 60, 61, ], [ 0, 12, ] ),
        3,
        Locations.Chicago
      ),
      new GameDune( 7, 10,
        Players.getPlayersByGameId( 7 ),
        // Default Exhibition
        DuneComponent.getComponentsByQuery( [], [] ),
        10,
        Locations.Madison
      ),
      new GameDune( 8, 4,
        Players.getPlayersByGameId( 8 ),
        // Default Exhibition - 
        DuneComponent.getComponentsByQuery( [ 2, 22, 23, 25, 26, 50, 100, 101, 102, 103, ], [ 0, ] ),
        4, // TODO
        Locations.Chicago
      ),
      // ... Add more games as needed
    ];
  }
}
