import { Component, h, Host, Element } from '@stencil/core';
import {Prop} from "@ionic/core/dist/types/stencil-public-runtime";

@Component({
  tag: 'projects-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {
  @Element() el: HTMLElement;
  @Prop() projects: any[];
  private sliderOptions = {
    mousewheel: {
      forceToAxis: true
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'progressbar'
    // },
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
    return (
      <Host>
        <div class="gallery-container">
          <ion-slides pager={true} options={this.sliderOptions}>
            {this.projects.map(project => (
              <ion-slide>
                <project-card project={project}/>
              </ion-slide>
            ))}
          </ion-slides>
        </div>
      </Host>
    );
  }

}
