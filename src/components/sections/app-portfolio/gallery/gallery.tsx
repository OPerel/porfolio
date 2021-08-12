import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'projects-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {
  @Element() el: HTMLElement;
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
        slidesPerView: 1.4,
        spaceBetween: 10
      },
      780: {
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
            <ion-slide>
              <project-card slide={1}/>
            </ion-slide>
            <ion-slide>
              <project-card slide={2}/>
            </ion-slide>
            <ion-slide>
              <project-card slide={3}/>
            </ion-slide>
            <ion-slide>
              <project-card slide={4}/>
            </ion-slide>
            <ion-slide>
              <project-card slide={5}/>
            </ion-slide>
          </ion-slides>
        </div>
      </Host>
    );
  }

}
