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
        <rotating-tri color="#023a38" dir="left" page={3} cp={this.cp} height={110} origin="top left" on={0} under={-90} over={90} />
        <rotating-tri color="#394b4b" dir="right" page={3} cp={this.cp} height={20} origin="bottom left" on={0} under={0} over={0} />
        {/* <growing-tri color={`#394b4b`} cp={this.cp} page={3} on={15} over={20} under={0} growDir={`right`} /> */}
      </section>
    );
  }

}
