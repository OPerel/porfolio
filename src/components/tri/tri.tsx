import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'growing-tri',
  styleUrl: 'tri.scss',
  shadow: true
})
export class Tri {
  @Element() triEl: HTMLElement;
  @Prop() color: string;
  @Prop() to: number;
  @Prop() growDir: string; 
  // @Prop() name: string;
  @State() lastScrollY: number;
  @State() ticking: boolean;

  constructor() {
    this.lastScrollY = 0;
    this.ticking = false;
  }

  onScroll = () => {
    // console.log('onScroll is running');
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

  animate = () => {
    console.log('animate is running');
    // if (this.to > 98) throw new Error('Scrolling factor above 98');

    // reset the tick so we can capture the next onScroll
    this.ticking = false;

    let scrollpos: number;

    const main = document.getElementsByTagName('main')[0];
    scrollpos = (this.lastScrollY / (main.clientHeight - window.innerHeight) * this.to);
    this.triEl.style.setProperty('--scrollpos', `${scrollpos}`);
  }

  setScrollPos(scrollPos: number): void {
    this.triEl.style.setProperty('--scrollpos', `${scrollPos}`);
  }

  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('scroll', this.onScroll, {passive: false});
  }

  componentDidLoad() {
    this.setScrollPos(this.lastScrollY);
    this.triEl.style.setProperty('--color', `${this.color}`);
    // this.triEl.style.
  }

  render() {
    const borderStyles = this.growDir === 'left' ?
    { borderRightWidth: '100vw', borderLeftWidth: '0' } : { borderLeftWidth: '100vw', borderRightWidth: '0' };

    return <div class="tri" style={borderStyles}></div>;
  }

}
