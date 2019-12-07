import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme, styled} from '@flavorli/elements';
import Root from './Root';
import Recipe from './Recipe';

export default () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App>
          <Root>
            <Recipe />
          </Root>
        </App>
      </ThemeProvider>
    </>
  );
};

const App = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;
