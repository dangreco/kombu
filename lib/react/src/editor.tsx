import { FunctionComponent } from 'react';

import { CardEditor, EditorOptions, defineEditor as define } from '@kombu/core';

import { mount } from './mount';
import { OptionsWithMiddleware } from './types';

export function defineEditor(
  C: FunctionComponent,
  options: EditorOptions & OptionsWithMiddleware,
): CardEditor {
  return define(mount(C, options.middleware), options);
}
