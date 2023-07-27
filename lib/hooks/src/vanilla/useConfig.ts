import { Config, atoms } from '@kombu/core';
import { Atom } from 'jotai/vanilla';

export function useConfig<T extends Record<string, unknown> = Record<string, never>>(): Atom<
  Config<T> | undefined
> {
  return atoms.config as Atom<Config<T> | undefined>;
}
