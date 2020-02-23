import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '@flavorli/elements';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import Routes from './Routes';
import {AuthProvider} from './helpers/auth/useAuthContext';

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
  height: 100vh;
`;
