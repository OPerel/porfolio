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
          <div class="about">
            <p>All the other steps are always going to be exactly the same. This one may vary depending on the <a href="#">destination</a>, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional.</p>
            <div class="my-image" />
            <parallax-el style={{
              justifySelf: 'self-start',
              alignSelf: 'center'
            }} animeClass={this.animeClass} on={0} under={-40} over={80}>
              <div class="left-line"/>
            </parallax-el>
            <div />
            <div class="bottom-line" />
          </div>
        </div>

        {/*#3E7A78*/}
        <rotating-tri color="#3e7a7836" side="right" animeClass={this.animeClass} height={65} origin="bottom left" on={0} under={20} over={-20} />
      </section>
    );
  }
}
