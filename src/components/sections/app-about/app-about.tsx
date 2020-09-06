import { Component, Prop, h, State, Watch } from '@stencil/core';
import { LocationSegments, injectHistory } from '@stencil/router';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  @State() className: string;

  @Prop() cp: number;
  @Prop() location: LocationSegments;

  // @Watch('location')
  // onRouteChange(newPage: LocationSegments, oldPage: LocationSegments) {
  //   console.log('new: ', newPage);
  //   console.log('old: ', oldPage);
  //   if (newPage.pathname === '/about') {
      
  //     if (oldPage.pathname === '/') {
  //       console.log('about enter-up');
  //       this.className === 'enter-up';
  //     }
  //     if (oldPage.pathname === '/portfolio') {
  //       console.log('about enter-down');
  //       this.className === 'enter-down';
  //     }
      
  //   }

  //   if (oldPage.pathname === '/about') {
      
  //     if (newPage.pathname === '/') {
  //       console.log('about exit-down');
  //       this.className === 'exit-down';
  //     }
  //     if (newPage.pathname === '/portfolio') {
  //       console.log('about exit-up');
  //       this.className === 'exit-up';
  //     }
      
  //   }
  // }

  // getClassName(): string {
  //   const { cp } = this;
  //   return cp === 1 ? 'on' : (cp > 1 ? 'over' : 'under');
  // } 

  render() {
    return (
      <section class={`about ${this.className}`}>
        <div class="container">
          
          <parallax-el page={1} cp={this.cp} on={0} under={50} over={-40}>
            <h2>About</h2>
          </parallax-el>
          <p>All the other steps are always going to be exactly the same. This one may vary depending on the destination, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional.</p>
        </div>
        <growing-tri color={`#3E7A78`} cp={this.cp} page={1} on={60} over={80} under={0} growDir={`right`} />
      </section>
    );
  }
}

injectHistory(AppAbout);
