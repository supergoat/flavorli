import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme, styled} from '@flavorli/elements';
import Root from './Root';
import Recipe from './Recipe';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <App>
            <Root>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/">
                  <Recipe />
                </Route>
              </Switch>
            </Root>
          </App>
        </Router>
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
