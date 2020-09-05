import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'parallax-el',
  styleUrl: 'parallax-el.scss',
  shadow: true
})
export class ParallaxEl {
  @Element() parallaxEl: HTMLElement;

  @Prop() cp: number;
  @Prop() page: number;
  @Prop() on: number;
  @Prop() over: number;
  @Prop() under: number;

  constructor() {}

  getClassName = (): string => this.cp === this.page ? 'on' : (this.cp > this.page ? 'over' : 'under');

  componentDidLoad() {
    this.parallaxEl.style.setProperty('--on', `${this.on}`);
    this.parallaxEl.style.setProperty('--over', `${this.over}`);
    this.parallaxEl.style.setProperty('--under', `${this.under}`);
  }

  render() {
    return ( 
      <div class={this.getClassName()}>
        <slot></slot>
      </div>
    );
  }

}
