import { atom } from 'jotai';

interface User {
  name: string;
  lastName: string;
}

export const userAtom = atom<User | null>(null);

export const fullNameUserAtom = atom<string | null>((get) => {
  const user = get(userAtom);

  return user ? `${user.name} ${user.lastName}` : null;
});

export const notificationsAtom = atom(0);
