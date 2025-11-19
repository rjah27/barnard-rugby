/**
 * Copyright 2025 rjah27
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `barnard-rugby`
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
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/barnard-rugby.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--barnard-rugby-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}:</span> ${this.title}</h3>
  <slot></slot>
</div>
<div class="barnard-rugby-main">
    <barn-main-canvas> </barn-main-canvas>
    <barn-main-nav> 
      <barn-primary-font> </barn-primary-font>
    </barn-main-nav>

    <div class="barn-divider"> 
      <barn-main-body>
        <barn-logo> </barn-logo>
        <barn-img-wrapper> </barn-img-wrapper>
        <barn-canvas-box> </barn-canvas-box>
      </barn-main-body>
    </div>


    <barn-footer> 
      <barn-secondary-font> </barn-secondary-font>
    </barn-footer>

</div>

`;
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