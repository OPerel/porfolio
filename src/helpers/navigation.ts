import { appScroll } from './scroll';

class NavigationController {
  private currentPage: number;
  private prevPage: number;
  // scrolling: boolean;

  constructor() {
    this.prevPage = 0;
    this.currentPage = 0;
    // this.scrolling = false;
  }

  public scroll(target: number): {cp: number, pp: number} {
    this.prevPage = this.currentPage;
    this.currentPage = target;
    const stringTarget = this.mapSectionNumToId(target);

    const section = document.getElementById(stringTarget);
    // section.scrollIntoView({behavior: 'smooth', block: 'start'});
    appScroll(section, 600);

    return { cp: this.currentPage, pp: this.prevPage }
  }

  private mapSectionNumToId(num: number): string {
    return {
      0: 'Home',
      1: 'About',
      2: 'Portfolio',
      3: 'Skills',
      4: 'Contact'
    }[num]
  }
}

export const Navigation = new NavigationController();