import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'arrow-nav',
  styleUrl: 'arrow-nav.scss',
  shadow: true
})
export class ArrowNav {
  @Prop() currentPage: number;
  @Prop() prevLink: number;
  @Event() navigate: EventEmitter;

  handleClick(dir: string) {
    const sectionNum = dir === 'down' ? this.currentPage + 1 : this.currentPage - 1;
    this.navigate.emit(sectionNum);
  }

  render() {
    return (
      <div class="arrow-nav">

        <div
          class={this.currentPage === 0 ? 'arrow-link arrow-up hide' : 'arrow-link arrow-up'}
          onClick={() => this.handleClick('up')}
        >
          {/* <div class="outer"><div class="inner"></div></div> */}
        </div>

        <div
          class={this.currentPage === 3 ? 'arrow-link arrow-down hide' : 'arrow-link arrow-down'}
          onClick={() => this.handleClick('down')}
        >
          {/* <div class="outer"><div class="inner"></div></div> */}
        </div>

      </div>
    );
  }

}

/**
 * TODOs
 * 1. design
 * 2. throttle
 */
