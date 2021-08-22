import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  @Prop() animeClass: string;
  // @Prop() name: string;
  // @Prop() label: string;

  render() {
    return (
      <section class="app-home">
        <div class="home-container">
          <p>Hello, my name is</p>
          <parallax-el animeClass={this.animeClass} on={0} over={-60} under={0} enterFrom={45}>
            <h1>Ori Perelman</h1>
          </parallax-el>
          <p>and I'm a</p>
          <parallax-el animeClass={this.animeClass} on={0} over={-90} under={0} enterFrom={35}>
            <h2>Full Stack <span class="header-on-hover">
              <span class="header">Web Developer</span>
              <div class="rotating-wrapper">
                <img src="../../../assets/wheel.svg" alt="wheel of dhamma" class="rotating" />
              </div>
            </span></h2>
          </parallax-el>
        </div>

        <parallax-el animeClass={this.animeClass} on={-60} over={100} under={0} enterFrom={-100}>
          <img class="bg" src="../../../assets/home-bg.webp" alt="hex" />
        </parallax-el>
      </section>
    );
  }
}
