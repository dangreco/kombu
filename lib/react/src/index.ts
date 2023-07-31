import 'react';

export * from './card';
export * from './editor';
export * from './types';
export * from './hooks';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'ha-card': unknown;
    }
  }
}
