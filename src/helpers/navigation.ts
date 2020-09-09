

class NavigationController {
  private currentPage: number;
  private prevPage: number;

  constructor() {
    this.prevPage = 0;
    this.currentPage = 0;
  }

  public scroll(target: number): {cp: number, pp: number} {
    this.prevPage = this.currentPage;
    this.currentPage = target;

    return { cp: this.currentPage, pp: this.prevPage }
  }

  public handleRouteEvent(event: Event) {
    console.log('route event: ', event);
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