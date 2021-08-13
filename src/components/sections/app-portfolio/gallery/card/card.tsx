import { Component, h, Host } from '@stencil/core';
import {Prop} from "@ionic/core/dist/types/stencil-public-runtime";

@Component({
  tag: 'project-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  @Prop() project: any;

  render() {
    const { images } = this.project;
    const { desktop/*, mobile*/ } = images[0].resolutions;
    console.log(desktop)
    return (
      <Host>
        <ion-card>
          <div class="img-wrapper">
            <ion-img src={desktop.url} />
          </div>

          <ion-card-header>
            <ion-card-title>
              {this.project.displayName}
            </ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p style={{ fontSize: '1.4em' }}>
              {this.project.summary}
            </p>

            <ul>
              {this.project.languages.map(l => (
                <li>{l}</li>
              ))}
            </ul>

          </ion-card-content>
          <div class="card-buttons">
            <ion-button
              fill="solid"
              href="#"
              rel="noopener noreferrer"
            >
              <ion-icon slot="start" name="rocket-outline" />
              Live
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
        </ion-card>
      </Host>
    );
  }
}
