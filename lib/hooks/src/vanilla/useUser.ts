import { atoms } from '@kombu/core';
import { Atom } from 'jotai/vanilla';
import { CurrentUser } from 'custom-card-helpers';

export function useUser(): Atom<CurrentUser | undefined> {
  return atoms.user;
}
