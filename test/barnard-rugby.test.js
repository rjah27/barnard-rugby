import { html, fixture, expect } from '@open-wc/testing';
import "../barnard-rugby.js";

describe("BarnardRugby test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <barnard-rugby
        title="title"
      ></barnard-rugby>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
