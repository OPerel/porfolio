import { Component, h, State } from '@stencil/core';

const initialFormState = {
  name: '',
  email: '',
  message: ''
}

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
            <ion-button
              onClick={(e: Event) => this.handleSubmitForm(e)}
            >
              Submit
            </ion-button>
          </form>
        
        </div>
      </footer>
    );
  }

}
