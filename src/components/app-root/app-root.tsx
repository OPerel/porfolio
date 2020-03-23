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
  @Listen('navigate')
  handleNavClicks(e: CustomEvent) {
    e.detail.sectionNumber > this.currentPage ? this.goToNextPage() : this.goToPrevPage();
    // this.scroll(e.detail.targetId);
  } 

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
  }

  // onNavigation(pp: number, cp: number) {
  //   return {
  //     0: <app-home />,
  //     1: <app-profile from={pp} />,
  //     2: <section-about from={pp} />
  //   }[cp]
  // }

  scroll(target: string) {
    const section = document.getElementById(target);
    appScroll(section, 600);
  }

  goToNextPage(): void {
    console.log('click next')
    this.prevPage = this.currentPage;
    this.currentPage = this.prevPage < 3 ? this.prevPage + 1 : 3;
    this.scroll(this.mapSectionNumToId(this.currentPage))
  }

  goToPrevPage(): void {
    console.log('click prev')
    this.prevPage = this.currentPage;
    this.currentPage = this.prevPage > 0 ? this.prevPage - 1 : 0;
    this.scroll(this.mapSectionNumToId(this.currentPage))
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

  componentWillLoad() {
    document.addEventListener('wheel', (e) => {
      e.preventDefault();

      // Throtlle needed for this
      // console.log(e.deltaY);
      // e.deltaY > 0 ? this.goToNextPage() : this.goToPrevPage(); 
    
    }, {passive: false});
  }

  render() {
    // console.log('current: ', this.currentPage);
    return (
      <main>

        <header>
          <app-nav currentLink={this.currentPage} prevLink={this.prevPage} />
        </header>

        {/* {this.onNavigation(this.prevPage, this.currentPage)} */}
        <app-home id='Home' />
        <app-about id='About' />
        <app-portfolio id='Portfolio' />
        <app-skills id='Skills' />
        
        
      </main>
    );
  }
}

/***
 * {
          this.currentPage === 0 ? 
            <app-home /> : (
              this.currentPage === 1 ? <app-profile /> : <section-about />
            )
        }


        <stencil-router>
          <stencil-route-switch>
            <stencil-route url='/' component='app-home' exact={true} />
            <stencil-route url='/profile' component='app-profile' />
            <stencil-route url='/about' component='section-about' />
          </stencil-route-switch>
        </stencil-router>



        <stencil-route-link url='/' onClick={() => this.onNavigation(0)}>Home</stencil-route-link>
            <stencil-route-link url='/profile' onClick={() => this.onNavigation(1)}>Profile</stencil-route-link>
            <stencil-route-link url='/about' onClick={() => this.onNavigation(2)}>About</stencil-route-link>
 */