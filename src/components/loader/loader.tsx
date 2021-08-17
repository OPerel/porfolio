import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-loader',
  styleUrl: 'loader.scss',
  shadow: true
})
export class Loader {
  @Prop() setDoneLoading: () => void;
  @Element() el: HTMLElement;
  // @Watch('isLoading')
  // isLoadingHandler(next: boolean, prev: boolean) {
  //   // if (!newIsLoading) {
  //   console.log('isLoading changed: ', next, prev)
  //     const el = this.el.shadowRoot.querySelector('.loader-container');
  //     console.log('el: ', el);
  //     // el.classList.remove('flex');
  //     el.classList.add('leave');
  //   // }
  // }
  connectedCallback() {
    setTimeout(() => {
      console.log('done loading')
      this.setDoneLoading();
    }, 1000);
  }

  componentDidLoad() {
    const el = this.el.shadowRoot.querySelector('.loader-container');
    el.classList.add('leave');
    (document as any).fonts.ready.then(e => {
      console.log('fonts loaded: ', e)
    })
  }

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
