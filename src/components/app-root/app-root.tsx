import { Component, h, Prop, Listen } from '@stencil/core';

import { Navi } from '../../helpers/navigation';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  // shadow: true
})
export class AppRoot {
  @Prop() currentPage: number;
  @Prop() prevPage: number;
  // @State() scrolling: boolean;
  
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    let { cp, pp } = Navi.scroll(e.detail);
    this.currentPage = cp;
    this.prevPage = pp;
  } 

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
  }

  /*********** throttle wheel events **************/

  // onWheelEvent = (e) => {
  //   e.preventDefault();
  //   e.deltaY > 0 ? this.goToNextPage() : this.goToPrevPage();
  // }

  // throttleWheel(callback, limit: number) {
  //   // console.log('throttleWheel');
  //   let wait = false;
  //   return (...args) => {
  //     if (!wait) {
  //       callback(...args);
  //       wait = true;
  //       setTimeout(() => {
  //         wait = false;
  //       }, limit);
  //     }
  //   }
  // }

  /******** end throttle wheel events ************/

  componentWillLoad() {
    // wheel event handler to enable controlled scrolling
    // document.addEventListener('wheel', this.throttleWheel(this.onWheelEvent, 900), {passive: false});
  }

  render() {
    console.log('navi current: ', this.currentPage);
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