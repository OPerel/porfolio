import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'app-portfolio',
  styleUrl: 'app-portfolio.scss',
  // shadow: true
})
export class AppPortfolio {
  @Prop() cp: number;
  @Prop() className: string;
  // @Element() el: HTMLElement;

  componentWillUpdate() {
  }

  render() {
    return (
      <section class={`app-portfolio ${this.className}`}>
        <div class="container">
          <h2>Portfolio</h2>
        </div>
        <parallax-el page={2} cp={this.cp} on={0} over={-50} under={60}>
          <projects-gallery />
        </parallax-el>
      </section>
    );
  }
}
