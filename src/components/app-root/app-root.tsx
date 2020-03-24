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
  @State() scrolling: boolean;
  
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    this.prevPage = this.currentPage;
    this.currentPage = e.detail;
    this.scroll(this.mapSectionNumToId(e.detail));
  } 

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
    this.scrolling = false;
  }

  scroll(target: string) {
    const section = document.getElementById(target);
    appScroll(section, 500);
  }

  goToNextPage = (): void => {
    this.prevPage = this.currentPage;
    this.currentPage = this.prevPage < 4 ? this.prevPage + 1 : 4;
    this.scroll(this.mapSectionNumToId(this.currentPage))
    this.scrolling = false;
  }

  goToPrevPage = (): void => {
    this.prevPage = this.currentPage;
    this.currentPage = this.prevPage > 0 ? this.prevPage - 1 : 0;
    this.scroll(this.mapSectionNumToId(this.currentPage))
    this.scrolling = false;
  }

  mapSectionNumToId(num: number) {
    return {
      0: 'Home',
      1: 'About',
      2: 'Portfolio',
      3: 'Skills',
      4: 'Contact'
    }[num]
  }

  onWheelEvent = (e) => {
    e.preventDefault();
    if (!this.scrolling) {
      e.deltaY > 0 ? requestAnimationFrame(this.goToNextPage) : requestAnimationFrame(this.goToPrevPage);
    }
    this.scrolling = true
  }

  throttleWheel(callback, limit: number) {
    // console.log('throttleWheel');
    let wait = false;
    return (...args) => {
      if (!wait) {
        callback(...args);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, limit);
      }
    }
  }

  componentWillLoad() {
    document.addEventListener('wheel', this.throttleWheel(this.onWheelEvent, 900), {passive: false});
  }

  render() {
    // console.log('current: ', this.currentPage);
    return ([
      <main>

        <header>
          <app-nav currentLink={this.currentPage} prevLink={this.prevPage} />
        </header>

        <app-home id='Home' />
        <app-about id='About' />
        <app-portfolio id='Portfolio' />
        <app-skills id='Skills' />
        
        
      </main>,
      <contact-footer id='Contact' />
    ]);
  }
}

/***
 * 
 */