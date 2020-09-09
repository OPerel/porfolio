import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { createAnimation } from '@ionic/core';

const animation = () => createAnimation()
  .addElement(document.querySelector('h2'))
  .duration(500)
  .fromTo('transform', 'translateY(0)', `${false ? 'translateY(-200px)' : 'translateY(200px)'}`);

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
  // shadow: true
})
export class AppNav {
  @Event() navigate: EventEmitter;

  constructor() {}

  handleNavClick(sec: number) {
    this.navigate.emit(sec);
  }

  render() {
    return (
      <nav>
        <h1>Ori Perelman</h1>
        <ul>
          <ion-router-link href="/" routerAnimation={() => animation()}>
            <li id="h" onClick={() => this.handleNavClick(0)}>
              Home
            </li>
          </ion-router-link>
          <ion-router-link href="/about" routerAnimation={() => animation()}>
            <li id="a" onClick={() => this.handleNavClick(1)}>
              About
            </li>
          </ion-router-link>
          <ion-router-link href="/portfolio" routerAnimation={() => animation()}>
            <li id="p" onClick={() => this.handleNavClick(2)}>
              Portfolio
            </li>
          </ion-router-link>
          <ion-router-link href="/skills" routerAnimation={() => animation()}>
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
