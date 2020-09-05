import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  @Prop() pages: { cp: number, pp: number };

  // @Watch('pages')
  // animate() {
  //   if (this.pages.pp === 1) {
  //     if (this.pages.cp > this.pages.pp) {
  //       console.log('about exitUp()');
  //     } else {
  //       console.log('about exitDown()');
  //     }
  //   }
  //   if (this.pages.cp === 1) {
  //     if (this.pages.cp > this.pages.pp) {
  //       console.log('about enterUp()');
  //     } else {
  //       console.log('about enterDown()');
  //     }
  //   } 
  // }

  getClassName(): string {
    const { cp } = this.pages;
    return cp === 1 ? 'on' : (cp > 1 ? 'over' : 'under');
  } 

  render() {
    return (
      <section class="about">
        <div class="container">
          
          {/* <parallax-el to={-500} from={150}> */}
            <h2 class={`heading heading-${this.getClassName()}`}>About</h2>
          {/* </parallax-el> */}
          <p>All the other steps are always going to be exactly the same. This one may vary depending on the destination, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional.</p>
        </div>
        {/* <growing-tri color={`#3E7A78`} to={170} growDir={`right`} /> */}
        <div class={`test-tri tri-${this.getClassName()}`}></div>
      </section>
    );
  }

}
