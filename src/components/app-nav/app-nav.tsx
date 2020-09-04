import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
  // shadow: true
})
export class AppNav {
  @Prop() currentLink: number;
  @Prop() prevLink: number;
  @Event() navigate: EventEmitter;

  constructor() {}

  handleNavClick(sec: number) {
    this.navigate.emit(sec);
  }

  render() {
    // console.log(this.currentLink)
    return (
      <nav>
        <h1>Ori Perelman</h1>
        <ul>
          <li id="h" class={this.currentLink === 0 ? 'active' : ''} onClick={() => this.handleNavClick(0)}>Home</li>
          <li id="a" class={this.currentLink === 1 ? 'active' : ''} onClick={() => this.handleNavClick(1)}>About</li>
          <li id="p" class={this.currentLink === 2 ? 'active' : ''} onClick={() => this.handleNavClick(2)}>Portfolio</li>
          <li id="s" class={this.currentLink === 3 ? 'active' : ''} onClick={() => this.handleNavClick(3)}>Skills</li>
          <li id="c" class={this.currentLink === 4 ? 'active' : ''} onClick={() => this.handleNavClick(4)}>Contact</li>
        </ul>
      </nav>
    );
  }

}
