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
  handleNavClicks(e: CustomEvent) {
    const { cp, pp } = Navigation.scroll(e.detail);
    console.log(`ROOT - cp: ${cp}, pp: ${pp}`);
    this.currentPage = cp;
    this.prevPage = pp;

    this.getTranslateY();
    this.setAnimationDuration();
  }

  private getClassName = (pageIdx: number): string => {

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
    const scrollpos = this.currentPage === 4 ? -395 : this.currentPage * -100 - 20;
    this.root.style.setProperty('--scrollpos', `${scrollpos}`);
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
