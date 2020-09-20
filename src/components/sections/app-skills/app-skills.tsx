import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-skills',
  styleUrl: 'app-skills.scss',
  // shadow: true
})
export class AppSkills {
  @Prop() animeClass: string;

  render() {
    return (
      <div class="skills-wrapper">
        <section class="app-skills">
          <div class="container">
            <parallax-el animeClass={this.animeClass} on={0} over={-80} under={90}>
              <h2>Skills</h2>
            </parallax-el>
            <p>I've got SKILLS!</p>
          </div>
          <rotating-tri color="#023a38" side="left" animeClass={this.animeClass} height={130} origin="top left" on={0} under={-90} over={90} />
          
        </section>
        <div class="end-tri"></div>
      </div>
    );
  }

}
