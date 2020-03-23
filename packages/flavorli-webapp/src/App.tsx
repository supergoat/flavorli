import React from 'react';
import mixpanel from 'mixpanel-browser';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '@flavorli/elements';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import Routes from './Routes';
import {AuthProvider} from './helpers/auth/useAuthContext';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN as string);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <React.StrictMode>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </React.StrictMode>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
