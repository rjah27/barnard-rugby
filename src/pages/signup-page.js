/**
 * Copyright 2025 rjah27
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class SignupPage extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() { 
    return 'signup-page'; 
}

  static get styles() {
    return [super.styles,
    css`
      :host { 
        display:block; 
        box-sizing:border-box; 
    }
      .barnard-join-container { 
        max-width: 720px; 
        margin: 0 auto; 
        padding: 24px; 
    }
      form {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 16px;
      }

      input, select, textarea {
        padding: 8px 10px;
        border: 2px solid var(--ddd-theme-default-slateMaxLight);
        border-radius: 6px;
        width: 100%;
        box-sizing: border-box;
        font-size: 16px;
      }

      //Checked with pilot to see how the text area can stay the same size and not span across the screen and have
      //larger sizes than the others.
      textarea { 
        min-height: 40px; 
        height: 40px; 
        resize: vertical; 
    }

      button.submit { 
        background: var(--ddd-theme-default-gradient-buttons); 
        padding:10px 12px; 
        border-radius:6px; cursor:pointer; 
    }
      .sign-up { 
        background: var(--ddd-theme-default-skyBlue); 
        padding:12px; 
        border-radius:8px; 
    }
    `];
  }

  static get properties() {
    return {
      submitted: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.submitted = false;
  }

  render() {
    if (this.submitted) {
      return html`<div class="container">
        <div class="sign-up">
            <h3>Thank you for signing up!</h3>
            <p>We'll reach out with practice info and next steps.</p>
      </div>
    </div>`;
    }

    return html`
      <div class="barnard-join-container">
        <h2>Join Barnard Rugby</h2>
        <form @submit=${this._onSubmit}>
          <label>Name
            <input name="name" required />
          </label>

          <label>Email
            <input name="email" type="email" required />
          </label>

          <label>Year
            <select name="year">
              <option>First Year</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
          </label>

          <label>Position (interested)
            <input name="position" />
          </label>

          <button type="submit" class="submit">Sign up</button>
        </form>
      </div>
    `;
  }

  _onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    console.log('signup payload', payload);
    this.submitted = true;
  }
}

customElements.define(SignupPage.tag, SignupPage);
