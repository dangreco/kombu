import { useAtom } from 'jotai';
import type { HassEntity } from 'home-assistant-js-websocket';
import { atoms } from '../store';

export const useEntity = (entityId: string): HassEntity | undefined => {
  const [hass] = useAtom(atoms.hass);
  return hass?.states[entityId];
};
