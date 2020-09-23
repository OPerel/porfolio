import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'contact-footer',
  styleUrl: 'footer.scss',
  // shadow: true
})
export class Footer {
  @State() name: string;
  @State() email: string;
  @State() message: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  handleInputChange(e: Event): void {
    this[(e.target as HTMLInputElement).name] = (e.target as HTMLInputElement).value;
  }

  handleSubmitForm(e: Event): void {
    e.preventDefault();
    console.log('submit form: ', this.name, this.email, this.message)

    this.name = '';
    this.email = '';
    this.message = '';
  }

  render() {
    const { name, email, message } = this;
    return (
      <footer>
        <div class="container contact">
          
          <div>
            <h2>Contact Me!</h2>
            <p>bla bla bla bla bla bla bla ddaddaddad</p>
          
            <div class="footer-icons">
              <a href="https://github.com/OPerel" target="_blank" class="ion-activatable">
                <ion-icon name="logo-github"></ion-icon>
                <ion-ripple-effect></ion-ripple-effect>
              </a>
              <a href="https://www.linkedin.com/in/ori-perelman-0144a5161/" target="_blank" class="ion-activatable">
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-ripple-effect></ion-ripple-effect>
              </a>
              <a href="mailto: oriperelman@gmail.com" class="ion-activatable"> 
                <ion-icon name="mail-sharp"></ion-icon>
                <ion-ripple-effect></ion-ripple-effect>
              </a>
            </div>
          </div>

          <form>
            <ion-item>
              <ion-label position="floating">Full Name</ion-label>
              <ion-input
                type="text"
                name="name"
                value={name}
                onInput={(e: Event) => {this.handleInputChange(e)}}
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input
                type="email"
                name="email"
                value={email}
                onInput={(e: Event) => {this.handleInputChange(e)}}
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Message</ion-label>
              <ion-textarea
                name="message"
                rows={4}
                value={message}
                onInput={(e: Event) => {this.handleInputChange(e)}}
              ></ion-textarea>
            </ion-item>
            <ion-button onClick={(e: Event) => this.handleSubmitForm(e)}>
              Submit
            </ion-button>
          </form>
        
        </div>
      </footer>
    );
  }

}
