import { FunctionalComponent } from 'preact';

export type Middleware = (root: HTMLElement) => FunctionalComponent;

export interface OptionsWithMiddleware {
  middleware?: Middleware[];
}
