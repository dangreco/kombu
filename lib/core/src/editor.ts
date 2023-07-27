import {
  LovelaceCardConfig,
  LovelaceCardEditor,
  fireEvent,
} from 'custom-card-helpers';
import { CardEditorOptions, Store } from './types';
import { createStore } from 'jotai/vanilla';
import { atoms } from './state';

export function defineEditor(
  mount: (root: HTMLElement, store: Store) => void,
  options: CardEditorOptions,
) {
  class CardEditor extends HTMLElement implements LovelaceCardEditor {
    private store = createStore();

    constructor() {
      super();
      mount(this, this.store);

      this.store.sub(atoms.config, () =>
        fireEvent(
          this,
          'config-changed',
          {
            config: this.store.get(atoms.config),
          },
          { bubbles: true, composed: true },
        ),
      );
    }

    setConfig(config: LovelaceCardConfig | undefined) {
      this.store.set(atoms.config, config);
    }
  }

  customElements.define(options.name, CardEditor);
}
