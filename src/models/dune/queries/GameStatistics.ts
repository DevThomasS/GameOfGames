import { Factions, GameDune, People, VictoryTypes, } from '../../models';

export default class GameStatistics {
  faction: Factions;
  person: People;
  usage_rate: number;
  win_rate: number;
  champion: string;
  average_game_length: number;
  adversary: People;
  rival_house: Factions;
  seat_rates: number[]; // 1-12, initial storm order, win rate per seat.

  constructor (
    faction: Factions,
    person: People,
    usageRate: number,
    winRate: number,
    champion: string,
    averageGameLength: number,
    adversary: People,
    rivalHouse: Factions,
    seatRates: number[]
  ) {
    this.faction = faction;
    this.person = person;
    this.usage_rate = usageRate;
    this.win_rate = winRate;
    this.champion = champion;
    this.average_game_length = averageGameLength;
    this.adversary = adversary;
    this.rival_house = rivalHouse;
    this.seat_rates = seatRates;
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////

  //TODO: types of victories! Make sure to catch solo/backstab/alliance wins, as well as special victories.

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
      [],
    );
  }

  public static getPersonStatistics( totalGames: GameDune[], person: People ): GameStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.person === person ) );
    const wins = this.getPersonWins( games, person );
    const defeats = this.getPersonDefeats( games, person );

    return new GameStatistics(
      Factions.Unknown,
      person,
      games.length,
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getRivalHouse( wins ),
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getChampion( defeats ),
      this.getRivalHouse( defeats ),
      this.getSeatRates( games, person ),
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
  
  private static getPersonWins( totalGames: GameDune[], person: People ): GameDune[] {
    const victories = [ VictoryTypes.Alliance, VictoryTypes.MultiAlliance, VictoryTypes.Solo, VictoryTypes.SpecialFremen, VictoryTypes.SpecialSpacingGuild ];
    return totalGames.filter( game => game.players.find( player => victories.includes( player.victory_type ) && player.person === person ) );
  }

  private static getPersonDefeats( totalGames: GameDune[], person: People ): GameDune[] {
    const victories = [ VictoryTypes.Alliance, VictoryTypes.MultiAlliance, VictoryTypes.Solo, VictoryTypes.SpecialFremen, VictoryTypes.SpecialSpacingGuild ];
    return totalGames.filter( game => game.players.find( player => !victories.includes( player.victory_type ) && player.person === person ) );
  }

  private static getSeatRates( games: GameDune[], person: People ): number[] {
    const victories = [ VictoryTypes.Alliance, VictoryTypes.MultiAlliance, VictoryTypes.Solo, VictoryTypes.SpecialFremen, VictoryTypes.SpecialSpacingGuild ];
    const seatRates = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  
    for ( const game of games ) {
      const wonGame = game.players.filter( player => victories.includes( player.victory_type ) && player.person === person );
      
      if ( wonGame ) {
        seatRates[wonGame[0].seat_position]++;
      }
    }

    return seatRates;
  }
}
