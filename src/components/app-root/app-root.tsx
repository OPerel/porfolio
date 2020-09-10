import { Component, h, State, Listen, Element, Prop, Watch } from '@stencil/core';
// import { LocationSegments, injectHistory } from '@stencil/router';
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

  public navCtrl: HTMLIonRouterElement;

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
  }
  
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    const { cp, pp } = Navigation.scroll(e.detail);
    console.log(`ROOT - cp: ${cp}, pp: ${pp}`);
    this.currentPage = cp;
    this.prevPage = pp;
  }

  componentDidLoad() {
    this.navCtrl = document.querySelector('ion-router');
    this.navCtrl.addEventListener('ionRouteWillChange', e => {
      Navigation.handleRouteEvent(e as CustomEvent);
    })
  }

  render() {
    // const routeProps = { pages: { cp: this.currentPage, pp: this.prevPage } }
    return (
      <ion-app>

          <header>
            <app-nav />
          </header>
            
            <ion-router useHash={false}>
              <ion-route url="/" component="app-home" />
              <ion-route url="/about" component="app-about" />
              <ion-route url="/portfolio" component="app-portfolio" />
              <ion-route url="/skills" component="app-skills" />
            </ion-router>
            
            <ion-nav />
            
          <contact-footer id='Contact' />

      </ion-app>
    );
  }
}

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

// getClassName = (pageIdx: number): string => {
//   let animeClass: string = '';

//   if (this.prevPage === pageIdx) {
//     if (this.currentPage > this.prevPage) {
//       console.log('exitUp(): ', pageIdx);
//       animeClass = 'exit-up';
//     } else {
//       animeClass = 'exit-down';
//       console.log('exitDown(): ', pageIdx);
//     }
//   }
//   if (this.currentPage === pageIdx) {
//     if (this.currentPage > this.prevPage) {
//       console.log('enterUp(): ', pageIdx);
//       animeClass = 'enter-up';
//     } else {
//       console.log('enterDown(): ', pageIdx);
//       animeClass = 'enter-down';
//     }
//   } 

//   return animeClass;
// };