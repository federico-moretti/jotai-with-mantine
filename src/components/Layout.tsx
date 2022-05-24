import { AppShell, Button, Group, Header, Indicator, Stack, Title } from '@mantine/core';
import { useAtom, useAtomValue } from 'jotai';
import React from 'react';
import { fullNameUserAtom, notificationsAtom, userAtom } from '../store';

function Layout({ children }: React.PropsWithChildren<{}>) {
  const fullName = useAtomValue(fullNameUserAtom);
  const [user, setUser] = useAtom(userAtom);
  const notifications = useAtomValue(notificationsAtom);

  return (
    <AppShell
      padding="md"
      header={
        <Header height={80} p="md">
          <Stack sx={{ height: '100%' }} justify="center">
            <Group position="apart" align="center">
              {fullName ? <Title>User: {fullName}</Title> : <Title>No User</Title>}
              <Group>
                <Group>
                  <Indicator
                    disabled={notifications <= 0}
                    color="red"
                    size={20}
                    label={notifications}
                  >
                    <Button disabled={notifications <= 0}>Notifications</Button>
                  </Indicator>
                </Group>
                {user && <Button onClick={() => setUser(null)}>Logout</Button>}
              </Group>
            </Group>
          </Stack>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}

export default Layout;
