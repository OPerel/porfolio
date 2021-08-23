/**
 * TODO:
 * 1. Skills (and work experience?)
 * 2. contact form validation and Netlify
 * 3. SEO
 * 4. extra projects content
 * 5. remove logs on production
 *
 * BUGS:
 *
 * TODO: NOT MANDATORY!
 * 5. mobile scroll on swipe
 * 6. performance:
 * - gallery photos to webp
 * - requestAnimationFrame
 * - check the loader's impact on scores - probably bad... for now without delete component if sure
 * 7. use labels instead of hard coded text
 * 8. contact on homepage (social icons or link to footer)
 * 9. correlate scroll position with url hash
 * 10. animate horizontal line in about
 * 11. animate something in footer
 * 12. more bg images?
 * 13. changes background and parallax?
 * 14. more data from API (image) or make as much as possible configurable for other developers
 */

import {Component, h, State, Listen, Element} from '@stencil/core';
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
  // @State() isLoading: boolean;
  // @State() loaded: boolean;

  constructor() {
    this.prevPage = 0
    this.currentPage = 0;
    // this.isLoading = true;
    // this.loaded = false;
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

  private getAnimeClass = (pageIdx: number): 'on' | 'over' | 'under' => {
    if (this.currentPage > pageIdx) {
      return 'over';
    }
    if (this.currentPage < pageIdx) {
      return 'under';
    }
    return 'on';
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
        this.root.querySelector('footer').classList.toggle('keyboard-footer');
        this.root.querySelector('.skills-container').classList.toggle('keyboard-skills');
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          console.log('**** timeout ****')
          this.root.querySelector('main').classList.remove('keyboard-open');
        }, 300)
      }
    });
  }

  async componentWillLoad() {
    fetch('https://gitconnected.com/v1/portfolio/operel')
      .then(res => res.json())
      .then((res: any) => {
        console.log('res: ', res)
        this.data = { ...this.data, ...res };
        // this.isLoading = false;
      })
  }

  render() {
    // if (this.isLoading) {
    //   return (
    //     <app-loader
    //       // loaded={this.loaded}
    //       // setDoneLoading={() => {
    //       //   this.isLoading = false;
    //       // }}
    //     />
    //   )
    // }
    // const { name, label, summary } = this.data.basics;
    return this.data ? (
      <ion-app>
        <header>
          <app-nav current={this.currentPage} />
        </header>
        <main>
          <app-home
            animeClass={this.getAnimeClass(0)}
            name={this.data.basics.name}
            label={this.data.basics.label}
          />
          {/*{this.data && ([*/}
            <app-about
              animeClass={this.getAnimeClass(1)}
              summary={this.data.basics.summary}
            />
            <app-portfolio
              animeClass={this.getAnimeClass(2)}
              projects={this.data.projects}
            />
            <app-skills
              animeClass={this.getAnimeClass(3)}
              skills={this.data.skills}
              work={this.data.work}
            />
          {/*])}*/}
        </main>
        <contact-footer />

        <arrow-nav currentPage={this.currentPage} />
      </ion-app>
    ) : null;
  }
}
