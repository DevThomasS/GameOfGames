import { Expansions } from '../../models/dune/Expansions';

export default class GameComponent {
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

  public static getComponentsByIncludedComponents( includedComponents: number[] ): GameComponent[] {
    return this.getAllComponents().filter( component => includedComponents.includes( component.component_id ) );
  }

  public static getComponentsByExcludedComponents( excludedComponents: number[] ): GameComponent[] {
    return this.getAllComponents().filter( component => !excludedComponents.includes( component.component_id ) );
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  private static getAllComponents(): GameComponent[] {
    return [
      new GameComponent( 0,
        Expansions.BaseGame,
        'Spice Blow Cards (21)'
      ),
      new GameComponent( 1,
        Expansions.BaseGame,
        'Treachery Deck (33)'
      ),
      new GameComponent( 2,
        Expansions.IxiansTleilaxu,
        'Cheap Hero Traitor Card (1)'
      ),
      new GameComponent( 3,
        Expansions.IxiansTleilaxu,
        'Sandtrout Spice Card (1)'
      ),
      new GameComponent( 4,
        Expansions.IxiansTleilaxu,
        'Extra Treachery Cards (14)'
      ),
      new GameComponent( 5,
        Expansions.IxiansTleilaxu,
        'Technology Tokens (3)'
      ),
      new GameComponent( 6,
        Expansions.CHOAMRichese,
        'Advanced Stronghold Cards (6)'
      ),
      new GameComponent( 7,
        Expansions.CHOAMRichese,
        'Leader Skill Cards (14)'
      ),
      new GameComponent( 8,
        Expansions.EcazMoritani,
        'Homeworlds (13)'
      ),
      new GameComponent( 9,
        Expansions.EcazMoritani,
        'Nexus Cards (12)'
      ),
      new GameComponent( 10,
        Expansions.EcazMoritani,
        'Discovery Tokens (8)'
      ),
      new GameComponent( 11,
        Expansions.EcazMoritani,
        'Extra Treachery Cards (3)'
      ),
      new GameComponent( 12,
        Expansions.EcazMoritani,
        'Great Maker Spice Card (1)'
      ),
      new GameComponent( 13,
        Expansions.FactionLeaderBetrayalObjective,
        'Faction Leaders (13)'
      ),
      new GameComponent( 14,
        Expansions.FactionLeaderBetrayalObjective,
        'Karama Power Cards (12)'
      ),
      new GameComponent( 15,
        Expansions.FactionLeaderBetrayalObjective,
        'Alliance Betrayal Cards (10)'
      ),
      new GameComponent( 16,
        Expansions.FactionLeaderBetrayalObjective,
        'Objective Cards (9)'
      ),
      new GameComponent( 17,
        Expansions.DoubleSpiceBlowKaramaStop,
        'Double Spice Blow Cards (9)'
      ),
      new GameComponent( 18,
        Expansions.DoubleSpiceBlowKaramaStop,
        'Special Event Spice Cards (6)'
      ),
      // ... Add more components as needed
    ];
  }
}
