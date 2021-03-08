import React from 'react';
import { Provider } from 'next-auth/client';
import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { SnackbarProvider } from 'notistack';
import GlobalSWRConfig from 'configs/GlobalSWRConfig';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={1}>
          <GlobalSWRConfig>
            <Provider session={pageProps.session}>
              <Component {...pageProps} />
            </Provider>
          </GlobalSWRConfig>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
