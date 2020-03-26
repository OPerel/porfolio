import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'parallax-el',
  styleUrl: 'parallax-el.scss',
  shadow: true
})
export class ParallaxEl {
  @Element() parallaxEl: HTMLElement;

  @Prop() to: number;
  @Prop() from: number;

  constructor() {}

  componentDidLoad() {
    this.parallaxEl.style.setProperty('--to', `${this.to}`);
    this.parallaxEl.style.setProperty('--from', `${this.from}`);
  }

  render() {
    return ( 
      <div>
        <slot></slot>
      </div>
    );
  }

}
