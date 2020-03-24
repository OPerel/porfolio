import { Component, Host, h, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'parallax-el',
  styleUrl: 'parallax-el.scss',
  shadow: true
})
export class ParallaxEl {
  @Element() slideDiv: HTMLElement;

  @State() lastScrollY: number;
  @State() ticking: boolean;

  // @Prop() color: string;
  @Prop() to: number;
  @Prop() from: number;

  constructor() {
    this.lastScrollY = this.from;
    this.ticking = false;
  }

  onScroll = () => {
    console.log('onScroll is running');
    const body = document.getElementsByTagName('body')[0];
    this.lastScrollY = body.scrollTop;
    this.requestTick();
  }

  requestTick = () => {
    // console.log('requestTick is running');
    if(!this.ticking) {
      requestAnimationFrame(this.animate);
    }
    this.ticking = true;
  }

  animate = (): void => {
    // console.log('animate is running');
    // if (this.to > 98) throw new Error('Scrolling factor above 98');

    // reset the tick so we can capture the next onScroll
    this.ticking = false;

    let scrollpos: number;
    
    const main = document.getElementsByTagName('main')[0];
    scrollpos = (this.lastScrollY / (main.clientHeight - window.innerHeight) * this.to) + this.from;
    this.setScrollPos(scrollpos);
  }

  setScrollPos(scrollPos: number): void {
    this.slideDiv.style.setProperty('--scrollpos', `${scrollPos}`);
  }

  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('scroll', this.onScroll, {passive: false});
  }

  componentDidLoad() {
    this.setScrollPos(this.from);
  }

  render() {
    return ( 
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
