import {Component, h, Host, Element, State} from '@stencil/core';
import {Prop} from "@ionic/core/dist/types/stencil-public-runtime";

@Component({
  tag: 'projects-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {
  @State() displayAll: boolean;
  @Element() el: HTMLElement;
  @Prop() projects: any[];

  constructor() {
    this.displayAll = false;
  }

  private sliderOptions = {
    mousewheel: {
      forceToAxis: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.15,
        spaceBetween: 10
      },
      780: {
        mousewheel: {
          forceToAxis: true
        },
        slidesPerView: 2.4,
        spaceBetween: 30
      }
    }
  }

  trackXScrolling = (e): void => {
    e.preventDefault();
    if (e.deltaY > 0) this.el.scrollLeft += 35;
    if (e.deltaY < 0) this.el.scrollLeft -= 35;
  }

  componentWillLoad() {
    this.el.addEventListener('wheel', (e) => {
      this.trackXScrolling(e);
    });
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
            {this.displayAll ? 'hide' : 'see more'}
          </ion-button>
        </div>
      </Host>
    ) : null;
  }

}
