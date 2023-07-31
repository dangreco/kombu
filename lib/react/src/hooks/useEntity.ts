import { HassEntity } from 'home-assistant-js-websocket';
import { useAtom } from 'jotai';

import { atoms } from '@kombu/core';

export function useEntity(entityId: string): HassEntity | undefined {
  const [states] = useAtom(atoms.states);
  return states?.[entityId];
}
