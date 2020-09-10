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
          <ion-router-link href="/">
            <li id="h" onClick={() => this.handleNavClick(0)}>
              Home
            </li>
          </ion-router-link>
          <ion-router-link href="/about">
            <li id="a" onClick={() => this.handleNavClick(1)}>
              About
            </li>
          </ion-router-link>
          <ion-router-link href="/portfolio">
            <li id="p" onClick={() => this.handleNavClick(2)}>
              Portfolio
            </li>
          </ion-router-link>
          <ion-router-link href="/skills">
            <li id="s" onClick={() => this.handleNavClick(3)}>
              Skills
            </li>
          </ion-router-link>
          <li id="c" onClick={() => this.handleNavClick(4)}>
            Contact
          </li>
        </ul>
      </nav>
    );
  }

}
