import { Factions, GameStatistics, People, } from '../../models';

export default class PersonData {
  person: People;
  loaded: boolean;
  data: GameStatistics;

  constructor (
    person: People,
  ) {
    this.person = person;
    this.loaded = false;
    this.data = new GameStatistics( Factions.Unknown, People.Unknown, 0, 0, People.Unknown, 0, People.Unknown, Factions.Unknown, 0 );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  public static getPeople(): PersonData[] {
    return [
      new PersonData( People.AliciaS ),
      new PersonData( People.AmandaS ),
      new PersonData( People.ChrisS ),
      new PersonData( People.KenS ),
      new PersonData( People.ThomasS ),
      new PersonData( People.TomS ),
      new PersonData( People.Unknown ), // Special case for seat position.
    ];
  }
}
