import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  
  @Prop() pages: {cp: number, pp: number};

  @Element() el: HTMLElement;

  render() {
    return (
      <section class={`app-home`}>
        <div class="container">
          {/* <parallax-el page={0} cp={this.cp} on={0} over={30} under={0}> */}
            <h2>Welcome</h2>
          {/* </parallax-el> */}
          {/* <parallax-el page={0} cp={this.cp} on={0} over={-30} under={0}> */}
            <h3>This is my example tagline. bla bla bla...</h3>
          {/* </parallax-el> */}
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

