

class NavigationController {
  private currentPage: number;
  private prevPage: number;

  constructor() {
    this.prevPage = 0;
    this.currentPage = 0;
  }

  private parseRoute(route: string): string {
    if (route === '/') return 'app-home';
    return route.replace('/', 'app-');
  }

  public scroll(target: number): {cp: number, pp: number} {
    this.prevPage = this.currentPage;
    this.currentPage = target;

    return { cp: this.currentPage, pp: this.prevPage }
  }

  public handleRouteEvent(event: CustomEvent) {
    // console.log('route event: ', event);
    console.log('component: ', this.parseRoute(event.detail.from));

    document.querySelector(this.parseRoute(event.detail.from)).animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(100vh)' }
    ], 800);

    // document.querySelector(this.parseRoute(event.detail.to)).animate([
    //   { transform: 'translateY(0)' },
    //   { transform: 'translateY(100vh)' }
    // ], 500);
  }

  // private mapSectionNumToId(num: number): string {
  //   return {
  //     0: 'Home',
  //     1: 'About',
  //     2: 'Portfolio',
  //     3: 'Skills',
  //     4: 'Contact'
  //   }[num]
  // }
}

export const Navigation = new NavigationController();