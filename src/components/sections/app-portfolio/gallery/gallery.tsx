import {Component, h, Host, State} from '@stencil/core';
import {Prop} from "@ionic/core/dist/types/stencil-public-runtime";

@Component({
  tag: 'projects-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {
  @State() displayAll: boolean;
  @Prop() projects: any[];

  constructor() {
    this.displayAll = false;
  }

  private sliderOptions = {
    mousewheel: true,
    breakpoints: {
      320: {
        slidesPerView: 1.15,
        spaceBetween: 10
      },
      780: {
        slidesPerView: 2.4,
        spaceBetween: 30
      }
    }
  }

  render() {
    const displayProjects = this.displayAll ? this.projects : this.projects.filter((_, i) => i < 5);
    return this.projects ? (
      <Host>
        <div class="gallery-container">
          <ion-slides pager={true} options={this.sliderOptions}>
            {displayProjects.map(project => (
              <ion-slide>
                <project-card project={project}/>
              </ion-slide>
            ))}
          </ion-slides>
          <ion-button
            onClick={() => this.displayAll = !this.displayAll}
          >
            <ion-icon
              slot={this.displayAll ? "start" : "end"}
              name={this.displayAll ? "chevron-back" : "chevron-forward"}
            />
            {this.displayAll ? 'Hide' : 'See More'}
          </ion-button>
        </div>
      </Host>
    ) : null;
  }

}
