import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, createStore } from 'jotai';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';
import { atoms } from '../store';
import { CardOptions } from './index';

declare global {
  interface Window {
    customCards?: CardOptions[];
  }
}

export function initialize(C: FunctionComponent, options: CardOptions) {
  class Card extends HTMLElement {
    private root;
    private store = createStore();

    constructor() {
      super();
      this.root = createRoot(this);
      this._render();
    }

    private _render() {
      this.root.render(
        <Provider store={this.store}>
          <C />
        </Provider>,
      );
    }

    set hass(hass: HomeAssistant | undefined) {
      this.store.set(atoms.hass, hass);
    }

    setConfig(config: LovelaceCardConfig | undefined) {
      this.store.set(atoms.config, config);
    }

    getCardSize() {
      return 1;
    }
  }

  customElements.define(options.type, Card);
  window.customCards = window.customCards || [];
  window.customCards.push(options);
}
