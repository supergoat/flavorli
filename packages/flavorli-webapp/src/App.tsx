import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '@flavorli/elements';
import Recipe from './Recipe';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StepByStep from './StepByStep';

export default () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <App>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path="/step-by-step">
                <StepByStep />
              </Route>
              <Route path="/">
                <Recipe />
              </Route>
            </Switch>
          </ThemeProvider>
        </App>
      </Router>
    </>
  );
};

const App = styled.div`
  position: relative;
  max-width: 420px;
  height: 100vh;
`;
