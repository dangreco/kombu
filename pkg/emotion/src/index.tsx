/* eslint-disable react/prop-types */

/* eslint-disable react/display-name */
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { Middleware } from '@kombu/react';

export const EmotionMiddleware: Middleware = (root: HTMLElement) => {
  const cache = createCache({
    key: 'kombu',
    container: root,
    prepend: true,
  });

  return ({ children }) => <CacheProvider value={cache}>{children}</CacheProvider>;
};
