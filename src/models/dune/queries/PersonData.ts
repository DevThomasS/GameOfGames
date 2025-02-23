import { Factions, GameDuneStatistics, People, } from '../../models';

export default class PersonData {
  person: People;
  loaded: boolean;
  data: GameDuneStatistics;

  constructor (
    person: People,
  ) {
    this.person = person;
    this.loaded = false;
    this.data = new GameDuneStatistics( Factions.Unknown, People.Unknown, 0, 0, People.Unknown, 0, People.Unknown, Factions.Unknown, [] );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  public static getPeople(): PersonData[] {
    const people = [];
    for ( const person of Object.values( People ) ) {
      people.push( new PersonData( person ) );
    }
    return people;
  }
}
