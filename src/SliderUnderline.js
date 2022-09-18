import { html, LitElement } from 'lit';
import { wcStyles } from "./slider-underline-styles.js";
import { nakDS } from "./nakDS.js"; // based on nakDS from @nabaroa

// Web Component based in demo from https://codepen.io/nabaroa/pen/QWrGxLg by @nabaroa
export class SliderUnderline extends LitElement {
  static get styles() {
    return [nakDS, wcStyles];
  }

  static get properties() {
    return {
      items: { type: Array, reflect: false },
    };
  }

  constructor() {
    super();
    this.id = this.getAttribute("id") || `slider-underline${  Math.floor(Math.random() * 1000000)}`;
    this.items = [];
  }

  firstUpdated() {
    this.items = [...this.querySelectorAll("li")];
    this.shadowRoot.querySelector("#slider-content").addEventListener("click", this.sliderUndelineClick);
  }

  sliderUndelineClick(e) {
    this.null = null;
    const sliderUnderlineClick = new CustomEvent("slider-underline-click", {
      detail: {
        id: this.id,
        item: e.target,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(sliderUnderlineClick);
  }

  render() {
    return html`
      <ul id="slider-content">
        ${this.items.map(
          (item) => html`
            <li>
              ${item.children[0]}
            </li>
          `
        )}
      </ul>
    `;
  }
}
