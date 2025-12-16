/**
 * Copyright 2025 rjah27
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./pages/home-page.js";
import "./pages/team-page.js";
import "./pages/schedule-page.js";
import "./pages/about-page.js";
import "./pages/signup-page.js";

/**
 * @demo index.html
 * @element barnard-rugby
 */
export class BarnardRugby extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "barnard-rugby";
  }

  constructor() {
    super();
    this.title = "";
    this.route = window.location.pathname || '/';
  this.initRouting();
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.showMiniMenu = false;
    // Used pilot to help me fix a locals issue regarding my vercel deployment having errors.
    this.registerLocalization({
      context: this,
      localesPath: new URL("../locales/", import.meta.url).href
    });
  }
 
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      route: { type: String },
      showMiniMenu: { type: Boolean }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--barnard-rugby-label-font-size, var(--ddd-font-size-s));
      }
      .barnard-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .app-header {
        background: #1b263b;
        color: var(--ddd-theme-default-slateMaxLight);
        padding: 12px;
        display:flex;
        align-items:center;
        justify-content:space-between;
      }
      .controls button {
        margin-left:8px;
        padding:8px 12px;
        border-radius:6px;
        border:1px solid var(--ddd-theme-default-slateMaxLight);
        background:transparent;
        color:var(--ddd-theme-default-slateMaxLight);
        cursor:pointer;
      }
      .controls button:hover { 
        background: var(--ddd-theme-default-beaverBlue); 
      }
      .app-header { 
        position: relative; 
      }

      .mini-menu-button {
        display: none;
        background: transparent;
        color: var(--ddd-theme-default-slateMaxLight);
        padding: 8px 10px;
        border-radius: 4px;
        cursor: pointer;
      }

      .mini-nav {
        position: absolute;
        right: 12px;
        top: 8px;
        background: var(--ddd-theme-default-beaverBlue);
        border-radius: 6px;
        padding: 8px;
        box-shadow: 0 6px 18px var(--ddd-theme-default-potential50);
        display: flex;
        flex-direction: column;
        gap: 6px;
        z-index: 40;
        min-width: 200px;
      }

      .mini-nav button {
        background: transparent;
        color: var(--ddd-theme-default-slateMaxLight);
        border: none;
        text-align: left;
        padding: 8px 10px;
        border-radius: 6px;
        cursor: pointer;
      }

      .mini-nav button:hover {
        background: var(--ddd-theme-default-pughBlue);
      }
      .content {
        flex: 1;
        padding: var(--ddd-spacing-4);
      }

      footer {
        background: transparent;
        padding: 18px 0;
      }

      .barnard-footer {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        padding: 12px 18px;
        background: var(--ddd-theme-default-beaverBlue);
        color: var(--ddd-theme-default-slateMaxLight);
        box-shadow: 0 1px 0 rgba(0,0,0,0.08) inset;
      }

      .barnard-footer .footer-grid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .barnard-footer a {
        color: inherit;
        text-decoration: underline;
      }

      .barnard-footer .contact, .barnard-footer .address {
        font-size: 0.95rem;
      }

      @media (max-width: 700px) {
        .controls { display: none; }
        .mini-menu-button { display: inline-block; }
        .barnard-footer { padding-left: 12px; padding-right: 12px; }
      }

      /* I had to search up a techniqye to invert the whole pages content instead of creating
      a dark mode "button" like I did in previous works. This allows me to 
      have the page listen to the user's system preferences, the hue-rotate feature is quite cool.*/
      @media (prefers-color-scheme: dark) {
        :host {
          filter: invert(1) hue-rotate(180deg);
          transition: filter 200ms ease;
        }

        :host img,:host video,:host svg {
          filter: invert(1) hue-rotate(180deg);
        }
      }

      @media (prefers-color-scheme: light) {
        :host {
          color: var(--ddd-theme-default-slateMaxLight);
        }
        .content, .title, .brand, .barnard-footer, .barnard-footer .contact, .barnard-footer .address {
          color: var(--ddd-theme-default-slateMaxLight);
        }
        .controls button {
          color: var(--ddd-theme-default-slateMaxLight);
          border-color: rgba(255,255,255,0.08);
        }
        a { color: inherit; }
      }
    `];
  }
  
  renderPage() {
    switch (this.route) {
      case '/team':
        return html`<team-page></team-page>`;
      case '/signup':
        return html`<signup-page></signup-page>`;
      case '/about':
        return html`<about-page></about-page>`;
      case '/schedule':
        return html`<schedule-page></schedule-page>`;
      default:
        return html`<home-page></home-page>`;
    }
  }



    render() {
      const current = this.route === '/' ? 'home' : this.route.replace(/^\//, '');
      return html`
        <div class="barnard-container">
          <header class="app-header">
            <div class="title">Barnard Rugby</div>
            <div class="controls">
              <button @click=${this._onHomeClick}>Home</button>
              <button @click=${this._onTeamClick}>Team</button>
              <button @click=${this._onSignupClick}>Sign Up</button>
              <button @click=${this._onAboutClick}>About</button>
              <button @click=${this._onScheduleClick}>Schedule</button>
            </div>
          
            <button class="mini-menu-button" @click="${this._toggleMiniMenu}" aria-label="Mini-Menu">☰</button>

            ${this.showMiniMenu ? html`
              <nav class="mini-nav" @click=${this._onMiniNavClick}>
                <button data-path="/">Home</button>
                <button data-path="/team">Team</button>
                <button data-path="/signup">Sign Up</button>
                <button data-path="/about">About</button>
                <button data-path="/schedule">Schedule</button>
              </nav>
            ` : ''}
          </header>

          <div class="content">
            ${this.renderPage()}
          </div>

          <footer>
            <div class="barnard-footer">
              <div class="footer-grid">
                <div class="brand">© Barnard Rugby</div>
                <div class="contact">
                  <a href="https://instagram.com/barnardrugby">Instagram: @barnardrugby</a>
                  &nbsp;|&nbsp;
                  <a href="mailto:barnardrugby@barnard.edu">barnardrugby@barnard.edu</a>
                </div>
                <div class="address">Field: 134 Rugby Field Rd, State College, PA 16801</div>
              </div>
            </div>
          </footer>
        </div>
      `;
  }

  initRouting() {
    this.route = window.location.pathname;

    window.addEventListener('popstate', () => {
      this.route = window.location.pathname || '/';
      this.requestUpdate();
    });
  }

  navigateTo(path) {
    if (window.location.pathname === path) return;
    window.history.pushState({}, '', path);
    this.route = path;
    this.requestUpdate();
  }

  _onNavClick(e) {
    e.preventDefault();
    const link = e.currentTarget.getAttribute('href');
    this.navigateTo(link);
  }

  _onSelectChange(e) {
    const val = e.target.value || '/';
    const path = val === 'home' ? '/' : `/${val}`;
    this.navigateTo(path);
  }

  _onHomeClick(e) {
    e?.preventDefault();
    this.navigateTo('/');
  }

  _onTeamClick(e) {
    e?.preventDefault();
    this.navigateTo('/team');
  }

  _onSignupClick(e) {
    e?.preventDefault();
    this.navigateTo('/signup');
  }

  _onAboutClick(e) {
    e?.preventDefault();
    this.navigateTo('/about');
  }

  _onScheduleClick(e) {
    e?.preventDefault();
    this.navigateTo('/schedule');
  }

  _toggleMiniMenu(e) {
    e?.preventDefault();
    this.showMiniMenu = !this.showMiniMenu;
    this.requestUpdate();
  }

  _onMiniNavClick(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const path = btn.dataset.path || '/';
    this.navigateTo(path);
    this.showMiniMenu = false;
    this.requestUpdate();
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(BarnardRugby.tag, BarnardRugby);
