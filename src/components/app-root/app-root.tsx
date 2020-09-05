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

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
  }
  
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    const { cp, pp } = Navigation.scroll(e.detail);
    console.log(`cp: ${cp}, pp: ${pp}`);
    this.currentPage = cp;
    this.prevPage = pp;
  } 

  /************ set global scrollpos **************/

  onScroll = () => {
    // console.log('onScroll is running');
    // const body = document.getElementsByTagName('body')[0];
    this.lastScrollY = window.scrollY;
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

    // const main = document.getElementsByTagName('main')[0];
    scrollpos = (this.lastScrollY / (document.body.clientHeight - window.innerHeight));
    this.setScrollPos(scrollpos);
  }

  setScrollPos(scrollPos: number): void {
    this.root.style.setProperty('--scrollpos', `${scrollPos}`);
  }

  /************ end setting global scrollpos *************/

  componentWillLoad() {
    // scroll event listener for global scrollpos
    document.addEventListener('wheel', (e) => {e.preventDefault()}, { passive: false });
  }

  render() {
    // console.log('Navigation current: ', this.currentPage);
    return ([
        <header>
          <app-nav currentLink={this.currentPage} prevLink={this.prevPage} />
        </header>,
        <main>

            <app-home id='Home' />
            <app-about id='About' pages={{ cp: this.currentPage, pp: this.prevPage }} />
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