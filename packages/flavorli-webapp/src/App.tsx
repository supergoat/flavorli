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
            <AppWrapper>
              <AuthProvider>
                <Routes />
              </AuthProvider>
            </AppWrapper>
          </React.StrictMode>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

const AppWrapper = styled.div`
  height: calc(
    100vh - 45px
  ); /* This subtracts the navbar height to ensure the content is not hidden */
`;
