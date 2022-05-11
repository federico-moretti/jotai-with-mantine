import { atom } from 'jotai';

export const userAtom = atom<{ name: string; lastName: string } | null>(null);

export const fullNameUserAtom = atom<string | null>((get) => {
  const user = get(userAtom);

  return user ? `${user.name} ${user.lastName}` : null;
});

export const notificationsAtom = atom(0);
