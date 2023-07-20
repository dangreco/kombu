import { render, FunctionComponent } from 'preact';
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
    private store = createStore();
    private rendered = false;

    private _render = () => {
      if (!this.rendered) {
        this.rendered = true;
        console.log('rendering');
        render(
          <Provider store={this.store}>
            <C />
          </Provider>,
          this,
        );
      }
    };

    set hass(hass: HomeAssistant | undefined) {
      this.store.set(atoms.hass, hass);
      this._render();
    }

    setConfig(config: LovelaceCardConfig | undefined) {
      this.store.set(atoms.config, config);
      this._render();
    }

    getCardSize() {
      return 1;
    }
  }

  customElements.define(options.type, Card);
  window.customCards = window.customCards || [];
  window.customCards.push(options);
}
