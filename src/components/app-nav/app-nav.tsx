import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
  // shadow: true
})
export class AppNav {
  @State() current: number;
  @State() prev: number;

  @Event() navigate: EventEmitter<number>; 

  constructor() {
    this.current = 0;
  }

  handleNavClick(sec: number) {
    this.navigate.emit(sec);
    this.current = sec;
  }

  render() {
    return (
      <nav>
        {/* <h1>Ori Perelman</h1> */}
        <ul>
        <li id="h" class={this.current === 0 ? 'active' : ''} onClick={() => this.handleNavClick(0)}>Home</li>
          <li id="a" class={this.current === 1 ? 'active' : ''} onClick={() => this.handleNavClick(1)}>About</li>
          <li id="p" class={this.current === 2 ? 'active' : ''} onClick={() => this.handleNavClick(2)}>Portfolio</li>
          <li id="s" class={this.current === 3 ? 'active' : ''} onClick={() => this.handleNavClick(3)}>Skills</li>
          <li id="c" class={this.current === 4 ? 'active' : ''} onClick={() => this.handleNavClick(4)}>Contact</li>
        </ul>
      </nav>
    );
  }

}
