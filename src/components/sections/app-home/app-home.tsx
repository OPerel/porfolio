import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  
  @Prop() cp: number;
  @Prop() className: string;

  render() {
    return (
      <section class={`app-home ${this.className}`}>
        <div class="container">
          <parallax-el page={0} cp={this.cp} on={10} over={-60} under={0}>
            <h2>Welcome</h2>
          </parallax-el>
          <parallax-el page={0} cp={this.cp} on={10} over={-90} under={0}>
            <h3>This is my example tagline. bla bla bla...</h3>
          </parallax-el>
        </div>

        <growing-tri color={`#226765`} cp={this.cp} page={0} on={0} over={30} under={0} growDir={`left`} />
        
      </section>
    );
  }
}
