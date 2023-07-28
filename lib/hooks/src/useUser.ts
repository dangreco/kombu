import { atoms } from '@kombu/core';
import { CurrentUser } from 'custom-card-helpers';
import { useAtom } from 'jotai';

export function useUser(): CurrentUser | undefined {
  const [user] = useAtom(atoms.user);
  return user;
}
