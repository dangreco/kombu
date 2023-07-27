import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { CardEditorOptions, defineEditor as define } from '@kombu/core';
import { Provider } from 'jotai';
import { OptionsWithMiddleware } from './types';
import { apply } from './utils';

export function defineEditor(
  C: FunctionComponent,
  options: CardEditorOptions & OptionsWithMiddleware,
) {
  define((root, store) => {
    const reactRoot = createRoot(root);
    reactRoot.render(
      <Provider store={store}>
        {options.middleware ? apply(root, options.middleware, <C />) : <C />}
      </Provider>,
    );
  }, options);
}
