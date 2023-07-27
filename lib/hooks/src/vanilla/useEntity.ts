import { selectAtom } from 'jotai/utils';
import { atoms } from '@kombu/core';
import { Atom } from 'jotai/vanilla';
import { HassEntity } from 'home-assistant-js-websocket';

export function useEntity(entityId: string): Atom<HassEntity | undefined> {
  return selectAtom(atoms.states, (h) => h?.[entityId]);
}
