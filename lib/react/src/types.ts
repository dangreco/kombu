import { FunctionComponent, PropsWithChildren } from 'react';

export type Middleware = (root: HTMLElement) => FunctionComponent<PropsWithChildren>;

export interface OptionsWithMiddleware {
  middleware?: Middleware[];
}
