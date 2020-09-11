import { Component, h, Prop, Element, State, Watch } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  
  @Prop() cp: number;
  @State() homeClass: string;
  @Element() el: HTMLElement;

  @Watch('cp')
  moveToBack(newCp: number): void {
    setTimeout(() => {
      this.homeClass = newCp > 2 ? 'back' : '';
    }, 2200)
  }

  render() {
    return (
      <section class={`app-home ${this.homeClass}`}>
        <div class="container">
          <parallax-el page={0} cp={this.cp} on={0} over={-60} under={0}>
            <h2>Welcome</h2>
          </parallax-el>
          <parallax-el page={0} cp={this.cp} on={0} over={-90} under={0}>
            <h3>This is my example tagline. bla bla bla...</h3>
          </parallax-el>
        </div>

        {/* <growing-tri color={`#608D8B`} growDir={`left`} on={0} over={30} under={0} cp={this.cp} page={0} />
        <growing-tri color={`#3E7A78`} growDir={`left`} on={0} over={15} under={0} cp={this.cp} page={0} />
        <growing-tri color={`#266f6d`} growDir={`left`} on={0} over={10} under={0} cp={this.cp} page={0} />
        <growing-tri color={`#226765`} growDir={`left`} on={0} over={5} under={0} cp={this.cp} page={0} /> */}
        
      </section>
    );
  }
}

// injectHistory(AppHome);

