import { Provider } from 'jotai';
import { FunctionalComponent, render } from 'preact';

import { CardOptions, defineCard as define } from '@kombu/core';

import { OptionsWithMiddleware } from './types';
import { apply } from './utils';

export function defineCard(C: FunctionalComponent, options: CardOptions & OptionsWithMiddleware) {
  define((root, store) => {
    render(
      <Provider store={store}>
        {options.middleware ? apply(root, options.middleware, <C />) : <C />}
      </Provider>,
      root,
    );
  }, options);
}
