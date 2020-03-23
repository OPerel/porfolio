import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-skills',
  styleUrl: 'app-skills.scss',
  // shadow: true
})
export class AppSkills {

  render() {
    return (
      <section class="app-skills">
        <div class="container">
          <h2>Skills</h2>
        </div>
      </section>
    );
  }

}
