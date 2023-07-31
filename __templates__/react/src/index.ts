import { defineCard, defineEditor } from '@kombu/react';
import { EmotionMiddleware } from '@kombu/react-emotion';
import { MuiMiddleware } from '@kombu/react-mui';

import Card from './card';
import Editor from './editor';

const middleware = [EmotionMiddleware(), MuiMiddleware()];

const { getConfigElement } = defineEditor(Editor, { name: 'my-custom-card-editor', middleware });

defineCard(Card, {
  card: {
    type: 'my-custom-card',
    name: 'My Custom Card',
  },
  getConfigElement,
  middleware,
});
