import { Component, h, State, Listen, Element, Prop, Watch } from '@stencil/core';
import { LocationSegments, injectHistory } from '@stencil/router';
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

  @Prop() location: LocationSegments;

  // @Watch('location')
  // onRouteChange(newPage: LocationSegments, oldPage: LocationSegments) {
  //   console.log('new: ', newPage);
  //   console.log('old: ', oldPage);
  // }

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

  // isOn = (pageIdx: number) => pageIdx === this.currentPage ? 'section-on' : 'section-off';

  getClassName = (pageIdx: number): string => {
    let animeClass: string = '';

    if (this.prevPage === pageIdx) {
      if (this.currentPage > this.prevPage) {
        console.log('exitUp(): ', pageIdx);
        animeClass = 'exit-up';
      } else {
        animeClass = 'exit-down';
        console.log('exitDown(): ', pageIdx);
      }
    }
    if (this.currentPage === pageIdx) {
      if (this.currentPage > this.prevPage) {
        console.log('enterUp(): ', pageIdx);
        animeClass = 'enter-up';
      } else {
        console.log('enterDown(): ', pageIdx);
        animeClass = 'enter-down';
      }
    } 

    return animeClass;
  };

  componentWillLoad() {
    // scroll event listener for global scrollpos
    // document.addEventListener('wheel', (e) => {e.preventDefault()}, { passive: false });
  }

  render() {
    // console.log('Navigation current: ', this.currentPage);
    return ([
        <header>
          <app-nav currentLink={this.currentPage} prevLink={this.prevPage} />
        </header>,
        <main>
          {/* <ion-router>
            <ion-route url="/" component="app-home" />
            <ion-route url="/about" component="app-about" />
            <ion-route url="/portfolio" component="app-portfolio" />
            <ion-route url="/skills" component="app-skills" />
          </ion-router> */}
          {/* {this.page()} */}
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route exact={true} url="/" component="app-home" />
              <stencil-route exact={true} url="/about" component="app-about" />
              <stencil-route exact={true} url="/portfolio" component="app-portfolio" />
              <stencil-route exact={true} url="/skills" component="app-skills" />
            </stencil-route-switch>
          </stencil-router>
          {/* <app-home id='Home' class={`${this.isOn(0)} ${this.getClassName(0)}`} cp={this.currentPage} />;
          <app-about id='About' class={`${this.isOn(1)} ${this.getClassName(1)}`} cp={this.currentPage} />;
          <app-portfolio id='Portfolio' class={`${this.isOn(2)} ${this.getClassName(2)}`} />;
          <app-skills id='Skills' class={`${this.isOn(3)} ${this.getClassName(3)}`} />; */}
          
        </main>,
        <contact-footer id='Contact' />
    ]);
  }
}

injectHistory(AppRoot);
/***
 * 
 */

// const Page = (props) => {
//   switch(this.currentPage) {
//     case 0: return <app-home id='Home' class={`${this.isOn(0)} ${this.getClassName(0)}`} cp={this.currentPage} />;
//     case 1: return <app-about id='About' class={`${this.isOn(1)} ${this.getClassName(1)}`} cp={this.currentPage} />;
//     case 2: return <app-portfolio id='Portfolio' class={`${this.isOn(2)} ${this.getClassName(2)}`} />;
//     case 3: return <app-skills id='Skills' class={`${this.isOn(3)} ${this.getClassName(3)}`} />;
//   }
// }