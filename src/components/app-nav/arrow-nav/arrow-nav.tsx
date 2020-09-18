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

        <ion-icon
          name="chevron-up"
          class={this.currentPage === 0 ? 'arrow-link hide' : 'arrow-link'}
          onClick={() => this.handleClick('up')}
        ></ion-icon>

        <ion-icon
          name="chevron-down"
          class={this.currentPage === 4 ? 'arrow-link hide' : 'arrow-link'}
          onClick={() => this.handleClick('down')}
        ></ion-icon>

      </div>
    );
  }

}
