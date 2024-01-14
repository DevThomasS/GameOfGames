import { Factions, } from '../../models';

export default class FAQ {
  question: string;
  answer: string;

  constructor (
    question: string,
    answer: string,
  ) {
    this.question = question;
    this.answer = answer;
  }

  //////////////////////////////////////////
  //////////    Database Proxy    //////////
  //////////////////////////////////////////
  public static getFactionFAQ( faction: Factions ): FAQ[] {
    switch ( faction ) {
      case Factions.Atreides:
        return [
          new FAQ(
            'When can I use my battle advantage?  Can my opponent change his battle plan after I ask?',
            `Only once your opponent has confirmed to you that he has finalized his battle plan, you may use your battle advantage. Once` +
            ` you ask the question, no part of your opponent's battle plan may be changed; however, you may change your own battle plan as a` +
            ` result of the information you receive.`,
          ),
          new FAQ(
            'What is the timing on the use and results of battle abilities - particularly the Atreides battle advantage?',
            `The Bene Gesserit Voice battle advantage is the first ability to be used once a battle begins. The Atreides battle advantage is` +
            ` the last ability to be used before battle plans are revealed. Other abilities, such as Truthtrance, are used and resolved in the order` +
            ` played between these two abilities. The Atreides player, therefore, may not be interrupted by other abilities once he has asked his` +
            ` question until battle plans are revealed.`,
          ),
          new FAQ(
            'How must my opponent answer the Atreides battle advantage, particularly when he is using a special treachery card?',
            `Your opponent must answer the question truthfully by providing the name, and ability if requested, of the card inside the` +
            ` weapon or defense 'slot' of his battle plan. For example, if your opponent is using Chemistry or Weirding Way in the weapon slot, he` +
            ` must tell you the name of the card in that slot.`
          ),
        ];
      case Factions.BeneGesserit:
        return [
          new FAQ(
            'How can my battle advantage be used with treachery cards?',
            `There are three kinds of treachery cards as it relates to your Voice ability: weapon, defense, and special. Weapon and` +
            ` defense cards do not have the 'Special' key word underneath their name; and though they have different names, are all` +
            ` prohibited/forced by use of Voice selection. Special treachery cards are all other treachery cards able to be used in the` +
            ` weapon/defense slots of a battle plan (regardless of any key word other than 'special').  Every special treachery card must be` +
            ` specified by name in order for you to prohibit/force their use.`,
          ),
          new FAQ(
            'How are the special treachery cards, Chemistry and Weirding Way, affected by my battle advantage?',
            `Both of these unique, special treachery cards can only be prohibited/forced by name. Prohibiting one of them by name will` +
            ` prevent your opponent from using it alltogether. Forcing one of them by name will make your opponent have to use it if it is in his` +
            ` hand. However, he may use it as a defense or a weapon without your knowing, if he plays a relevant second card. `,
          ),
          new FAQ(
            'What is the timing on the use and results of battle abilities - particularly the Bene Gesserit battle advantage?',
            `The Bene Gesserit Voice battle advantage is the first ability to be used once a battle begins. The Atreides battle advantage is` +
            ` the last ability to be used before battle plans are revealed. Other abilities, such as Truthtrance, are used and resolved in the order` +
            ` played between these two abilities. The Atreides player, therefore, may not be interrupted by other abilities once he has asked his` +
            ` question until battle plans are revealed.`,
          ),
        ];
      case Factions.Emperor:
        return [
          new FAQ(
            'What is the strength of my Sardaukar against the Fremen while playing with battle payments and planets?',
            `As long as your Salusa Secundus is not occupied by another player, your Sardaukar count as having a strength of 1 against` +
            ` Fremen - with or without paying for them in battle.  While Selusa Secundus is occupied by another player, your Sardaukar are treated` +
            ` as equivalent in all ways to your other troops, except that still only one can be revived each turn.`,
          ),
          new FAQ(
            'When can the source or destination of my shipment and movement be across both of my planets?',
            `Only your shipment can be across both of your planets. Your movement must be from one territory on Arrakis to another, or` +
            ` from one of your planets to the other.  If you intend to ship from a place other than your own planets to your reserves, you may split` +
            ` the troops being shipped between your two planets as you wish.`,
          ),
        ];
      case Factions.Fremen:
        return [
          new FAQ(
            'How does the sandworm work through my one time use faction Karama power?',
            `This power allows you to place a sandworm token on any desert territory on Arrakis. You may play your Karama power at any` +
            ` time, even outside of the Spice Round.  The sandworm will devour any troops and spice in that territory as normal. You may ride the` +
            ` sandworm as normal - even outside of the Spice Round. The sandworm will count towards your Spice Round ability of being able to` +
            ` place subsequent worms anywhere you wish.  No nexus phase occurs if this sandworm is the only sandworm to appear in a round.`,
          ),
        ];
      case Factions.Harkonnen:
      case Factions.SpacingGuild:
      case Factions.Ixians:
      case Factions.Tleilaxu:
      case Factions.CHOAM:
      case Factions.Richese:
      case Factions.Ecaz:
      case Factions.Moritani:
      default:
        return [];
    }
  }
  public static getCoreFAQ(): FAQ[] {
    return [];
  }
}
