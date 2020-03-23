import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
  // shadow: true
})
export class AppNav {
  @Prop() currentLink: number;
  @Prop() prevLink: number;
  @Event() navigate: EventEmitter;

  // @Prop() cp: number;
  // @Prop() pp: number;

  constructor() {
    // this.currentLink = 0;
    // this.prevLink = 0;
  }

  handleNavClick(e: UIEvent, sec: number) {
    // this.prevLink = this.currentLink;
    // this.currentLink = sec;
    this.navigate.emit({
      sectionNumber: sec,
      targetId: (e.target as HTMLElement).textContent,
    })


    // const sectionId = 
    
  }

  // componentWillLoad() {
  //   document.querySelectorAll('li').forEach((li: HTMLElement) => {

  //   })
  // }

  render() {
    // console.log(this.currentLink)
    return (
      <nav>
        <ul>
          <li class={this.currentLink === 0 ? 'active' : ''} onClick={(e) => this.handleNavClick(e, 0)}>Home</li>
          <li class={this.currentLink === 1 ? 'active' : ''} onClick={(e) => this.handleNavClick(e, 1)}>About</li>
          <li class={this.currentLink === 2 ? 'active' : ''} onClick={(e) => this.handleNavClick(e, 2)}>Portfolio</li>
          <li class={this.currentLink === 3 ? 'active' : ''} onClick={(e) => this.handleNavClick(e, 3)}>Skills</li>
          {/* <li class={this.currentLink === 4 ? 'active' : ''} onClick={(e) => this.handleNavClick(e, 4)}>Contact</li> */}
        </ul>
      </nav>
    );
  }

}
