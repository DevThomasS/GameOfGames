import { Factions, GameDune, People, VictoryTypes, } from '../../models';

export default class FactionStatistics {
  faction: Factions;
  usage_rate: number;
  win_rate: number;
  champion: People;
  average_game_length: number;
  adversary: People;
  rival_house: Factions;

  constructor (
    faction: Factions,
    usageRate: number,
    winRate: number,
    champion: People,
    averageGameLength: number,
    adversary: People,
    rivalHouse: Factions
  ) {
    this.faction = faction;
    this.usage_rate = usageRate;
    this.win_rate = winRate;
    this.champion = champion;
    this.average_game_length = averageGameLength;
    this.adversary = adversary;
    this.rival_house = rivalHouse;
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  public static getAtreidesStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Atreides ) );
    const wins = this.getFactionWins( games, Factions.Atreides );
    const defeats = this.getFactionDefeats( games, Factions.Atreides );

    return new FactionStatistics(
      Factions.Atreides,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getHarkonnenStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Harkonnen ) );
    const wins = this.getFactionWins( games, Factions.Harkonnen );
    const defeats = this.getFactionDefeats( games, Factions.Harkonnen );

    return new FactionStatistics(
      Factions.Harkonnen,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      Factions.Unknown
    );
  }
  
  public static getEmperorStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Emperor ) );
    const wins = this.getFactionWins( games, Factions.Emperor );
    const defeats = this.getFactionDefeats( games, Factions.Emperor );

    return new FactionStatistics(
      Factions.Emperor,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getSpacingGuildStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.SpacingGuild ) );
    const wins = this.getFactionWins( games, Factions.SpacingGuild );
    const defeats = this.getFactionDefeats( games, Factions.SpacingGuild );

    return new FactionStatistics(
      Factions.SpacingGuild,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getFremenStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Fremen ) );
    const wins = this.getFactionWins( games, Factions.Fremen );
    const defeats = this.getFactionDefeats( games, Factions.Fremen );

    return new FactionStatistics(
      Factions.Fremen,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getBeneGesseritStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.BeneGesserit ) );
    const wins = this.getFactionWins( games, Factions.BeneGesserit );
    const defeats = this.getFactionDefeats( games, Factions.BeneGesserit );

    return new FactionStatistics(
      Factions.BeneGesserit,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      Factions.Unknown
    );
  }
  
  public static getIxiansStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Ixians ) );
    const wins = this.getFactionWins( games, Factions.Ixians );
    const defeats = this.getFactionDefeats( games, Factions.Ixians );

    return new FactionStatistics(
      Factions.Ixians,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getTleilaxuStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Tleilaxu ) );
    const wins = this.getFactionWins( games, Factions.Tleilaxu );
    const defeats = this.getFactionDefeats( games, Factions.Tleilaxu );

    return new FactionStatistics(
      Factions.Tleilaxu,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getRicheseStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Richese ) );
    const wins = this.getFactionWins( games, Factions.Richese );
    const defeats = this.getFactionDefeats( games, Factions.Richese );

    return new FactionStatistics(
      Factions.Richese,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getCHOAMStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.CHOAM ) );
    const wins = this.getFactionWins( games, Factions.CHOAM );
    const defeats = this.getFactionDefeats( games, Factions.CHOAM );

    return new FactionStatistics(
      Factions.CHOAM,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getEcazStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Ecaz ) );
    const wins = this.getFactionWins( games, Factions.Ecaz );
    const defeats = this.getFactionDefeats( games, Factions.Ecaz );

    return new FactionStatistics(
      Factions.Ecaz,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }
  
  public static getMoritaniStatistics( totalGames: GameDune[] ): FactionStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === Factions.Moritani ) );
    const wins = this.getFactionWins( games, Factions.Moritani );
    const defeats = this.getFactionDefeats( games, Factions.Moritani );

    return new FactionStatistics(
      Factions.Moritani,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats )
    );
  }

  private static getFactionWins( totalGames: GameDune[], faction: Factions ): GameDune[] {
    const victories = [ VictoryTypes.Alliance, VictoryTypes.MultiAlliance, VictoryTypes.Solo, VictoryTypes.SpecialFremen, VictoryTypes.SpecialSpacingGuild ];
    return totalGames.filter( game => game.players.find( player => victories.includes( player.victory_type ) && player.faction === faction ) );
  }

  private static getFactionDefeats( totalGames: GameDune[], faction: Factions ): GameDune[] {
    const victories = [ VictoryTypes.Alliance, VictoryTypes.MultiAlliance, VictoryTypes.Solo, VictoryTypes.SpecialFremen, VictoryTypes.SpecialSpacingGuild ];
    return totalGames.filter( game => game.players.find( player => !victories.includes( player.victory_type ) && player.faction === faction ) );
  }

  private static getChampion( games: GameDune[] ): People {
    const victories = [ VictoryTypes.Alliance, VictoryTypes.MultiAlliance, VictoryTypes.Solo, VictoryTypes.SpecialFremen, VictoryTypes.SpecialSpacingGuild ];
    const prospects = [ { person: People.Unknown, victories: 0 } ];
  
    for ( const game of games ) {
      const winners = game.players.filter( player => victories.includes( player.victory_type ) );

      for ( const winner of winners ) {
        const existingPerson = prospects.find( (prospect) => prospect.person === winner.person );
        
        if ( existingPerson ) {
          existingPerson.victories++;
        } else {
          prospects.push( { person: winner.person, victories: 1 } );
        }
      }
    }

    return prospects.reduce( ( acc, person ) => person.victories > acc.victories ? person : acc ).person;
  }

  private static getRivalHouse( games: GameDune[] ): Factions {
    const victories = [ VictoryTypes.Alliance, VictoryTypes.MultiAlliance, VictoryTypes.Solo, VictoryTypes.SpecialFremen, VictoryTypes.SpecialSpacingGuild ];
    const prospects = [ { faction: Factions.Unknown, victories: 0 } ];
  
    for ( const game of games ) {
      const winners = game.players.filter( player => victories.includes( player.victory_type ) );

      for ( const winner of winners ) {
        const existingPerson = prospects.find( (prospect) => prospect.faction === winner.faction );
        
        if ( existingPerson ) {
          existingPerson.victories++;
        } else {
          prospects.push( { faction: winner.faction, victories: 1 } );
        }
      }
    }

    return prospects.reduce( ( acc, person ) => person.victories > acc.victories ? person : acc ).faction;
  }
}
