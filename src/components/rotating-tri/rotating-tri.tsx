import { Component, h } from '@stencil/core';

@Component({
  tag: 'rotating-tri',
  styleUrl: 'rotating-tri.scss',
  shadow: true
})
export class Tri {

  render() {
    return <div class="rotating-tri"></div>;
  }

}
