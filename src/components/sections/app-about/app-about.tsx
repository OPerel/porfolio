import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {

  @Prop() className: string;
  @Prop() cp: number;

  constructor() {
    this.cp = 0;
  }

  render() {
    return (
      <section class={`app-about ${this.className}`}>
        <div class="container">
          
          <parallax-el page={1} cp={this.cp} on={0} under={60} over={-50}>
            <h2>About</h2>
          </parallax-el>
          <p>All the other steps are always going to be exactly the same. This one may vary depending on the destination, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional.</p>
        </div>
        <growing-tri color={`#3E7A78`} cp={this.cp} page={1} on={60} over={90} under={0} growDir={`right`} />
      </section>
    );
  }
}
