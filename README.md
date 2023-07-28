# kombu

Utility libraries for developing Home Assistant custom cards. 

Kombu is **framework-agnostic** at its core, with bindings to 
popular UI frameworks as independent addon libraries.

### Feature Matrix

|                 | React | Preact | Vue | Svelte | 
|-----------------|:-----:|:------:|:---:|:------:| 
| Card            |   ✅  |   ✅   | ⏱️  |   ⏱️   |
| Card Editor     |   ✅  |   ✅   | ⏱️  |   ⏱️   |
| Hooks           |   ✅  |   ✅   | ⏱️  |   ⏱️   |
| Middleware      |   ✅  |   ✅   | ⏱️  |   ⏱️   |

## Usage

### React

```tsx
// my-card.tsx

import { FunctionComponent } from 'react';
import { defineCard } from '@kombu/react';
import { useEntity } from '@kombu/hooks';

const Card: FunctionComponent = () => {
  const sun = useEntity('sun.sun');
  
  const isDaytime = sun?.state === 'above_horizon';
  
  return (
    <ha-card>
      <p>
        Good { isDaytime ? 'day' : 'night'}!
      </p>
    </ha-card>
  );
}

defineCard(
  Card,
  {
    card: {
      type: 'my-card',
      name: 'My Card',
      description: 'My custom card!',
      preview: true,
    }
  },
);
```

### Preact

```tsx
// my-card.tsx

import { FunctionalComponent } from 'preact';
import { defineCard } from '@kombu/preact';
import { useEntity } from '@kombu/hooks';

const Card: FunctionalComponent = () => {
  const sun = useEntity('sun.sun');
  
  const isDaytime = sun?.state === 'above_horizon';
  
  return (
    <ha-card>
      <p>
        Good { isDaytime ? 'day' : 'night'}!
      </p>
    </ha-card>
  );
}

defineCard(
  Card,
  {
    card: {
      type: 'my-card',
      name: 'My Card',
      description: 'My custom card!',
      preview: true,
    }
  },
);
```

### Middleware

Sometimes we need access to the `root` HTML element to bind certain libraries to, for example the [`styled-components`](https://styled-components.com/) library. Kombu provides the ability for _middleware_ to accomplish this.

The type definition of middleware in kombu is:

```ts
type Middleware = (root: HTMLElement) => COMPONENT;
```

...where `COMPONENT` is the framework-specific implementation of a renderable component with renderable children (e.g. `FunctionComponent` in Preact.)

The `defineX(...)` methods take in a property `middleware` in their options argument, which has type `Middleware[]`. These are applied **in order recursively** such that for the provided options:

```ts
{
  ...
  middleware: [A, B, C],
}
```

...it will compose as:

```
A (
  B (
    C (
      CARD
    )
  )
)
```