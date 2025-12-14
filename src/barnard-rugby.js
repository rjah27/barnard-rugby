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
    // Used pilot to help me fix a locals issue regarding my vercel deployment having errors.
    this.registerLocalization({
      context: this,
      localesPath: new URL("../locales/", import.meta.url).href
    });
  }

  // Lit reactive properties 
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      route: { type: String },
    };
  }

  // Lit scoped styles
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
        border:1px solid rgba(255,255,255,0.08);
        background:transparent;
        color:var(--ddd-theme-default-slateMaxLight);
        cursor:pointer;
      }
      .controls button:hover { 
        background: rgba(255,255,255,0.04); 
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


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(BarnardRugby.tag, BarnardRugby);
