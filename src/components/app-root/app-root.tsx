import { Component, h, State, Listen } from '@stencil/core';

import { Navigation } from '../../helpers/navigation';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  // shadow: true
})
export class AppRoot {
  @State() currentPage: number;
  @State() prevPage: number;
  // @State() scrolling: boolean;
  
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    let { cp, pp } = Navigation.scroll(e.detail);
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
    let { cp, pp } = e.deltaY > 0
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

  componentWillLoad() {
    // wheel event handler to enable controlled scrolling
    document.addEventListener('wheel', this.throttleWheel(this.onWheelEvent, 1500), {passive: false});
  }

  render() {
    console.log('Navigation current: ', this.currentPage);
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