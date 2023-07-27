import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';
import { CardOptions, defineCard as define } from '@kombu/core';
import { Provider } from 'jotai';
import { OptionsWithMiddleware } from './types';
import { apply } from './utils';

export function defineCard(C: FunctionComponent, options: CardOptions & OptionsWithMiddleware) {
  define((root, store) => {
    const reactRoot = createRoot(root);
    reactRoot.render(
      <Provider store={store}>
        {options.middleware ? apply(root, options.middleware, <C />) : <C />}
      </Provider>,
    );
  }, options);
}
