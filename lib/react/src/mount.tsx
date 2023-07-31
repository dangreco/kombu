import { Provider } from 'jotai';
import { FunctionComponent } from 'react';
import { Root, createRoot } from 'react-dom/client';

import { MountFn } from '@kombu/core';

import { Middleware } from './types';
import { apply } from './utils';

export const mount: (C: FunctionComponent, middleware?: Middleware[]) => MountFn = (
  C,
  middleware,
) => {
  let __root__: Root | undefined;

  return (root, store) => {
    if (__root__ === undefined) {
      __root__ = createRoot(root);
    }

    const component = <C />;

    __root__.render(
      <Provider store={store}>
        {middleware ? apply(root, middleware, component) : component}
      </Provider>,
    );
  };
};
