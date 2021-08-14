/**
 * TODO:
 *
 * 1. mobile layout and animations - SEE REAL MOBILE:
 *  - footer tri ?
 *  - gallery scrolling - solved temporarily by css media query.
 *  - upper nav arrow - solved temporarily by css media query. ?
 * 2. requestAnimationFrame
 * 5. contact form validation
 * 6. gallery ?
 * 7. Skills-Contact tri ?
 *
 * 8. CONTENT
 */

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
  @State() data: any;

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
  }

  @Listen('navigate')
  handleNavClicks(e: CustomEvent<number>) {
    const { cp, pp } = Navigation.scroll(e.detail);
    console.log(`ROOT - cp: ${cp}, pp: ${pp}`);
    this.currentPage = cp;
    this.prevPage = pp;

    this.getTranslateY();
    this.setAnimationDuration();
    this.getActiveNavLink();
  }

  private getAnimeClass = (pageIdx: number): string => {

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

  private getTranslateY(): void {
    const scrollpos = this.currentPage === 4 ? -395 : (this.currentPage) * -100;
    console.log('scrollpos: ', scrollpos)
    this.root.style.setProperty('--scrollpos', `${scrollpos}`);
  }

  private getActiveNavLink(): void {
    const activeNav = this.currentPage * 8;
    this.root.style.setProperty('--activeNav', `${activeNav}`);
  }

  private setAnimationDuration(): void {
    const sectionGap = Math.abs(this.prevPage - this.currentPage);
    this.root.style.setProperty('--sectionGap', `${sectionGap}`);
  }

  componentDidLoad() {

    // disable animation on mobile keyboard open
    let timer: NodeJS.Timeout;
    window.addEventListener('resize', (e) => {
      if (this.currentPage === 4) {
        console.log('resize e: ', e);
        this.root.querySelector('main').classList.add('keyboard-open');
        this.root.querySelector('.contact').classList.toggle('keyboard');
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          console.log('**** timeout ****')
          this.root.querySelector('main').classList.remove('keyboard-open');
        }, 300)
      }
    })
  }

  connectedCallback() {
    // if (Build.isBrowser) {
      console.log('running in client')
      fetch('https://gitconnected.com/v1/portfolio/operel')
        .then(res => res.json())
        .then((res: any) => {
          console.log('client res: ', res)
          this.data = res;
        })
    // } else {
    //   console.log('build time')
    //   fetch('https://robohash.org/ssss')
    //     .then(res => res.json())
    //     .then((res: any) => {
    //       console.log('build res: ', res)
    //       this.test = res;
    //     })
    // }
  }

  render() {
    return (
      <ion-app>
        <header>
          <app-nav />
        </header>
        <main>
          <app-home animeClass={this.getAnimeClass(0)} />
          <app-about animeClass={this.getAnimeClass(1)} />
          <app-portfolio animeClass={this.getAnimeClass(2)} projects={this.data?.projects || []} />
          <app-skills animeClass={this.getAnimeClass(3)} />
        </main>
        <contact-footer />

        <arrow-nav currentPage={this.currentPage} />
      </ion-app>
    );
  }
}
