import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {ThemeProvider} from 'styled-components';
import {render as testRender} from '@testing-library/react';
import {theme} from '@flavorli/elements';

export function render(ui: React.ReactNode) {
  const utils = testRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  return utils;
}

export function renderWithRouter(ui: React.ReactElement, route: string = '/') {
  const history = createMemoryHistory({initialEntries: [route]});
  const Wrapper = ({children}: {children: React.ReactNode}) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...testRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, {
      wrapper: Wrapper as React.ComponentType,
    }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
