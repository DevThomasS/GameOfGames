import { Factions, FAQ, } from '../../models';

export default class FactionFAQ {
  faction: Factions;
  loaded: boolean;
  color: string;
  image_url: string;
  data: FAQ[];

  constructor (
    faction: Factions,
    color: string,
    imageUrl: string,
  ) {
    this.faction = faction;
    this.loaded = false;
    this.color = color;
    this.image_url = imageUrl;
    this.data = [];
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  public static getFactionFAQ(): FactionFAQ[] {
    return [
      new FactionFAQ( Factions.Atreides, 'rgba( 0, 255, 0, 0.05 )', new URL(`@/assets/dune/houses/Atreides.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.BeneGesserit, 'rgba( 0, 0, 255, 0.05 )', new URL(`@/assets/dune/houses/BeneGesserit.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Emperor, 'rgba( 255, 0, 0, 0.05 )', new URL(`@/assets/dune/houses/Emperor.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Fremen, 'rgba( 255, 255, 0, 0.05 )', new URL(`@/assets/dune/houses/Fremen.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Harkonnen, 'rgba( 0, 0, 0, 0.05 )', new URL(`@/assets/dune/houses/Harkonnen.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.SpacingGuild, 'rgba( 255, 110, 0, 0.05 )', new URL(`@/assets/dune/houses/SpacingGuild.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Ixians, 'rgba( 200, 190, 120, 0.05 )', new URL(`@/assets/dune/houses/Ixians.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Tleilaxu, 'rgba( 130, 0, 200, 0.05 )', new URL(`@/assets/dune/houses/Tleilaxu.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.CHOAM, 'rgba( 0, 0, 0, 0 )', new URL(`@/assets/dune/houses/CHOAM.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Richese, 'rgba( 255, 255, 255, 0.05 )', new URL(`@/assets/dune/houses/Richese.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Ecaz, 'rgba( 200, 0, 130, 0.05 )', new URL(`@/assets/dune/houses/Ecaz.png`, import.meta.url ).href ),
      new FactionFAQ( Factions.Moritani, 'rgba( 0, 180, 255, 0.05 )', new URL(`@/assets/dune/houses/Moritani.png`, import.meta.url ).href ),
    ];
  }
}
