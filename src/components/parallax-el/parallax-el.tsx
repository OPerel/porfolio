import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'parallax-el',
  styleUrl: 'parallax-el.scss',
  shadow: true
})
export class ParallaxEl {
  @Element() parallaxEl: HTMLElement;

  @Prop() animeClass: string;
  @Prop() on: number;
  @Prop() over: number;
  @Prop() under: number;

  componentDidLoad() {
    this.parallaxEl.style.setProperty('--on', `${this.on}`);
    this.parallaxEl.style.setProperty('--over', `${this.over}`);
    this.parallaxEl.style.setProperty('--under', `${this.under}`);
  }

  render() {
    return ( 
      <div class={this.animeClass}>
        <slot></slot>
      </div>
    );
  }

}
