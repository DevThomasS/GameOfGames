import { Nations, GameWarStatistics, People, } from '../../models';

export default class NationData {
  nation: Nations;
  loaded: boolean;
  color: string;
  image_url: string;
  data: GameWarStatistics;

  constructor (
    nation: Nations,
    color: string,
    imageUrl: string,
  ) {
    this.nation = nation;
    this.loaded = false;
    this.color = color;
    this.image_url = imageUrl;
    this.data = new GameWarStatistics( nation, People.Unknown, 0, 0, People.Unknown, 0, People.Unknown, Nations.Unknown, [] );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  public static getNations(): NationData[] {
    return [
      new NationData( Nations.USA, 'rgba( 0, 255, 0, 0.05 )', new URL(`@/assets/dune/houses/Atreides.png`, import.meta.url ).href ),
      new NationData( Nations.USSR, 'rgba( 0, 0, 255, 0.05 )', new URL(`@/assets/dune/houses/BeneGesserit.png`, import.meta.url ).href ),
      new NationData( Nations.UK, 'rgba( 255, 0, 0, 0.05 )', new URL(`@/assets/dune/houses/Emperor.png`, import.meta.url ).href ),
      new NationData( Nations.China, 'rgba( 255, 255, 0, 0.05 )', new URL(`@/assets/dune/houses/Fremen.png`, import.meta.url ).href ),
      new NationData( Nations.Germany, 'rgba( 0, 0, 0, 0.05 )', new URL(`@/assets/dune/houses/Harkonnen.png`, import.meta.url ).href ),
      new NationData( Nations.Italy, 'rgba( 255, 110, 0, 0.05 )', new URL(`@/assets/dune/houses/SpacingGuild.png`, import.meta.url ).href ),
      new NationData( Nations.Japan, 'rgba( 200, 190, 120, 0.05 )', new URL(`@/assets/dune/houses/Ixians.png`, import.meta.url ).href ),
    ];
  }
}
