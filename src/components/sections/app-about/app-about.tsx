import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
  shadow: true
})
export class AppAbout {
  @Prop() animeClass: string;
  @Prop() summary: string;

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
          <p innerHTML={this.summary.replace(/\n/g, '<br/>')} />
        </div>

        <rotating-tri color="#3e7a7836" side="right" animeClass={this.animeClass} height={65} origin="bottom left" on={0} under={20} over={-20} />
      </section>
    );
  }
}
