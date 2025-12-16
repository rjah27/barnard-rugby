/**
 * Copyright 2025 rjah27
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

class BarnardGameCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() { return 'barnard-game-card'; }


  constructor() {    
    super();
    this.date = '';
    this.team = '';
    this.location = '';
    this.time = '';
    this.result = '';
  }
  static get properties() {
    return {
      date: { type: String },
      team: { type: String },
      location: { type: String },
      time: { type: String },
      result: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { 
        display:block; 
    }
        .barnard-card {
          background: var(--ddd-theme-default-skyBlue);
          border-radius: 10px;
          padding: 12px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
        }

        .heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--ddd-theme-default-slateMaxLight);
        }

        .team {
          font-weight: 700;
          margin: 8px 0;
          font-size: 1.05rem;
        }

        .result {
          font-weight: 600;
          color: var(--ddd-theme-default-futureLime);
        }

        .result.lost {
          color: var(--ddd-theme-default-original87Pink);
        }

        /* date/time and location should use slateMaxLight */
        .location {
          font-size: 0.9rem;
          color: var(--ddd-theme-default-slateMaxLight);
        }

        .date {
          font-size: 0.9rem;
          color: var(--ddd-theme-default-slateMaxLight);
        }

        @media (prefers-color-scheme: dark) {
          .barnard-card {
            background: var(--ddd-theme-default-skyBlue);
            color: var(--ddd-theme-default-slateMaxLight);
            box-shadow: none;
          }

          .heading {
            color: var(--ddd-theme-default-slateMaxLight);
          }
        }
      `];
  }

  render() {
    const resultClass = this.result && this.result.toLowerCase().startsWith('w') ? 'won' : (this.result && this.result.toLowerCase().startsWith('l') ? 'lost' : '');
    return html`
      <div class="barnard-card">
        <div class="heading">
          <div class="date">${this._formatDate(this.date)} ${this.time ? ' - ' + this.time : ''}</div>
          <div class="location">${this.location}</div>
        </div>
        <div class="team">${this.team}</div>
        <div class="heading">
          <div class="result ${resultClass}">${this.result || ''}</div>
        </div>
      </div>
    `;
  }

  _formatDate(d) {
    if (!d) return '';
    try {
      const dt = new Date(d);
      return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return d;
    }
  }
}

customElements.define(BarnardGameCard.tag, BarnardGameCard);
