import { useConfig as _useConfig_ } from './vanilla';
import { useAtom } from 'jotai';
import { Config } from '@kombu/core';

export function useConfig<
  T extends Record<string, unknown> = Record<string, never>,
>(): Config<T> | undefined {
  const configAtom = _useConfig_<T>();
  const [config] = useAtom(configAtom);
  return config;
}
