import { initialize, useEntity } from '@kombu/core';
import { FunctionComponent } from 'preact';

export const Card: FunctionComponent = () => {
  const sun = useEntity('sun.sun');

  return (
    <div>
      <p>Hello, world!</p>
      <pre>{JSON.stringify(sun || {}, null, 2)}</pre>
    </div>
  );
};

initialize(Card, {
  type: 'my-card',
  name: 'My Card',
  description: 'My custom card',
  preview: false,
});
