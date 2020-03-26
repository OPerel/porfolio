import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  @Prop() from: number

  render() {
    return (
      <section class="about">
        <div class="container">
          
          <parallax-el to={-500} from={200}>
            <h2>About</h2>
          </parallax-el>
          <p>All the other steps are always going to be exactly the same. This one may vary depending on the destination, the scrolling duration, the timing function and any callback that is invoked when the scrolling reaches it's destination. It makes sense to pass all these things as function arguments, right? The destination is the only required argument (ideally it should be a number or DOM element, and function should determine how to deal with it). The duration and easing function possess some sensible default values (thanks to ES2015 default arguments) and the callback function should be optional.</p>
        </div>
        <growing-tri color={`#3E7A78`} to={170} growDir={`right`} />
      </section>
    );
  }

}
