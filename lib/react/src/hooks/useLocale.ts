/* eslint-disable @typescript-eslint/no-explicit-any */
import { FrontendLocaleData } from 'custom-card-helpers';
import { useAtom } from 'jotai';

import { atoms } from '@kombu/core';

export function useLocale(): FrontendLocaleData | undefined {
  const [hass] = useAtom(atoms.hass);
  return hass?.locale;
}
