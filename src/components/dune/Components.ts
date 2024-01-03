import { Expansions } from '../../models/dune/Expansions';

export default class Component {
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

  public static getComponentsByIncludedComponents( includedComponents: number[] ): Component[] {
    return this.getAllComponents().filter( component => includedComponents.includes( component.component_id ) );
  }

  public static getComponentsByExcludedComponents( excludedComponents: number[] ): Component[] {
    return this.getAllComponents().filter( component => !excludedComponents.includes( component.component_id ) );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  private static getAllComponents(): Component[] {
    return [
      new Component( 0,
        Expansions.BaseGame,
        'Spice Blow Cards (15)'
      ),
      new Component( 1,
        Expansions.BaseGame,
        'Shai Halud Spice Cards (6)'
      ),
      new Component( 2,
        Expansions.BaseGame,
        'Treachery Deck (33)'
      ),
      new Component( 3,
        Expansions.IxiansTleilaxu,
        'Cheap Hero Traitor Card (1)'
      ),
      new Component( 4,
        Expansions.IxiansTleilaxu,
        'Sandtrout Spice Card (1)'
      ),
      new Component( 5,
        Expansions.IxiansTleilaxu,
        'Extra Treachery Cards (14)'
      ),
      new Component( 6,
        Expansions.IxiansTleilaxu,
        'Technology Tokens (3)'
      ),
      new Component( 7,
        Expansions.CHOAMRichese,
        'Advanced Stronghold Cards (6)'
      ),
      new Component( 8,
        Expansions.CHOAMRichese,
        'Leader Skill Cards (14)'
      ),
      new Component( 9,
        Expansions.EcazMoritani,
        'Homeworlds (13)'
      ),
      new Component( 10,
        Expansions.EcazMoritani,
        'Nexus Cards (12)'
      ),
      new Component( 11,
        Expansions.EcazMoritani,
        'Discovery Tokens (8)'
      ),
      new Component( 12,
        Expansions.EcazMoritani,
        'Extra Treachery Cards (3)'
      ),
      new Component( 13,
        Expansions.EcazMoritani,
        'Great Maker Spice Card (1)'
      ),
      new Component( 14,
        Expansions.FactionLeaderBetrayalObjective,
        'Faction Leaders (13)'
      ),
      new Component( 15,
        Expansions.FactionLeaderBetrayalObjective,
        'Karama Power Cards (12)'
      ),
      new Component( 16,
        Expansions.FactionLeaderBetrayalObjective,
        'Alliance Betrayal Cards (10)'
      ),
      new Component( 17,
        Expansions.FactionLeaderBetrayalObjective,
        'Objective Cards (9)'
      ),
      new Component( 18,
        Expansions.DoubleSpiceBlowKaramaStop,
        'Double Spice Blow Cards (9)'
      ),
      new Component( 19,
        Expansions.DoubleSpiceBlowKaramaStop,
        'Extra Spice Cards (6)'
      ),
      // ... Add more components as needed
    ];
  }
}
