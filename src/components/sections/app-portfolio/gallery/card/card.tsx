import { Component, h, Host } from '@stencil/core';
import {Prop} from "@ionic/core/dist/types/stencil-public-runtime";

@Component({
  tag: 'project-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  @Prop() slide: number;

  render() {
    return (
      <Host>
        <ion-card button={true}>
          <ion-img src="assets/israelmm.png" />

          <ion-card-header>
            <ion-card-title>
              IsraelMM {this.slide}
            </ion-card-title>
            {/*<ion-card-subtitle>*/}
            {/*  Look at my project*/}
            {/*</ion-card-subtitle>*/}
          </ion-card-header>

          <ion-card-content>
            <p style={{ fontSize: '1.4em' }}>
              this is my first project. It is the most amazing project you have ever seen.
            </p>

            <div class="card-buttons">
              <ion-button
                fill="solid"
                href="#"
                rel="noopener noreferrer"
              >
                <ion-icon slot="start" name="rocket-outline" />
                Demo
              </ion-button>
              <ion-button
                fill="solid"
                href="#"
                rel="noopener noreferrer"
              >
                <ion-icon slot="start" name="logo-github" />
                Source
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </Host>
    );
  }
}
