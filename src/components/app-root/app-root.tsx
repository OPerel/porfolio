import { Component, h, State, Listen } from '@stencil/core';

import { appScroll } from '../../helpers/scroll';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  // shadow: true
})
export class AppRoot {
  @State() currentPage: number;
  @State() prevPage: number;
  @State() frame: boolean;
  @State() scrolling: boolean;
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    this.prevPage = this.currentPage;
    this.currentPage = e.detail;
    // if (!this.scrolling && !this.frame) {
      this.scroll(this.mapSectionNumToId(e.detail));
    // }
  } 

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
    this.frame = false;
    this.scrolling = false;
  }

  scroll(target: string) {
    const section = document.getElementById(target);
    appScroll(section, 500);

  }

  goToNextPage = (): void => {
    this.prevPage = this.currentPage;
    this.currentPage = this.prevPage < 3 ? this.prevPage + 1 : 3;
    this.scroll(this.mapSectionNumToId(this.currentPage))
    this.frame = false;
  }

  goToPrevPage = (): void => {
    this.prevPage = this.currentPage;
    this.currentPage = this.prevPage > 0 ? this.prevPage - 1 : 0;
    this.scroll(this.mapSectionNumToId(this.currentPage))
    this.frame = false;
  }

  mapSectionNumToId(num: number) {
    return {
      0: 'Home',
      1: 'About',
      2: 'Portfolio',
      3: 'Skills',
      // 4: 'Contact'
    }[num]
  }

  onWheelEvent = (e) => {
    e.preventDefault();
    if (!this.frame) {
      e.deltaY > 0 ? requestAnimationFrame(this.goToNextPage) : requestAnimationFrame(this.goToPrevPage);
    }
    this.frame = true
  }

  throttleWheel(callback, limit: number) {
    return (...args) => {
      if (!this.scrolling) {
        callback(...args);
        this.scrolling = true;
        setTimeout(() => {
          this.scrolling = false;
        }, limit);
      }
    }
  }

  componentWillLoad() {
    document.addEventListener('wheel', this.throttleWheel(this.onWheelEvent, 900), {passive: false});
    // window.addEventListener('resize', () => {
    //   this.currentPage = 0;
    //   this.prevPage = 0;
    // });
  }

  render() {
    // console.log('current: ', this.currentPage);
    return (
      <main>

        <header>
          <app-nav currentLink={this.currentPage} prevLink={this.prevPage} />
        </header>

        <app-home id='Home' />
        <app-about id='About' />
        <app-portfolio id='Portfolio' />
        <app-skills id='Skills' />

        <arrow-nav currentPage={this.currentPage} />
        
      </main>
    );
  }
}

/***
 * 
 */