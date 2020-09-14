import { Component, h, Host, State, Element } from '@stencil/core';

@Component({
  tag: 'projects-gallery',
  styleUrl: 'gallery.scss',
  shadow: true
})
export class Gallery {
  @Element() el: HTMLElement;

  @State() gallery: HTMLElement;
  @State() viewWidth: number;
  @State() scrolledLeft: boolean;
  @State() scrolledRight: boolean;

  constructor() {
    this.viewWidth = window.innerWidth;
    this.scrolledLeft = true;
    this.scrolledRight = false;
  }

  scrollToRight(): void {
    if (!this.scrolledRight) {
      console.log('scroll right')
      this.gallery.scrollBy({
        top: 0,
        left: this.viewWidth,
        behavior: 'smooth'
      });
    }
  }

  scrollToLeft(): void {
    if (!this.scrolledLeft) {
      console.log('scroll left')
      this.gallery.scrollBy({
        top: 0,
        left: -this.viewWidth,
        behavior: 'smooth'
      });
    }
  }

  trackXScrolling = (e): void => {
    e.preventDefault();
    if (e.deltaY > 0) this.gallery.scrollLeft += 20;
    if (e.deltaY < 0) this.gallery.scrollLeft -= 20;
    // if (Math.floor(left) < 10) {
    //   this.scrolledLeft = true;
    // } else {
    //   this.scrolledLeft = false;
    // }

    // if (Math.floor(left) + viewWidth === totalWidth) {
    //   this.scrolledRight = true
    // } else {
    //   this.scrolledRight = false;
    // }
  }

  componentWillLoad() {
    window.addEventListener('resize', () => {
      this.viewWidth = window.innerWidth;
      // console.log('window resize this.viewWidth: ', this.viewWidth);
      // console.log('window resize this.gallery.scrollLeft: ', this.gallery.scrollLeft);
      // console.log('window resize this.gallery.clientLeft: ', this.gallery.clientLeft);
    });
  }

  componentDidLoad() {
    // this.gallery = this.el.shadowRoot.querySelector('.gallery');
    // this.gallery.addEventListener('wheel', (e) => {
      // const { scrollLeft, offsetWidth, scrollWidth } = this.gallery;
      // this.trackXScrolling(e);
    // });
  }

  render() {
    return (
      <Host>

        {/* <div class="scroll-x scroll-left">
          {!this.scrolledLeft && <div class="gallery-arrow left-arrow" onClick={() => this.scrollToLeft()}>X</div>}
        </div> */}

        <div class="gallery">
          <project-card />
          <project-card />
          <project-card />
          <project-card />
          <project-card />
          <project-card />
          <project-card />
          <project-card />
        </div>

        {/* <div class="scroll-x scroll-right">
          {!this.scrolledRight && <div class="gallery-arrow right-arrow" onClick={() => this.scrollToRight()}>X</div>}
        </div> */}

      </Host>
    );
  }

}
