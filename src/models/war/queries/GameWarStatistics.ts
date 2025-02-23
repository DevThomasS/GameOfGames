import { Nations, GameWar, People, VictoryTypeList, } from '../../models';

export default class GameWarStatistics {
  nation: Nations;
  person: People;
  usage_rate: number;
  win_rate: number;
  champion: string;
  average_game_length: number;
  adversary: People;
  rival_house: Nations;
  seat_rates: number[]; // 1-12, initial storm order, win rate per seat.

  constructor (
    nation: Nations,
    person: People,
    usageRate: number,
    winRate: number,
    champion: string,
    averageGameLength: number,
    adversary: People,
    rivalHouse: Nations,
    seatRates: number[]
  ) {
    this.nation = nation;
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
  public static getNationStatistics( totalGames: GameWar[], nation: Nations ): GameWarStatistics {
    const games = totalGames.filter( game => game.players.find( player => player.nation === nation ) );
    const wins = this.getNationWins( games, nation );
    const defeats = this.getNationDefeats( games, nation );

    return new GameWarStatistics(
      nation,
      People.Unknown,
      ( games.length || 0 ) / ( totalGames.length || 1 ),
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getMaxPerson( wins, nation ), // Nation's best player.
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getMaxPerson( defeats, Nations.Unknown ), // Person who wins against this nation the most.
      this.getMaxNation( defeats, People.Unknown ),// Nation who wins against this nation the most.
      [],
    );
  }

  public static getPersonStatistics( totalGames: GameWar[], person: People ): GameWarStatistics {
    if ( person === People.Unknown )
    {
      return this.getUnknownPersonStatistics( totalGames );
    }
    const games = totalGames.filter( game => game.players.find( player => player.person === person ) );
    const wins = this.getPersonWins( games, person );
    const defeats = this.getPersonDefeats( games, person );

    return new GameWarStatistics(
      Nations.Unknown,
      person,
      games.length,
      ( wins.length || 0 ) / ( games.length || 1 ),
      this.getMaxNation( wins, person ), // Player's best nation.
      ( games.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( games.length || 1 ),
      this.getMaxPerson( defeats, Nations.Unknown ), // Person who wins against this person the most.
      this.getMaxNation( defeats, People.Unknown ), // Nation who wins against this person the most.
      [],
    );
  }

  private static getUnknownPersonStatistics( totalGames: GameWar[] ): GameWarStatistics {
    return new GameWarStatistics(
      Nations.Unknown,
      this.getMaxPerson( totalGames, Nations.Unknown ), // Person who has won the most games.
      totalGames.length,
      0,
      this.getMaxNation( totalGames, People.Unknown ), // Nation who has won the most.
      ( totalGames.reduce( ( acc, game ) => acc + game.end_turn, 0 ) || 0 ) / ( totalGames.length || 1 ),
      People.Unknown,
      Nations.Unknown,
      this.getSeatRates( totalGames ),
    )
  }

  private static getNationWins( totalGames: GameWar[], nation: Nations ): GameWar[] {
    return totalGames.filter( game => game.players.find( player => VictoryTypeList.includes( player.victory_type ) && player.nation === nation ) );
  }

  private static getNationDefeats( totalGames: GameWar[], nation: Nations ): GameWar[] {
    return totalGames.filter( game => game.players.find( player => !VictoryTypeList.includes( player.victory_type ) && player.nation === nation ) );
  }

  private static getMaxPerson( games: GameWar[], nation: Nations ): People {
    const prospects = [ { person: People.Unknown, victories: 0 } ];
  
    for ( const game of games ) {
      const winners = nation === Nations.Unknown
        ? game.players.filter( player => VictoryTypeList.includes( player.victory_type ) )
        : game.players.filter( player => VictoryTypeList.includes( player.victory_type ) && player.nation === nation );

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

  private static getMaxNation( games: GameWar[], person: People ): Nations {
    const prospects = [ { nation: Nations.Unknown, victories: 0 } ];
    let existingPerson = prospects.find( (prospect) => prospect.nation === Nations.Unknown );
    let winners = [];
  
    for ( const game of games ) {
      if ( person === People.Unknown ) {
        winners = game.players.filter( player => VictoryTypeList.includes( player.victory_type ) );
      } else {
        winners = game.players.filter( player => VictoryTypeList.includes( player.victory_type ) && player.person === person );
      }

      for ( const winner of winners ) {
        existingPerson = prospects.find( (prospect) => prospect.nation === winner.nation );
        
        if ( existingPerson ) {
          existingPerson.victories++;
        } else {
          prospects.push( { nation: winner.nation, victories: 1 } );
        }
      }
    }

    return prospects.reduce( ( acc, person ) => person.victories > acc.victories ? person : acc ).nation;
  }
  
  private static getPersonWins( totalGames: GameWar[], person: People ): GameWar[] {
    return totalGames.filter( game => game.players.find( player => VictoryTypeList.includes( player.victory_type ) && player.person === person ) );
  }

  private static getPersonDefeats( totalGames: GameWar[], person: People ): GameWar[] {
    return totalGames.filter( game => game.players.find( player => !VictoryTypeList.includes( player.victory_type ) && player.person === person ) );
  }

  private static getSeatRates( games: GameWar[] ): number[] {
    const seatRates = [ 0, 0, 0, 0, 0, 0, ];
  
    for ( const game of games ) {
      const wonGame = game.players.filter( player => VictoryTypeList.includes( player.victory_type ) );
      
      for ( const victory of wonGame ) {
        seatRates[victory.seat_position - 1]++;
      }
    }

    return seatRates;
  }
}
