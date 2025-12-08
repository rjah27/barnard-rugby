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

/**
 * `barnard-rugby`
 * The original component provided by your project. We'll keep this as the
 * main reusable component and also expose an application shell below that
 * uses this component for the home page.
 *
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
      localesPath: new URL("../locales/", import.meta.url).href,
      locales: ["ar", "es", "hi", "zh"],
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
    `];
  }
  
  renderPage() {
    switch (this.route) {
      case '/team':
        return html`<team-page></team-page>`;
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
              <button @click=${this._onAboutClick}>About</button>
              <button @click=${this._onScheduleClick}>Schedule</button>
            </div>
          </header>

          <div class="content">
            ${this.renderPage()}
          </div>

          <footer>
            <div>© Barnard Rugby</div>
          </footer>
        </div>
      `;
  }

  initRouting() {
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
