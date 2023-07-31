import { defineCard, defineEditor } from '@kombu/react';

import { Card } from './card';
import { Editor } from './editor';

const { getConfigElement } = defineEditor(Editor, { name: 'my-custom-card-editor' });

defineCard(Card, {
  card: {
    type: 'my-custom-card',
    name: 'My Custom Card',
  },
  getConfigElement,
});
