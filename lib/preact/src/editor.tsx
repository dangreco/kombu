import { FunctionalComponent, render } from 'preact';
import { CardEditorOptions, defineEditor as define } from '@kombu/core';
import { Provider } from 'jotai';
import { OptionsWithMiddleware } from './types';
import { apply } from './utils';

export function defineEditor(
  C: FunctionalComponent,
  options: CardEditorOptions & OptionsWithMiddleware,
) {
  define((root, store) => {
    render(
      <Provider store={store}>
        {options.middleware ? apply(root, options.middleware, <C />) : <C />}
      </Provider>,
      root,
    );
  }, options);
}
