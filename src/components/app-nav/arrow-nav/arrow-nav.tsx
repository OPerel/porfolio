import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'arrow-nav',
  styleUrl: 'arrow-nav.scss',
  shadow: true
})
export class ArrowNav {
  @Prop() currentPage: number;
  @Event() navigate: EventEmitter;

  handleClick(dir: string) {
    const sectionNum = dir === 'down' ? this.currentPage + 1 : this.currentPage - 1;
    if (!this.validator(sectionNum)) return;
    this.navigate.emit(sectionNum);
  }

  private validator(section: number): boolean {
    return section >= 0 && section <= 4;
  }

  render() {
    return (
      <div class="arrow-nav">

        <ion-button
          class={this.currentPage === 0 ? 'hide' : ''}
          onClick={() => this.handleClick('up')}
          disabled={this.currentPage === 0}
        >
          <ion-icon name="chevron-up"></ion-icon>
        </ion-button>

        <ion-button
          class={this.currentPage === 4 ? 'hide' : ''}
          onClick={() => this.handleClick('down')}
          disabled={this.currentPage === 4}
        >
          <ion-icon name="chevron-down"></ion-icon>
        </ion-button>

      </div>
    );
  }

}
