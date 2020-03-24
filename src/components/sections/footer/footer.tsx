import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'contact-footer',
  styleUrl: 'footer.scss',
  shadow: true
})
export class Footer {

  render() {
    return (
      <footer>
        <div class="container">
          <h4>Contact Me!</h4>
          <p>bla bla bla bla bla bla bla ddaddaddad</p>
        </div>
      </footer>
    );
  }

}
