import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'growing-tri',
  styleUrl: 'growing-tri.scss',
  shadow: true
})
export class GrowingTri {
  @Prop() cp: number;
  @Prop() on: number;
  @Prop() over: number;
  @Prop() under: number;
  @Prop() page: number;
  @Prop() growDir: string;
  @Prop() color: string;
  @Element() tri: HTMLElement;

  getClassName = (): string => this.cp === this.page ? 'on' : (this.cp > this.page ? 'over' : 'under');

  componentDidLoad() {
    this.tri.style.setProperty('--on', `${this.on}`);
    this.tri.style.setProperty('--over', `${this.over}`);
    this.tri.style.setProperty('--under', `${this.under}`);
    this.tri.style.setProperty('--color', `${this.color}`);
  }

  render() {
    const borderStyles = this.growDir === 'left' ?
    { borderRightWidth: '100vw', borderLeftWidth: '0' } : { borderLeftWidth: '100vw', borderRightWidth: '0' };

    return <div class={'tri ' + this.getClassName()} style={borderStyles}></div>;
  }

}
