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
          new FAQ(
            'How can I use my one time use faction Karama power?',
            `You can use your Karama power when you or your ally would otherwise use your battle advantage. You may also use it during` +
            ` a battle in which neither you nor your ally are involved, as though the player who is battling the player whose battle plan you are` +
            ` viewing was your ally for that battle; you may choose to inform any other player of the battle plan you are viewing. If you inform the` +
            ` player whose battle plan is not being viewed during that battle, that player may alter his battle plan as a result of the information he` +
            ` receives without any interuption, as though he was your ally during a normal Atreides battle advantage step.`,
          ),
          new FAQ(
            `Can one of my leaders accompanied by the Kwisatz Haderach be revealed to be a Face Dancer?`,
            `Yes.`,
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
          new FAQ(
            `Can I send an advisor when the Ixians player ships into his Hidden Mobile Stronghold?`,
            `Yes - but the advisor must be placed in the Polar Sink.`,
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
          new FAQ(
            'What troops or leader can I revive through my one time use faction Karama power?',
            `Any leader, face-up or face-down, from any one player, or three troops from any one player, including troops that normally` +
            ` have revival limits, such as your Sardaukar. Note that this revival can occur at any time and is seperate from your normal revival.`,
          ),
        ];
      case Factions.Fremen:
        return [
          new FAQ(
            'How does the sandworm work through my one time use faction Karama power?',
            `You may use your Karama power only during the Spice Round, but at any time within. A sandworm appears in a sand territory of your choice` +
            ` and will count towards your Sandworms advanced game advantage for multiple sandworms appearing.  However, if the sandworm that appears` +
            ` from the use of this Karama power is the only sandworm that appears this turn, no Nexus phase will occur.`,
          ),
        ];
      case Factions.Harkonnen:
        return [
          new FAQ(
            'When is a dead leader that is face-down due to my Captured Leader ability able to be normally revived?',
            `A leader that is targeted by this ability is face-down only for hiding public knowledge.  When all leaders of a player are killed,` +
            ` and begin to be re-killed, that is when leaders killed by this ability are considered to be face-down for the purposes of normal revival.`,
          ),
          new FAQ(
            'How can I use my one time use faction Karama power?',
            `You may use it at any time, even during a battle (except during the use and resolution of the Atreides battle advantage). You` +
            ` must take the number of cards you wish to steal before giving cards back to that player - making sure that you give back the same` +
            ` number of treachery cards you took. This could result in the Bene Gesserit battle advantage not having effect if she attempted to` +
            ` force you to play a certain card.`,
          ),
        ];
      case Factions.SpacingGuild:
        return [
          new FAQ(
            'Can I stop the shipment of another player with my one time use faction Karama power after he declares it?',
            `Yes - the troops he would have shipped return to his reserves as they were, and reclaims any spice paid.`,
          ),
        ];
      case Factions.Ixians:
        return [
          new FAQ(
            `Can the Bene Gessert send an advisor when I ship into my Hidden Mobile Stronghold?`,
            `Yes - but the advisor must be placed in the Polar Sink.`,
          ),
          new FAQ(
            `Can you sell another faction's leader if it is currently being used by you as a Ghola?`,
            `Yes - using the normal rules of selling dead leaders.`,
          ),
          new FAQ(
            `How do I adjust forces dialed if another player uses a Karama card to make my cyborgs half strength?`,
            `If you dialed higher than is now possible, you must decrease what you dialed to the highest value possible with the available` +
            ` troops and spice currently in your battle plan (you may not add spice nor remove spice from your battle plan).  If you win, you must` +
            ` still remove your bid troops as normal, but cyborgs can at most count as a strength of 1 each.`,
          ),
          new FAQ(
            `Can the Hidden Mobile Stronghold move into, out of, or through a Storm?`,
            `No.`,
          ),
          new FAQ(
            'Does the use my one time use faction Karama power limit my shipment or movement?',
            `No - you may still ship and move as normal. However, the movement of the stronghold must occur after your shipment and` +
            ` before your movement in that turn. This allows you to ship troops into the stronghold, move the stronghold, then move troops out of` +
            ` the stronghold.`,
          ),
        ];
      case Factions.Tleilaxu:
        return [
          new FAQ(
            `What happens if the would-be winner of a battle used a Traitor and I use a Face Dancer on the winner's leader?`,
            `The player using the Traitor card collects all due spice and resolves any relevant abilities as normal.  Then, you resolve your` +
            ` Face Dancer ability as normal.`,
          ),
          new FAQ(
            `Can you sell another faction's leader if it is currently being used by you as a Ghola?`,
            `Yes - using the normal rules of selling dead leaders.`,
          ),
          new FAQ(
            `Can an Atreides leader accompanied by the Kwisatz Haderach be revealed to be a Face Dancer?`,
            `Yes.`,
          ),
          new FAQ(
            `How can the CHOAM player purchase her Auditor leader back?`,
            `The Auditor leader may always be bought back from the Tanks for 2 spice - but this will use her one revival of a leader for` +
            ` that turn. You may not refuse to sell the Auditor leader to the CHOAM player, as long as she pays.`,
          ),
          new FAQ(
            `Can I ever have traitors?`,
            `No; in an instance of you gaining a traitor, such as through the use of the Harkonnen Nexus card, you treat the recieved` +
            ` traitor card as a Face Dancer.`,
          ),
          new FAQ(
            'Can I stop the revival of another player with my one time use faction Karama power after he declares it?',
            `Yes - the troops and/or leader he would have revived remain in the tanks as they were, and reclaims any spice paid.`,
          ),
        ];
      case Factions.CHOAM:
        return [
          new FAQ(
            `If the Tleilaxu are in the game, when can I buy a dead Auditor back, and for what cost?`,
            `The Auditor leader may always be bought back from the Tanks for 2 spice - but this will use your one revival of a leader for` +
            ` that turn.  The Tleilaxu being in the game does not change this, save for being the recipient of the spice instead of the bank.`,
          ),
          new FAQ(
            'How can I use my one time use faction Karama power?',
            `You may use it at any time, even during a battle (except during the use and resolution of the Atreides battle advantage). This` +
            ` could result in the Bene Gesserit battle advantage not having effect if she attempted to force you to play a certain card.`,
          ),
        ];
      case Factions.Richese:
        return [
          new FAQ(
            'How can I use my one time use faction Karama power?',
            `You may use it at any time, even during a battle (except during the use and resolution of the Atreides battle advantage). This` +
            ` could result in the Bene Gesserit battle advantage suddenly having effect if she attempted to force you to play a certain card.`,
          ),
        ];
      case Factions.Ecaz:
        return [
          new FAQ(
            'How can I use my one time use faction Karama power?',
            `You may use it only during a battle you are in (you must be the one with the battle wheel in case of Occupy advantage), and` +
            ` only after both players revealed their battle plans. Your leader does not have to be alive to add the difference between the leaders.` +
            ` Note that treachery cards not used in the weapon and defense slots, such as Cheap Hero or Poison Tooth (if not utilized), do not` +
            ` restrict the use of your Karama power. Playing this Karama power in a battle may be impossible in the case of the Bene Gesserit` +
            ` battle advantage being used, as you may be forced to play a card in a weapon or defense slot.`,
          ),
        ];
      case Factions.Moritani:
        return [
          new FAQ(
            'Can I make a deal with my opponent after I play my one time use faction Karama power?',
            `Yes - using your Karama power does not force you to discard any of the treachery cards your opponent used in the battle.` +
            ` However, whether you make a deal or not, you still discard the Karama card and cannot use this power again this game.`,
          ),
        ];
      default:
        return [];
    }
  }
  public static getCoreFAQ(): FAQ[] {
    return [];
  }
}
