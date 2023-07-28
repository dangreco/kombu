import { HomeAssistant, LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';
import { CardOptions, RegisterCardParams, Store } from './types';
import { createStore } from 'jotai/vanilla';
import { atoms } from './state';

declare global {
  interface Window {
    customCards?: RegisterCardParams[];
  }
}

export function defineCard(mount: (root: HTMLElement, store: Store) => void, options: CardOptions) {
  class Card extends HTMLElement implements LovelaceCard {
    private store = createStore();

    public async setConfig(config: LovelaceCardConfig | undefined) {
      this.store.set(atoms.config, config);
    }

    public getCardSize(): number | Promise<number> {
      return 1;
    }

    public connectedCallback() {
      mount(this, this.store);
    }

    public static getConfigElement = options.getConfigElement;
    public static getStubConfig = options.getStubConfig;

    public set hass(hass: HomeAssistant | undefined) {
      this.store.set(atoms.hass, hass);
    }
  }

  customElements.define(options.card.type, Card);
  window.customCards = window.customCards || [];
  window.customCards.push(options.card);
}
