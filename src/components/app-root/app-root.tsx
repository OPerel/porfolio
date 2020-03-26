import { Component, h, State, Listen, Element } from '@stencil/core';

import { Navigation } from '../../helpers/navigation';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  // shadow: true
})
export class AppRoot {
  @Element() root: HTMLElement;
  @State() currentPage: number;
  @State() prevPage: number;

  @State() lastScrollY: number;
  @State() ticking: boolean;
  // @State() scrolling: boolean;
  
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    const { cp, pp } = Navigation.scroll(e.detail);
    this.currentPage = cp;
    this.prevPage = pp;
  } 

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
  }

  /*********** throttle wheel events **************/

  onWheelEvent = (e) => {
    e.preventDefault();
    const { cp, pp } = e.deltaY > 0
      ? Navigation.scroll(this.currentPage < 4 ? this.currentPage + 1 : 4)
      : Navigation.scroll(this.currentPage > 0 ? this.currentPage - 1 : 0);

    this.currentPage = cp;
    this.prevPage = pp;
  }

  throttleWheel(callback, limit: number) {
    // console.log('throttleWheel');
    let wait = false;
    return (...args) => {
      if (!wait) {
        console.log('!wait')
        callback(...args);
        wait = true;
        setTimeout(() => {
          console.log('end timeout')
          wait = false;
        }, limit);
      }
    }
  }

  /******** end throttle wheel events ************/

  /************ set global scrollpos **************/

  onScroll = () => {
    // console.log('onScroll is running');
    const body = document.getElementsByTagName('body')[0];
    this.lastScrollY = body.scrollTop;
    this.requestTick();
  }

  requestTick = () => {
    // console.log('requestTick is running');
    if(!this.ticking) {
      requestAnimationFrame(this.animate);
    }
    this.ticking = true;
  }

  animate = () => {
    // console.log('animate is running');
    // if (this.to > 98) throw new Error('Scrolling factor above 98');

    // reset the tick so we can capture the next onScroll
    this.ticking = false;

    let scrollpos: number;

    const main = document.getElementsByTagName('main')[0];
    scrollpos = (this.lastScrollY / (main.clientHeight - window.innerHeight));
    this.setScrollPos(scrollpos);
  }

  setScrollPos(scrollPos: number): void {
    this.root.style.setProperty('--scrollpos', `${scrollPos}`);
  }

  /************ end setting global scrollpos *************/

  componentWillLoad() {
    // wheel event listener to enable controlled scrolling
    document.addEventListener('wheel', this.throttleWheel(this.onWheelEvent, 1000), {passive: false});

    // scroll event listener for global scrollpos
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('scroll', this.onScroll, { passive: false })
  }

  render() {
    // console.log('Navigation current: ', this.currentPage);
    return ([
        <header>
          <app-nav currentLink={this.currentPage} prevLink={this.prevPage} />
        </header>,
        <main>

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