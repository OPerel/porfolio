import { Component, h, State, Event, EventEmitter } from '@stencil/core';
// import { createAnimation } from '@ionic/core';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
  // shadow: true
})
export class AppNav {
  @State() current: number;
  @State() prev: number;

  @Event() navigate: EventEmitter;

  // private animation = (n: number) => {
  //   const dir = n > this.current ? 'reverse' : 'normal';
  //   return createAnimation()
  //     .addElement(document.querySelectorAll('h2'))
  //     .duration(500)
  //     .direction(dir)
  //     .fromTo('transform', 'translateY(0)', `${'translateY(-200px)'}`)
  // }; 

  constructor() {
    this.current = 0;
    // this.prev = 0;
  }

  handleNavClick(sec: number) {
    this.navigate.emit(sec);

    // this.prev = this.current;
    this.current = sec;
  }

  render() {
    // const { current, prev } = this;
    return (
      <nav>
        <h1>Ori Perelman</h1>
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
