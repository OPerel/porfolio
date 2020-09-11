import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-skills',
  styleUrl: 'app-skills.scss',
  // shadow: true
})
export class AppSkills {
  @Prop() className: string;
  @Prop() cp: number;

  render() {
    return (
      <section class={`app-skills ${this.className}`}>
        <div class="container">
          <parallax-el page={3} cp={this.cp} on={0} over={-80} under={90}>
            <h2>Skills</h2>
          </parallax-el>
          <p>I've got SKILLS!</p>
        </div>
        {/* <rotating-tri /> */}
      </section>
    );
  }

}
