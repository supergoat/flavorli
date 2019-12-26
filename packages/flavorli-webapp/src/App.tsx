import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '@flavorli/elements';

import Routes from './Routes';

export default () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App>
          <Routes />
        </App>
      </ThemeProvider>
    </>
  );
};

const App = styled.div`
  position: relative;
  width: 100vw;
  max-width: 420px;
  height: 100vh;
`;
