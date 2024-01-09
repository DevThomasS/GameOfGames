import { Factions, GameDune, People, VictoryTypes, } from '../../models';

export default class GameStatistics {
  faction: Factions;
  person: People;
  usage_rate: number;
  win_rate: number;
  champion: People;
  average_game_length: number;
  adversary: People;
  rival_house: Factions;
  seat_rate: number; // 1-12, initial storm order. Also implies number of players.

  constructor (
    faction: Factions,
    person: People,
    usageRate: number,
    winRate: number,
    champion: People,
    averageGameLength: number,
    adversary: People,
    rivalHouse: Factions,
    seatRate: number
  ) {
    this.faction = faction;
    this.person = person;
    this.usage_rate = usageRate;
    this.win_rate = winRate;
    this.champion = champion;
    this.average_game_length = averageGameLength;
    this.adversary = adversary;
    this.rival_house = rivalHouse;
    this.seat_rate = seatRate;
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  public static getFactionStatistics( totalGames: GameDune[], faction: Factions ): GameStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.faction === faction ) );
    const wins = this.getFactionWins( games, faction );
    const defeats = this.getFactionDefeats( games, faction );

    return new GameStatistics(
      faction,
      People.Unknown,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats ),
      0,
    );
  }

  public static getPersonStatistics( totalGames: GameDune[], person: People ): GameStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.person === person ) );
    const wins = this.getFactionWins( games, person );
    const defeats = this.getFactionDefeats( games, person );

    return new GameStatistics(
      Factions.Unknown,
      person,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getChampion( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats ),
      this.getChampion( games ),
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
