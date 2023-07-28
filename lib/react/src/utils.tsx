import { PropsWithChildren } from 'react';

import { Middleware } from './types';

export function apply(
  root: HTMLElement,
  middleware: Middleware[],
  children: PropsWithChildren['children'],
) {
  if (middleware.length === 0) return children;

  const M = middleware[0](root);

  return <M>{apply(root, middleware.slice(1), children)}</M>;
}
