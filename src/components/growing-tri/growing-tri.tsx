import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'growing-tri',
  styleUrl: 'growing-tri.scss',
  shadow: true
})
export class Tri {
  @Element() triEl: HTMLElement;

  @Prop() color: string;
  @Prop() to: number;
  @Prop() growDir: string;
  
  constructor() {}

  componentDidLoad() {
    this.triEl.style.setProperty('--color', `${this.color}`);
    this.triEl.style.setProperty('--to', `${this.to}`);
  }

  render() {
    const borderStyles = this.growDir === 'left' ?
    { borderRightWidth: '100vw', borderLeftWidth: '0' } : { borderLeftWidth: '100vw', borderRightWidth: '0' };

    return <div class="tri" style={borderStyles}></div>;
  }

}
