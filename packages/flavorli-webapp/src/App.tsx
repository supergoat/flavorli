import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '@flavorli/elements';
import Recipe from './Recipe';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Preparation from './Preparation';

export default () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <App>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/">
                <Recipe />
              </Route>
            </Switch>
            <Route path="/step-by-step">
              <Preparation />
            </Route>
          </App>
        </Router>
      </ThemeProvider>
    </>
  );
};

const App = styled.div`
  position: relative;
  width: 420px;
  background: #fff;
`;
