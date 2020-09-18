/**
 * TODO:
 * 
 * 1. mobile layout and animations
 * 2. requestAnimationFrame
 * 3. navigation bar animation
 * 4. navigating arrows
 * 5. contact form
 * 6. gallery
 * 7. Skills-Contact tri 
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
    const scrollpos = this.currentPage === 4 ? -380 : (this.currentPage) * -100;
    this.root.style.setProperty('--scrollpos', `${scrollpos}`);
  }

  private getActiveNavLink(): void {
    const activeNav = this.currentPage * 20;
    this.root.style.setProperty('--activeNav', `${activeNav}`);
  }

  private setAnimationDuration(): void {
    const sectionGap = Math.abs(this.prevPage - this.currentPage);
    this.root.style.setProperty('--sectionGap', `${sectionGap}`);
  }

  render() {
    return ([
      <header>
        <app-nav />
      </header>,
      
      <main>
        <app-home animeClass={this.getAnimeClass(0)} />
        <app-about animeClass={this.getAnimeClass(1)} />
        <app-portfolio animeClass={this.getAnimeClass(2)} />
        <app-skills animeClass={this.getAnimeClass(3)} />
      </main>,
      <contact-footer />,

      <arrow-nav currentPage={this.currentPage}></arrow-nav>
    ]);
  }
}
