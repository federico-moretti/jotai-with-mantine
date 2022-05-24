import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Layout from '../components/Layout';
import { userAtom } from '../store';
import { Provider as JotaiProvider } from 'jotai';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Jotai!</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        <JotaiProvider initialValues={[[userAtom, pageProps.userAtomValues] as const]}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </JotaiProvider>
      </MantineProvider>
    </>
  );
}
