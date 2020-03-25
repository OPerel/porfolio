import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  @Prop() scrollpos: number

  render() {
    console.log('home scrollpos: ', this.scrollpos)
    return (
      <section class="app-home">
        <div class="container">
          <parallax-el to={500} from={-150}>
            <h1>Welcome</h1>
          </parallax-el>
          <parallax-el to={-550} from={-60}>
            <h3>This is my example tagline. bla bla bla...</h3>
          </parallax-el>
        </div>

        <growing-tri color={`#608D8B`} to={90} growDir={`left`} />
        <growing-tri color={`#3E7A78`} to={75} growDir={`left`} />
        <growing-tri color={`#266f6d`} to={60} growDir={`left`} />
        <growing-tri color={`#226765`} to={45} growDir={`left`} />
        
      </section>
    );
  }
}
