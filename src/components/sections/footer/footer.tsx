import { Component, h } from '@stencil/core';

@Component({
  tag: 'contact-footer',
  styleUrl: 'footer.scss',
  // shadow: true
})
export class Footer {

  render() {
    return (
      <footer>
        <div class="container">
          <h2>Contact Me!</h2>
          <p>bla bla bla bla bla bla bla ddaddaddad</p>
        </div>
      </footer>
    );
  }

}
