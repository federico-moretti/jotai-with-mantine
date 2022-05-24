import { Box, Button, Divider, Grid, Group, Stack, TextInput } from '@mantine/core';
import { useAtom, useSetAtom } from 'jotai';
import type { GetServerSidePropsContext } from 'next';
import React from 'react';
import { notificationsAtom, userAtom } from '../store';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const name = context.query?.name ?? '';
  const lastName = context.query?.lastName ?? '';
  const userAtomValues: typeof userAtom['init'] =
    name && lastName ? { name: name.toString(), lastName: lastName.toString() } : null;

  return { props: { userAtomValues } };
}

const Home = () => {
  const setNotifications = useSetAtom(notificationsAtom);
  const [user, setUser] = useAtom(userAtom);

  const [form, setForm] = React.useState({
    name: user?.name ?? '',
    lastName: user?.lastName ?? '',
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(form);
  };

  return (
    <Stack>
      <Group position="center">
        <Button onClick={() => setNotifications((v) => v + 1)}>Increase notifications</Button>
        <Button onClick={() => setNotifications((v) => (v === 0 ? v : v - 1))}>
          Decrease notifications
        </Button>
      </Group>
      {!user ? (
        <>
          <Divider />
          <Box component="form" onSubmit={onSubmit}>
            <TextInput
              label="Name"
              name="name"
              value={form.name}
              onChange={(e) => setForm((form) => ({ ...form, name: e.target.value }))}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={(e) => setForm((form) => ({ ...form, lastName: e.target.value }))}
            />
            <Button mt="lg" type="submit">
              Login
            </Button>
          </Box>
        </>
      ) : null}
    </Stack>
  );
};

export default Home;
