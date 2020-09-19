import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
  shadow: true
})
export class AppAbout {
  @Prop() animeClass: string;

  render() {
    return (
      <section class="app-about">
        <div class="container">
          
          <parallax-el animeClass={this.animeClass} on={0} under={60} over={-50}>
            <h2>About</h2>
          </parallax-el>
          <p>All the other steps are always going to be exactly the same. This one may vary depending on the destination, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional.</p>
        </div>
        {/* <growing-tri color={`#3E7A78`} cp={this.cp} page={1} on={60} over={90} under={0} growDir={`right`} /> */}
        <rotating-tri color="#3E7A78" side="right" animeClass={this.animeClass} height={65} origin="bottom left" on={0} under={20} over={-20} />
      </section>
    );
  }
}
