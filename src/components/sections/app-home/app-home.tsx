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
          <h1>Welcome</h1>
          <h3>
            This is my example tagline. bla bla bla...
          </h3>
        </div>
      </section>
    );
  }
}
