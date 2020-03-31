import { Component, h } from '@stencil/core';

@Component({
  tag: 'projects-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {

  render() {
    return <div class="gallery">
      {/* <div class="scroll-x scroll-left"><div class="gallery-arrow left-arrow"></div></div> */}
      <project-card />
      <project-card />
      <project-card />
      <project-card />
      <project-card />
      <project-card />
      <project-card />
      <project-card />
      {/* <div class="scroll-x scroll-right"><div class="gallery-arrow right-arrow"></div></div> */}
    </div>;
  }

}
