import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'app-portfolio',
  styleUrl: 'app-portfolio.scss',
  // shadow: true
})
export class AppPortfolio {
  // @Prop() cp: number;
  // @Prop() from: number;
  // @Element() el: HTMLElement;

  componentWillUpdate() {
  }

  render() {
    return (
      <section class="app-portfolio">
        <div class="container">
          <h2>Portfolio</h2>
        </div>
        {/* <parallax-el from={400} to={-700}> */}
          <projects-gallery />
        {/* </parallax-el> */}
      </section>
    );
  }
}
