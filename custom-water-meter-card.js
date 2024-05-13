/**
 * Custom Water Meter Card for Home Assistant Lovelace UI
 *
 * This custom Lovelace card displays a water usage meter similar to mechanical meters,
 * with the first five digits indicating thousands of liters and the last three digits indicating liters.
 *
 * Usage:
 * - Ensure that HACS is installed in your Home Assistant setup.
 * - Install this card via HACS and include it in your Lovelace dashboard configuration.
 *
 * Dependencies:
 * - Home Assistant (https://www.home-assistant.io/)
 * - Home Assistant Community Store (HACS) (https://hacs.xyz/)
 *
 * Author: Theo van der Sluijs
 * Date: 2024-05-13
 * License: MIT
 * Author URL: https://itheo.tech
 * Project URL: https://github.com/tvdsluijs/hacs-custom-water-meter-card
 */

class CustomWaterMeterCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.loadCSS();
  }

  /**
   * Load external CSS file for the card styling.
   */
  loadCSS() {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/local/custom-water-meter-card.css");
    this.shadowRoot.appendChild(link);
  }

  /**
   * Set the Home Assistant object, prepare the card content, and render initial values.
   * @param {object} hass - Home Assistant object which includes state and configuration data.
   */
  set hass(hass) {
    this._hass = hass;
    if (!this.content) {
      this.content = document.createElement("div");
      this.content.innerHTML = `
        <div class="meter">
          <div class="thousands"></div>
          <div class="liters"></div>
        </div>
      `;
      this.shadowRoot.appendChild(this.content);
      this.thousands = this.content.querySelector(".thousands");
      this.liters = this.content.querySelector(".liters");
    }
    this.updateValues();
  }

  /**
   * Update the display values based on the sensor state.
   */
  updateValues() {
    const value = this._hass.states[this.config.entity].state.split(",");
    this.thousands.textContent = value[0];
    this.liters.textContent = value[1];
  }

  /**
   * Set the configuration for the card, provided via the Lovelace UI.
   * @param {object} config - Configuration object specifying options like entity ID.
   */
  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  /**
   * Get the size of the card.
   * @returns {number} - Returns the size of the card for Lovelace layout purposes.
   */
  getCardSize() {
    return 1;
  }
}

// Define the custom element for the water meter card
customElements.define("custom-water-meter-card", CustomWaterMeterCard);
