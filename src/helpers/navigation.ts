// import { appScroll } from './scroll';
import jump from 'jump.js';

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
    // section.scrollIntoView({beavior: 'smooth', block: 'start'});
    // appScroll(section, 600);
    // jump(section, {
    //   duration: 1000,
    //   easing: (t, b, c, d) => {
    //     // easeInOutCubic
    //     t /= d/2;
    //     if (t < 1) return c/2*t*t*t + b;
    //     t -= 2;
    //     return c/2*(t*t*t + 2) + b;
    //   }
    //   // easing: (t, b, c, d) => c*t/d + b // linear
    // });

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