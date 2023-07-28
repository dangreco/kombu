import { useAtom } from 'jotai';

import { Config, atoms } from '@kombu/core';

export function useConfig<T extends Record<string, unknown> = Record<string, never>>():
  | Config<T>
  | undefined {
  const [config] = useAtom(atoms.config);
  return config as Config<T> | undefined;
}
