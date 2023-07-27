import { CurrentUser } from 'custom-card-helpers';
import { useUser as _useUser_ } from './vanilla';
import { useAtom } from 'jotai';

export function useUser(): CurrentUser | undefined {
  const userAtom = _useUser_();
  const [user] = useAtom(userAtom);
  return user;
}
