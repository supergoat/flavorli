import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '@flavorli/elements';
import {RelayEnvironmentProvider} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
// @ts-ignore
import {CloudinaryContext} from 'cloudinary-react';
import Routes from './Routes';

export default () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <React.StrictMode>
            <CloudinaryContext cloudName="flavorli">
              <App>
                <Routes />
              </App>
            </CloudinaryContext>
          </React.StrictMode>
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </>
  );
};

const App = styled.div`
  height: 100vh;
`;
