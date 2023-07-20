import { FunctionComponent } from 'react';
// import foo from '@kombu/core';

// const Card: FunctionComponent = () => {
//   return (
//     <div>
//       <p>I am a card!</p>
//     </div>
//   );
// };

// console.log(foo);

// initialize(Card, {
//   type: 'my-card',
//   name: 'My Card',
//   description: 'My custom card',
//   preview: false,
// });

export const Hello: FunctionComponent = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <p>Hello, world!</p>
    </div>
  );
};
