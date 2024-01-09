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
  public static getFAQ(): FAQ[] {
    return [];
  }
}
