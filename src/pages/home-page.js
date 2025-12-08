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
        margin-top: 12px; 
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
        margin-top:18px; 
      }
      .highlight-card { 
        background: var(--ddd-theme-default-skyBlue); 
        padding:14px; 
        border-radius:8px; 
        flex:1; 
        box-shadow: 0 1px 4px rgba(0,0,0,0.06); 
      }
    `];
  }

  render() {
    // Simple Warp-style home layout: hero + highlights + CTA
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
