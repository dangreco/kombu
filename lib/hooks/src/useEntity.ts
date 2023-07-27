import { useAtom } from 'jotai';
import { useEntity as _useEntity_ } from './vanilla';
import { HassEntity } from 'home-assistant-js-websocket';

export function useEntity(entityId: string): HassEntity | undefined {
  const entityAtom = _useEntity_(entityId);
  const [entity] = useAtom(entityAtom);
  return entity;
}
