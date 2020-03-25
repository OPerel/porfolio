import { appScroll } from './scroll';

class Navigation {
  currentPage: number;
  prevPage: number;
  // scrolling: boolean;

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
    // this.scrolling = false;
  }

  scroll(target: number): any {
    this.prevPage = this.currentPage;
    this.currentPage = target;
    const stringTarget = this.mapSectionNumToId(target);
    
    console.log('nav cp: ', this.currentPage)
    console.log('nav pp: ', this.prevPage)
    const section = document.getElementById(stringTarget);
    appScroll(section, 500);
    return { cp: this.currentPage, pp: this.prevPage }
  }

  // goToNextPage = (): void => {
  //   this.prevPage = this.currentPage;
  //   this.currentPage = this.prevPage < 4 ? this.prevPage + 1 : 4;
  //   this.scroll(this.mapSectionNumToId(this.currentPage))
  //   // this.scrolling = false;
  // }

  // goToPrevPage = (): void => {
  //   this.prevPage = this.currentPage;
  //   this.currentPage = this.prevPage > 0 ? this.prevPage - 1 : 0;
  //   this.scroll(this.mapSectionNumToId(this.currentPage))
  //   // this.scrolling = false;
  // }

  mapSectionNumToId(num: number): string {
    return {
      0: 'Home',
      1: 'About',
      2: 'Portfolio',
      3: 'Skills',
      4: 'Contact'
    }[num]
  }
}

export const Navi = new Navigation();