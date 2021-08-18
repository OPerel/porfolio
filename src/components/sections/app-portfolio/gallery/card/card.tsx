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
    const { images, libraries, languages, roles } = this.project;
    const { url } = images[0]?.resolutions.desktop || '';
    return this.project ? (
      <Host>
        <ion-card>
          <div class="img-wrapper" style={{backgroundImage: `url('${url}')` }} />
          <ion-card-header>
            <ion-card-title>
              {this.project.displayName}
            </ion-card-title>
            <ion-card-subtitle>
              {this.project.summary}
            </ion-card-subtitle>
          </ion-card-header>

          {roles.length > 0 && <p class="role">{roles}</p>}

          <ion-card-content style={{ fontSize: '1.3em' }}>
            <div class="project-description">
              {this.project.description}
            </div>
            <ul>
              {libraries.concat(languages).map((t: string) => <li>{t}</li>)}
            </ul>
          </ion-card-content>

          <div class="card-buttons">
            <ion-button
              fill="clear"
              href={this.project.url}
              target="__blank"
              rel="noopener noreferrer"
              disabled={!this.project.url}
            >
              <ion-ripple-effect />
              <ion-icon slot="start" name="globe-outline"/>
              Live
            </ion-button>
            <ion-button
              fill="clear"
              href={this.project.githubUrl}
              target="__blank"
              rel="noopener noreferrer"
              disabled={!this.project.githubUrl}
            >
              <ion-ripple-effect />
              <ion-icon slot="start" name="logo-github"/>
              Source
            </ion-button>
          </div>
        </ion-card>
      </Host>
    ) : <h2>Loading...</h2>;
  }
}
