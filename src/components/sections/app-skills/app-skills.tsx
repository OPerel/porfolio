import { Component, h, Prop } from '@stencil/core';
// import {  } from '@ionic/core/dist/types/stencil-public-runtime';

@Component({
  tag: 'app-skills',
  styleUrl: 'app-skills.scss',
  // shadow: true
})
export class AppSkills {
  @Prop() className: string;

  render() {
    return (
      <section class={`app-skills ${this.className}`}>
        <div class="container">
          <h2>Skills</h2>
        </div>
        <rotating-tri />
      </section>
    );
  }

}
