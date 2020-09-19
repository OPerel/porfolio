import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'rotating-tri',
  styleUrl: 'rotating-tri.scss',
  shadow: true
})
export class Tri {
  @Element() tri: HTMLElement;
  
  @Prop() animeClass: string;
  @Prop() on: number;
  @Prop() over: number;
  @Prop() under: number;
  @Prop() side: string;
  @Prop() origin: string;
  @Prop() height: number;
  @Prop() color: string;

  componentDidLoad() {
    this.tri.style.setProperty('--on', `${this.on}`);
    this.tri.style.setProperty('--over', `${this.over}`);
    this.tri.style.setProperty('--under', `${this.under}`);
    this.tri.style.setProperty('--height', `${this.height}`);
    this.tri.style.setProperty('--origin', `${this.origin}`);
    this.tri.style.setProperty('--color', `${this.color}`);
  }

  render() {
    const borderStyles = this.side === 'left' ?
    { borderRightWidth: '110vw', borderLeftWidth: '0' } : { borderLeftWidth: '110vw', borderRightWidth: '0' };

    return <div class={`rotating-tri ${this.animeClass}`} style={borderStyles}></div>;
  }

}
