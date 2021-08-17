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
            <h2>About Me</h2>
          </parallax-el>

          <div class="img-wrapper">
            <parallax-el animeClass={this.animeClass} on={0} under={-50} over={80}>
              <div class="right-line" />
            </parallax-el>
            <div class="bottom-line" />
            <div class="my-image" />
          </div>
          <p>All the other steps are always going to be exactly the same. This one may vary depending on the <a href="#">destination</a>, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional.</p>
        </div>

        <rotating-tri color="#3e7a7836" side="right" animeClass={this.animeClass} height={65} origin="bottom left" on={0} under={20} over={-20} />
      </section>
    );
  }
}
