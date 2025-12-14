/**
 * Copyright 2025 rjah27
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class HomePage extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() { 
    return 'home-page'; 
  }

  static get styles() {
    return [super.styles,
    css`
      :host { 
        display:block; 
        box-sizing:border-box; 
      }
      .barnard-home-wrapper { 
        max-width: 1100px; 
        margin: 0 auto; 
        padding: 24px; 
      }
      .barnard-home-heading { 
        background: var(--ddd-theme-default-beaverBlue); 
        color: var(--ddd-theme-default-slateMaxLight); 
        padding: 28px; 
        border-radius:8px; 
      }
      .home-heading h2 { 
        margin: 0 0 6px 0; 
      }
      .heading-tag { 
        opacity: 0.8; 
        margin-top:4px; 
      }
      .heading-content { 
        margin-top: 18px; 
      }
      .heading-button { 
        background: var(--ddd-theme-default-gradient-buttons); 
        color: var(--ddd-theme-default-slateMaxLight); 
        border:none; 
        padding:10px 14px; 
        border-radius:6px; 
        cursor:pointer; 
      }
      .home-highlights { 
        display:flex; 
        gap:12px; 
        margin-top:64px;
      }
      .highlight-card { 
        background: var(--ddd-theme-default-skyBlue); 
        padding:14px; 
        border-radius:8px; 
        flex:1; 
        box-shadow: 0 1px 4px rgba(0,0,0,0.06); 
      }
      .barnard-achievements {
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        justify-items: center;
      }
      .achievement-card {
        background: var(--ddd-theme-default-skyBlue);
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        max-width: 420px;
        width: 100%;
        text-align: center;
      }
      .achievement-list {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .barnard-sponsors {
        margin-top: 20px;
      }
      .barnard-sponsors h3 {
        text-align: center;
      }

      .sponsor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;
        align-items: center;
        margin-top: 12px;
      }

      .sponsor-grid img {
        width: 100%;
        height: 60px;
        object-fit: contain;
        background: white;
        padding: 8px;
      }
    `];
  }

  static get properties() {
    return {
      ...super.properties,
      achievements: { type: Array },
      sponsors: { type: Array }
    };
  }

  constructor() {
    super();
    this.achievements = [
      { title: 'Regional Champions', year: '2024, 2025', desc: 'Division I - Team A' },
      { title: 'Regional Champions', year: '2023, 2024', desc: 'Division II - Team B' },
      { title: 'National Champions', year: '2024', desc: 'Division I - Team A' },
      { title: 'Ruggerfest Champions', year: '2024, 2025', desc: 'Division I - Team A' },
      { title: 'Coach of the Year', year: '2024, 2025', desc: 'Coach Reyes' }
    ];
    this.sponsors = [
      // sample images; replace with your own remote URLs or local assets
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Canterbury_of_New_Zealand_logo.svg/1200px-Canterbury_of_New_Zealand_logo.svg.png',
      'https://gilbertrugby.com.au/cdn/shop/files/gilbertlogoweb.jpg?v=1650501751',
      'https://upload.wikimedia.org/wikipedia/en/d/da/Puma_complete_logo.svg'
    ];
  }

  render() {
    return html`
      <div class="barnard-home-wrapper">
        <section class="home-heading">
          <h2>Welcome to Barnard Rugby</h2>
          <p class="heading-tag">Excellence on and off the field</p>
          <div class="heading-content">
            <p>Join one of the most exciting sports teams on campus. Whether you're a seasoned player or new to rugby, we welcome all skill levels!</p>
            <button class="heading-button" @click=${this._onJoinClick}>Join Our Team</button>
          </div>
        </section>

        <section class="home-highlights">
          <div class="highlight-card">
            <h3>Competitive Spirit</h3>
            <p>Compete in regional tournaments and championships</p>
          </div>
          <div class="highlight-card">
            <h3>Team Unity</h3>
            <p>Build lasting friendships and learn teamwork</p>
          </div>
          <div class="highlight-card">
            <h3>Fitness & Skills</h3>
            <p>Develop athletic ability and rugby techniques</p>
          </div>
        </section>

        <section class="barnard-achievements">
          <h3>Achievements</h3>
          <div class="achievement-list">
            ${this.achievements.map(a => html`
              <div class="achievement-card">
                <strong>${a.title} — ${a.year}</strong>
                <div>${a.desc}</div>
              </div>
            `)}
          </div>
        </section>

        <section class="barnard-sponsors">
          <h3>Our Sponsors</h3>
          <div class="sponsor-grid">
            ${this.sponsors.map(src => html`
              <div><img src="${src}" alt="sponsor logo"></div>
            `)}
          </div>
        </section>
      </div>
    `;
  }

  _onJoinClick() {
    // use History API consistent with the app shell
    const path = '/signup';
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

customElements.define(HomePage.tag, HomePage);
