import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'app-portfolio',
  styleUrl: 'app-portfolio.scss',
  // shadow: true
})
export class AppPortfolio {
  @Prop() cp: number;
  @Prop() from: number;
  @Element() el: HTMLElement;

  // setOnEnterAnimation(): string {
  //   return this.from < 1 ? 'slideUp' : 'slideDown';
  // }

  // setOnLeaveAnimation(): string {
  //   return this.to > 1 ? 'slideOutUp' : 'slideOutDown';
  //  }

  componentWillUpdate() {
    // this.el.setAttribute('style', `--animation: ${this.setOnEnterAnimation()}`);
    // setInterval(() => {
      console.log(this.el.style.overflowY);
    // }, 100)
  }

  // componentWillUpdate() {
  //   this.el.setAttribute('style', `--animation: ${this.setOnLeaveAnimation()}`);
  // }

  render() {
    return (
      <section class="app-profile">
        <div class="container">
          <h2>Portfolio</h2>
          <p>These are my projects.</p>
        </div>
      </section>
    );
  }
}
