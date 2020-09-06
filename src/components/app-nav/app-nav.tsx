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
          <stencil-route-link exact={true} url="/" activeClass="active">
            <li id="h" onClick={() => this.handleNavClick(0)}>
              Home
            </li>
          </stencil-route-link>
          <stencil-route-link url="/about" activeClass="active">
            <li id="a" onClick={() => this.handleNavClick(1)}>
              About
            </li>
          </stencil-route-link>
          <stencil-route-link url="/portfolio" activeClass="active">
            <li id="p" onClick={() => this.handleNavClick(2)}>
              Portfolio
            </li>
          </stencil-route-link>
          <stencil-route-link url="/skills" activeClass="active">
            <li id="s" onClick={() => this.handleNavClick(3)}>
              Skills
            </li>
          </stencil-route-link>
          <li id="c" onClick={() => this.handleNavClick(4)}>
            Contact
          </li>
        </ul>
      </nav>
    );
  }

}
