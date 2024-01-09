import { Expansions } from '../../models';

export default class DuneComponent {
  component_id: number;
  expansion: Expansions;
  component_name: string;

  constructor(
    componentId: number,
    expansion: Expansions,
    componentName: string
  ) {
    this.component_id = componentId;
    this.expansion = expansion;
    this.component_name = componentName;
  }

  public static getDefaultComponents(): DuneComponent[] {
    return this.getComponentsByIncludedComponents( [ 1, 2, 3, 8, 9, 10, 12, 13, 14, 17, 18, ] );
  }

  public static getComponentsByIncludedComponents( includedComponents: number[] ): DuneComponent[] {
    return this.getAllComponents().filter( component => includedComponents.includes( component.component_id ) );
  }
  
  public static getComponentsByQuery( excludedDefaults: number[], includedExtras: number[] ): DuneComponent[] {
    const alteredDefaults = this.getDefaultComponents().filter( component => !excludedDefaults.includes( component.component_id ) );
    return alteredDefaults.concat( this.getComponentsByIncludedComponents( includedExtras ) );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  private static getAllComponents(): DuneComponent[] {
    return [
      new DuneComponent( 0,
        Expansions.BaseGame,
        'Spice Blow Cards (21)'
      ),
      new DuneComponent( 1,
        Expansions.BaseGame,
        'Treachery Deck (33)'
      ),
      new DuneComponent( 2,
        Expansions.IxiansTleilaxu,
        'Cheap Hero Traitor Card (1)'
      ),
      new DuneComponent( 3,
        Expansions.IxiansTleilaxu,
        'Sandtrout Spice Card (1)'
      ),
      new DuneComponent( 4,
        Expansions.IxiansTleilaxu,
        'Extra Treachery Cards A (1)'
      ),
      new DuneComponent( 5,
        Expansions.IxiansTleilaxu,
        'Technology Tokens (3)'
      ),
      new DuneComponent( 6,
        Expansions.CHOAMRichese,
        'Advanced Stronghold Cards (6)'
      ),
      new DuneComponent( 7,
        Expansions.CHOAMRichese,
        'Leader Skill Cards (14)'
      ),
      new DuneComponent( 8,
        Expansions.EcazMoritani,
        'Homeworlds (13)'
      ),
      new DuneComponent( 9,
        Expansions.EcazMoritani,
        'Nexus Cards (12)'
      ),
      new DuneComponent( 10,
        Expansions.EcazMoritani,
        'Discovery Tokens (8)'
      ),
      new DuneComponent( 11,
        Expansions.EcazMoritani,
        'Extra Treachery Cards B (3)'
      ),
      new DuneComponent( 12,
        Expansions.EcazMoritani,
        'Great Maker Spice Card (1)'
      ),
      new DuneComponent( 13,
        Expansions.FactionLeaderBetrayalObjective,
        'Faction Leaders (13)'
      ),
      new DuneComponent( 14,
        Expansions.FactionLeaderBetrayalObjective,
        'Karama Power Cards (12)'
      ),
      new DuneComponent( 15,
        Expansions.FactionLeaderBetrayalObjective,
        'Alliance Betrayal Cards (10)'
      ),
      new DuneComponent( 16,
        Expansions.FactionLeaderBetrayalObjective,
        'Objective Cards (9)'
      ),
      new DuneComponent( 17,
        Expansions.DoubleSpiceBlowKaramaStop,
        'Double Spice Blow Cards (9)'
      ),
      new DuneComponent( 18,
        Expansions.DoubleSpiceBlowKaramaStop,
        'Special Event Spice Cards (6)'
      ),
      // ... Add more components as needed
    ];
  }
}
