export default class GameHeaderInfo {
  route_main: string;
  image_main: string;
  route_a: string;
  image_a: string;
  route_b: string;
  image_b: string;
  route_d: string;
  image_d: string;

  constructor(
    routeMain: string,
    imgMain: string = '',
    routeA: string = '',
    imgA: string = '',
    routeB: string = '',
    imgB: string = '',
    routeD: string = '',
    imgD: string = '',
  ) {
    this.route_main = routeMain;
    this.image_main = imgMain;
    this.route_a = routeA;
    this.image_a = imgA;
    this.route_b = routeB;
    this.image_b = imgB;
    this.route_d = routeD;
    this.image_d = imgD;
  }

  static getAllGameHeaderInfo(): GameHeaderInfo[] {
    return [
      new GameHeaderInfo(
      'dune', new URL(`@/assets/dune/main-logo.png`, import.meta.url).href,
      'dune-rules', new URL(`@/assets/dune/rules.png`, import.meta.url).href,
      'dune-components', new URL(`@/assets/dune/components.png`, import.meta.url).href,
      'dune-schedule', new URL(`@/assets/dune/schedule.png`, import.meta.url).href,
      ),
      // ... Add more games as needed
    ];
  }
}
