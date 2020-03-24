import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  // @Prop() cp: number;

  render() {
    return (
      <section class="app-home">
        <div class="container">
          <parallax-el to={500} from={-55}>
            <h1>Welcome</h1>
          </parallax-el>
          <parallax-el to={-600} from={45}>
            <h3>This is my example tagline. bla bla bla...</h3>
          </parallax-el>
        </div>
      </section>
    );
  }
}
