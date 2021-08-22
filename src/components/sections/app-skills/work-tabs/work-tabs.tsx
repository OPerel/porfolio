import {Component, Host, h, State, Prop, Element} from '@stencil/core';

@Component({
  tag: 'work-tabs',
  styleUrl: 'work-tabs.scss',
  shadow: true,
})
export class WorkTabs {
  @State() activeTab: number;
  @Prop() work: any[];
  @Element() el: HTMLElement;

  constructor() {
    this.activeTab = 0;
  }

  handleTabClick(idx: number) {
    this.activeTab = idx;
    this.el.style.setProperty('--active', `${idx}`);
  }

  render() {
    const workPlaceData = this.work[this.activeTab];
    return (
      <Host>
        <nav>
          <ul>
            {this.work.map((w, idx) => (
              <li
                class={this.activeTab === idx ? 'active' : ''}
                onClick={() => this.handleTabClick(idx)}
              >{w.company}</li>
            ))}
          </ul>
        </nav>
        <div class="info">
          <p>
            <span><b>{workPlaceData.position}</b> @ </span>
            {workPlaceData.website ? (
              <a
                href={workPlaceData.website}
                target="_blank"
                rel="noreferrer noopener"
              >{workPlaceData.company}</a>
            ) : (
              <span>{workPlaceData.company}</span>
            )}
          </p>
          <p>{workPlaceData.summary}</p>
          <ul>
            {workPlaceData.highlights.map(bullet => (
              <li>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </Host>
    );
  }

}
