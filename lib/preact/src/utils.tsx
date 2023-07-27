import { ComponentChildren } from 'preact';
import { Middleware } from './types';

export function apply(root: HTMLElement, middleware: Middleware[], children: ComponentChildren) {
  if (middleware.length === 0) return children;

  const M = middleware[0](root);

  return <M>{apply(root, middleware.slice(1), children)}</M>;
}
