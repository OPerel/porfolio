import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  @Prop() animeClass: string;

  render() {
    return (
      <section class="app-home">
        {/*<div class="home-background">*/}
          <div class="home-container">
            <parallax-el animeClass={this.animeClass} on={-5} over={-60} under={0} enterFrom={45}>
              <h1>Welcome</h1>
            </parallax-el>
            <parallax-el animeClass={this.animeClass} on={-5} over={-90} under={0} enterFrom={35}>
              <h3>This is my example tagline. bla bla bla...</h3>
            </parallax-el>
          </div>

          <parallax-el animeClass={this.animeClass} on={-60} over={60} under={0} enterFrom={25}>
            <img src="../../../assets/test1.svg" alt="hex" />
          </parallax-el>
        {/*</div>*/}
      </section>
    );
  }
}
