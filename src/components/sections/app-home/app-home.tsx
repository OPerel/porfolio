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
        <section class={`home-background`}></section>
        <div class="container">
          <parallax-el animeClass={this.animeClass} on={5} over={-60} under={0}>
            <h2>Welcome</h2>
          </parallax-el>
          <parallax-el animeClass={this.animeClass} on={5} over={-90} under={0}>
            <h3>This is my example tagline. bla bla bla...</h3>
          </parallax-el>
        </div>

        {/* <growing-tri color={`#226765`} cp={this.cp} page={0} on={0} over={30} under={0} growDir={`left`} /> */}
        <rotating-tri color="#226765" dir="left" animeClass={this.animeClass} height={30} origin="bottom right" on={-10} under={30} over={0} />
        
      </section>
    );
  }
}
