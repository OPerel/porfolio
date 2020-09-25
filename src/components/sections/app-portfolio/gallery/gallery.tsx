import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'projects-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {
  @Element() el: HTMLElement;

  trackXScrolling = (e): void => {
    e.preventDefault();
    if (e.deltaY > 0) this.el.scrollLeft += 35;
    if (e.deltaY < 0) this.el.scrollLeft -= 35;
  }

  componentWillLoad() {
    this.el.addEventListener('wheel', (e) => {
      this.trackXScrolling(e);
    });
  }

  render() {
    return (
      <Host>
        <project-card />
        <project-card />
        <project-card />
        <project-card />
        <project-card />
        <project-card />
        <project-card />
        <project-card />
      </Host>
    );
  }

}
