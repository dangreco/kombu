import { FunctionComponent } from 'react';

import { CardOptions, defineCard as define } from '@kombu/core';

import { mount } from './mount';
import { OptionsWithMiddleware } from './types';

export function defineCard(C: FunctionComponent, options: CardOptions & OptionsWithMiddleware) {
  define(mount(C, options.middleware), options);
}
