import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '@flavorli/elements';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import Routes from './Routes';

export default () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <React.StrictMode>
            <App>
              <Routes />
            </App>
          </React.StrictMode>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </>
  );
};

const App = styled.div`
  height: 100vh;
`;
