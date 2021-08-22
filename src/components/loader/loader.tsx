import {Component, /*Element,*/ h/*, Prop, Watch*/} from '@stencil/core';

@Component({
  tag: 'app-loader',
  styleUrl: 'loader.scss',
  shadow: true
})
export class Loader {
  // private container: HTMLElement;
  // @Prop() setDoneLoading: () => void;
  // @Prop() loaded: boolean;
  // @Element() el: HTMLElement;
  // @Watch('loaded')
  // handleLoaded(next: boolean) {
  //   if (next) {
  //     this.container.classList.add('leave');
  //     setTimeout(() => {
  //       this.setDoneLoading();
  //     }, 600);
  //   }
  // }
  //
  // componentDidLoad() {
  //   this.container = this.el.shadowRoot.querySelector('.loader-container');
  // }

  render() {
    return (
      <div class="loader-container">
        <div class="lds-ellipsis">
          <div /><div /><div /><div />
        </div>
      </div>
    );
  }

}
