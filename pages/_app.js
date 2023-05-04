import React from 'react';
import Head from 'next/head';
import ZestyHead from 'components/zesty/ZestyHead';
import { ThemeProvider } from '@mui/material/styles';
import ZestyStyleVariables from 'components/zestyStyleVariables';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* logic to run zesty head if it detects zesty meta data patterns in props, else load alternate head for you to edit */}
      {(pageProps?.meta?.web && <ZestyHead content={pageProps} />) || (
        <Head>
          <meta charSet="utf-8" />
          <title>Material UI Styles Examples</title>
        </Head>
      )}
      <ThemeProvider theme={ZestyStyleVariables()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
