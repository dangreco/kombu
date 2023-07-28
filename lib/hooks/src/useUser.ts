import { CurrentUser } from 'custom-card-helpers';
import { useAtom } from 'jotai';

import { atoms } from '@kombu/core';

export function useUser(): CurrentUser | undefined {
  const [user] = useAtom(atoms.user);
  return user;
}
