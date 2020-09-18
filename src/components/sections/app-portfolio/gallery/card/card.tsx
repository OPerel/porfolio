import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'project-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {

  render() {
    return <Host class="card"></Host>;
  }

}
