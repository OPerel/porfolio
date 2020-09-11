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

    this.getTranslateY()
  }

  getClassName = (pageIdx: number): string => {

    // if (this.prevPage === pageIdx) {
    //   if (this.currentPage > this.prevPage) {
    //     console.log('exitUp(): ', pageIdx);
    //     animeClass = 'exit-up';
    //   } else {
    //     animeClass = 'exit-down';
    //     console.log('exitDown(): ', pageIdx);
    //   }
    // }
    // if (this.currentPage === pageIdx) {
    //   if (this.currentPage > this.prevPage) {
    //     console.log('enterUp(): ', pageIdx);
    //     animeClass = 'enter-up';
    //   } else {
    //     console.log('enterDown(): ', pageIdx);
    //     animeClass = 'enter-down';
    //   }
    // } 

    if (this.currentPage === pageIdx) {
      return 'on';
    }
    if (this.currentPage > pageIdx) {
      return 'over';
    }
    if (this.currentPage < pageIdx) {
      return 'under';
    }

    return '';
  };

  getTranslateY() {
    const scrollpos = this.currentPage === 4 ? -395 : this.currentPage * -100 - 20;
    this.root.style.setProperty('--scrollpos', `${scrollpos}`);
  }

  render() {
    // const routeProps = { pages: { cp: this.currentPage, pp: this.prevPage } }
    return ([
      <header>
        <app-nav />
      </header>,
      <app-home cp={this.currentPage} />,
      <main>
        
        <app-about className={this.getClassName(1)} cp={this.currentPage} />
        <app-portfolio className={this.getClassName(2)} cp={this.currentPage} />
        <app-skills className={this.getClassName(3)} cp={this.currentPage} />
      </main>,
        
      <contact-footer id='Contact' />
    ]);
  }
}

/***
 *  style={{ transform: `translateY(${this.getTranslateY()}vh)` }}
 */

// const Page = (props) => {
//   switch(this.currentPage) {
//     case 0: return <app-home id='Home' class={`${this.isOn(0)} ${this.getClassName(0)}`} cp={this.currentPage} />;
//     case 1: return <app-about id='About' class={`${this.isOn(1)} ${this.getClassName(1)}`} cp={this.currentPage} />;
//     case 2: return <app-portfolio id='Portfolio' class={`${this.isOn(2)} ${this.getClassName(2)}`} />;
//     case 3: return <app-skills id='Skills' class={`${this.isOn(3)} ${this.getClassName(3)}`} />;
//   }
// }



{/* <ion-router useHash={false}>
              <ion-route url="/" component="app-home" />
              <ion-route url="/about" component="app-about" />
              <ion-route url="/portfolio" component="app-portfolio" />
              <ion-route url="/skills" component="app-skills" />
            </ion-router>
            
            <ion-nav /> */}