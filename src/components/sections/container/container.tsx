import { Component, h, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'section-container',
  styleUrl: 'container.scss',
  shadow: true
})
export class Container {
  @State() homeClass: string;
  @Prop() cp: number;
  @Element() el: HTMLElement;

  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(() => this.observerCb(this.cp), {
      root: this.el.shadowRoot.querySelector('main'),
      rootMargin: '0px',
      threshold: 0
    });
  }

  private observerCb(cp: number) {
    this.homeClass = cp > 0 ? 'back' : '';
  }

  componentWillLoad() {
    this.observer.observe(this.el.querySelector('#middle'))
  }

  render() {
    return ([
      <section class={`home-background ${this.homeClass}`}></section>,
      <slot></slot>,
      <contact-footer />
    ]);
  }

}
