import { Meta, StoryFn } from '@storybook/react';
import { Hello } from '../hello';
import { FunctionComponent } from 'react';
import { initialize } from '@kombu/core';

const Card: FunctionComponent = () => {
  return (
    <div>
      <p>I am a card!</p>
    </div>
  );
};

if (!customElements.get('my-card')) {
  initialize(Card, {
    type: 'my-card',
    name: 'My Card',
    description: 'My custom card',
    preview: false,
  });
}

export default {
  title: 'Hello',
  component: Hello,
  argTypes: {},
} as Meta<typeof Hello>;

const Template: StoryFn<typeof Hello> = (args) => (
  <div>
    <p>Test</p>
    <my-card />
    <Hello {...args} />
  </div>
);

export const Primary = Template.bind({});
