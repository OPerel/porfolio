import { Component, h, Prop } from '@stencil/core';

export interface Skill {
  keywords: string[],
  level: string,
  name: string,
  rating: number,
  yearsOfExperience: number | null,
}

@Component({
  tag: 'app-skills',
  styleUrl: 'app-skills.scss',
  // shadow: true
})
export class AppSkills {
  @Prop() animeClass: string;
  @Prop() skills: Skill[];
  @Prop() work: any[];

  render() {
    return (
      <div class="skills-wrapper">
        <section class="app-skills">
          <div class="container">
            <parallax-el animeClass={this.animeClass} on={0} over={-80} under={90}>
              <h2>Skills & Experience</h2>
            </parallax-el>

            <div class="skills-container">
              <div class="skills-list">
                {this.skills.map(s => (
                  <div class="skills-item">
                    <span>{s.name}</span>
                    <div
                      class="level"
                      style={{
                        width: this.animeClass === 'on' ? `${s.rating * 20}%` : '0'
                      }}
                    />
                  </div>
                ))}
              </div>

              {this.work.length > 0 && (
                <work-tabs work={this.work} />
              )}
            </div>

          </div>
          <rotating-tri
            color="#023a38"
            side="left"
            animeClass={this.animeClass}
            height={130}
            origin="top left"
            on={0}
            under={-90}
            over={90}
          />

        </section>
        <div class="end-tri" />
      </div>
    );
  }

}
