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
    return this.getComponentsByIncludedComponents( [ 1, 2, 10, 11, 20, 22, 23, 24, 26, 50, 51, 60, 61, ] );
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
      new DuneComponent( 1, // Default
        Expansions.BaseGame,
        'Treachery Deck (40)'
      ),
      new DuneComponent( 2, // Default
        Expansions.BaseGame,
        'Advanced Combat (rule)'
      ),
      new DuneComponent( 3,
        Expansions.BaseGame,
        'Storm Movement (rule)'
      ),
      new DuneComponent( 10, // Default
        Expansions.IxiansTleilaxu,
        'Cheap Hero Traitor Card (1)'
      ),
      new DuneComponent( 11, // Default
        Expansions.IxiansTleilaxu,
        'Sandtrout Spice Card (1)'
      ),
      new DuneComponent( 12,
        Expansions.IxiansTleilaxu,
        'Extra Treachery Cards A (14)'
      ),
      new DuneComponent( 13,
        Expansions.IxiansTleilaxu,
        'Technology Tokens (3)'
      ),
      new DuneComponent( 20, // Default
        Expansions.CHOAMRichese,
        'Advanced Stronghold Cards (6)'
      ),
      new DuneComponent( 21,
        Expansions.CHOAMRichese,
        'Leader Skill Cards (14)'
      ),
      new DuneComponent( 22, // Default
        Expansions.EcazMoritani,
        'Homeworlds (13)'
      ),
      new DuneComponent( 23, // Default
        Expansions.EcazMoritani,
        'Nexus Cards (12)'
      ),
      new DuneComponent( 24, // Default
        Expansions.EcazMoritani,
        'Discovery Tokens (8)'
      ),
      new DuneComponent( 25,
        Expansions.EcazMoritani,
        'Extra Treachery Cards B (3)'
      ),
      new DuneComponent( 26, // Default
        Expansions.EcazMoritani,
        'Great Maker Spice Card (1)'
      ),
      new DuneComponent( 50, // Default
        Expansions.FactionLeaderBetrayalObjective,
        'Faction Leaders'
      ),
      new DuneComponent( 51, // Default
        Expansions.FactionLeaderBetrayalObjective,
        'Karama Power Cards'
      ),
      new DuneComponent( 52,
        Expansions.FactionLeaderBetrayalObjective,
        'Alliance Betrayal Cards (10)'
      ),
      new DuneComponent( 53,
        Expansions.FactionLeaderBetrayalObjective,
        'Objective Cards'
      ),
      new DuneComponent( 60, // Default
        Expansions.DoubleSpiceBlowKaramaStop,
        'Double Spice Blow Cards (9)'
      ),
      new DuneComponent( 61, // Default
        Expansions.DoubleSpiceBlowKaramaStop,
        'Special Event Spice Cards (6)'
      ),
      // ... Add more components as needed
    ];
  }
}
