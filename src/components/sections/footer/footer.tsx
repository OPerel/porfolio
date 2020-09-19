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
        <div class="container contact">
          
          <div>
            <h2>Contact Me!</h2>
            <p>bla bla bla bla bla bla bla ddaddaddad</p>
          </div>

          <form style={{ zIndex: '101' }}>
            <ion-item>
              <ion-label position="floating">Full Name</ion-label>
              <ion-input type="text" name="fullName"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" name="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Message</ion-label>
              <ion-textarea name="message"></ion-textarea>
            </ion-item>
            <ion-button>Submit</ion-button>
          </form>
        
        </div>
      </footer>
    );
  }

}
