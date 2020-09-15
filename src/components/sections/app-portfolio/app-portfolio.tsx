import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-portfolio',
  styleUrl: 'app-portfolio.scss',
  // shadow: true
})
export class AppPortfolio {
  @Prop() animeClass: string;

  render() {
    return (
      <section class="app-portfolio">
        <div class="container">
          <h2>Portfolio</h2>
        </div>
        <parallax-el animeClass={this.animeClass} on={0} over={-50} under={60}>
          <projects-gallery />
        </parallax-el>
      </section>
    );
  }
}
