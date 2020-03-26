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
    
    // console.log('nav cp: ', this.currentPage)
    // console.log('nav pp: ', this.prevPage)
    const section = document.getElementById(stringTarget);
    // section.scrollIntoView({behavior: 'smooth', block: 'start'});
    appScroll(section, 600);
    return { cp: this.currentPage, pp: this.prevPage }
  }

  // does not return new page # to root
  // goToNextPage = (): void => {
  //   // this.prevPage = this.currentPage;
  //   // this.currentPage = this.prevPage < 4 ? this.prevPage + 1 : 4;
  //   this.scroll(this.currentPage < 4 ? this.currentPage + 1 : 4)
  //   // this.scrolling = false;
  // }

  // goToPrevPage = (): void => {
  //   // this.prevPage = this.currentPage;
  //   // this.currentPage = this.prevPage > 0 ? this.prevPage - 1 : 0;
  //   this.scroll(this.currentPage > 0 ? this.currentPage - 1 : 0)
  //   // this.scrolling = false;
  // }

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