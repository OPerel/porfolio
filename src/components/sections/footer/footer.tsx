import { Component, h, State } from '@stencil/core';
import doValidation from "../../../helpers/formValidation";

interface FieldControl {
  value: string;
  isValid: boolean;
  touched: boolean;
}

export interface FormControls {
  name: FieldControl;
  email: FieldControl;
  message: FieldControl;
  formIsValid: boolean;
}

@Component({
  tag: 'contact-footer',
  styleUrl: 'footer.scss',
  // shadow: true
})
export class Footer {
  @State() formControls: FormControls;

  constructor() {
    this.formControls = {
      name: {
        value: '',
        isValid: false,
        touched: false
      },
      email: {
        value: '',
        isValid: false,
        touched: false
      },
      message: {
        value: '',
        isValid: false,
        touched: false
      },
      formIsValid: false
    }
  }

  handleInputChange(e: Event): void {
    const { name, value } = (e.target as HTMLInputElement);
    this.formControls = {
      ...this.formControls,
      [name]: {
        ...this.formControls[name],
        value,
        isValid: doValidation(name, value),
        touched: true
      }
    };

    this.checkFormIsValid();
  }

  checkFormIsValid = () => {
    const { name, email, message } = this.formControls;
    this.formControls = {
      ...this.formControls,
      formIsValid: name.isValid && email.isValid && message.isValid
    }
  }

  handleSubmitForm(e: Event): void {
    e.preventDefault();
    const { name, email, message } = this.formControls;
    console.log('submit form: ', name, email, message)

    // this.name = '';
    // this.email = '';
    // this.message = '';
  }

  render() {
    const { name, email, message } = this.formControls;
    return (
      <footer>
        <div class="container contact">

          <div class="left-top">
            <div>
              <h2>Get In Touch</h2>
              <p>I would love to hear from you.</p>
            </div>

            <div class="footer-icons">
              <a
                href="https://github.com/OPerel"
                target="_blank"
                rel="noopener noreferrer"
                class="ion-activatable"
              >
                <ion-icon name="logo-github" />
                <ion-ripple-effect />
              </a>
              <a
                href="https://www.linkedin.com/in/ori-perelman-0144a5161/"
                target="_blank"
                rel="noopener noreferrer"
                class="ion-activatable"
              >
                <ion-icon name="logo-linkedin" />
                <ion-ripple-effect />
              </a>
              <a href="mailto: oriperelman@gmail.com" class="ion-activatable">
                <ion-icon name="mail-sharp" />
                <ion-ripple-effect />
              </a>
            </div>
          </div>

          <form>
            <ion-item
              class={name.touched && !name.isValid ? 'ion-invalid' : ''}
            >
              <ion-label position="floating">Full Name</ion-label>
              <ion-input
                type="text"
                name="name"
                value={name.value}
                onInput={(e: Event) => {this.handleInputChange(e)}}
              />
            </ion-item>
            <ion-item
              class={email.touched && !email.isValid ? 'ion-invalid' : ''}
            >
              <ion-label position="floating">Email</ion-label>
              <ion-input
                type="email"
                name="email"
                value={email.value}
                onInput={(e: Event) => {this.handleInputChange(e)}}
              />
            </ion-item>
            <ion-item
              class={message.touched && !message.isValid ? 'ion-invalid' : ''}
            >
              <ion-label position="floating">Message</ion-label>
              <ion-textarea
                name="message"
                enterkeyhint="done"
                value={message.value}
                onInput={(e: Event) => {this.handleInputChange(e)}}
              />
            </ion-item>
            <ion-button
              onClick={(e: Event) => this.handleSubmitForm(e)}
              disabled={!this.formControls.formIsValid}
            >
              Submit
            </ion-button>
          </form>

        </div>
        <p class="credit"><a href="#">Designed and developed by Ori Perelman &copy; {new Date().getFullYear()}</a></p>
      </footer>
    );
  }

}
