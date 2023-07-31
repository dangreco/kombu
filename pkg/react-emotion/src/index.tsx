import createCache, { Options } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { Middleware } from '@kombu/react';

export type EmotionMiddlewareOptions = Pick<Options, 'key' | 'nonce' | 'speedy' | 'stylisPlugins'>;

export const EmotionMiddleware =
  (options?: EmotionMiddlewareOptions): Middleware =>
  (root: HTMLElement) => {
    const cache = createCache({
      ...options,
      key: options?.key ?? 'kombu',
      container: root,
      prepend: true,
    });

    // eslint-disable-next-line react/display-name, react/prop-types
    return ({ children }) => <CacheProvider value={cache}>{children}</CacheProvider>;
  };
