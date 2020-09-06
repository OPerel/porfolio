import { Component, h, Prop, Element, State, Watch } from '@stencil/core';
import { LocationSegments, injectHistory } from '@stencil/router';
// import 'ip-stencil-route-listener'; 

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  // shadow: true
})
export class AppHome {
  @State() className: string;
  
  @Prop() cp: number;
  @Prop() location: LocationSegments;

  @Watch('location')
  onRouteChange(newPage: LocationSegments, oldPage: LocationSegments) {
    
    
    if (newPage.pathname === '/') {
      console.log('new: ', newPage);
      this.el.classList.add('enter-down');
      // this.className === 'enter-down';
    } else if (oldPage.pathname === '/') {
      console.log('old: ', oldPage);
      this.el.classList.add('exit-up');
      // this.className === 'exit-up';
    }
  }

  @Element() el: HTMLElement;

  // @Listen('pageEnter')
  // onPageEnter(e: CustomEvent<LocationSegments>) {
  //   console.log('home leave event');
  // }

  // @Listen('pageLeave')
  // onPageLeave(e: CustomEvent<LocationSegments>) {
  //   console.log('home leave event');
  // }

  getClassName(): string {
    const { cp } = this;
    return cp === 0 ? 'on' : (cp > 1 ? 'over' : 'under');
  }

  // disconnectedCallback() {
  //   console.log('leave home: ', this.className)
  //   this.el.classList.add(this.className);
  // }

  render() {
    return (
      <section class={`app-home ${this.className}`}>
        <div class="container">
          <parallax-el page={0} cp={this.cp} on={0} over={30} under={0}>
            <h2>Welcome</h2>
          </parallax-el>
          <parallax-el page={0} cp={this.cp} on={0} over={-30} under={0}>
            <h3>This is my example tagline. bla bla bla...</h3>
          </parallax-el>
        </div>

        <growing-tri color={`#608D8B`} growDir={`left`} on={0} over={30} under={0} cp={this.cp} page={0} />
        <growing-tri color={`#3E7A78`} growDir={`left`} on={0} over={15} under={0} cp={this.cp} page={0} />
        <growing-tri color={`#266f6d`} growDir={`left`} on={0} over={10} under={0} cp={this.cp} page={0} />
        <growing-tri color={`#226765`} growDir={`left`} on={0} over={5} under={0} cp={this.cp} page={0} />
        
      </section>
    );
  }
}

injectHistory(AppHome);