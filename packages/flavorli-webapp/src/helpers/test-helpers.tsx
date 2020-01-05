import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {ThemeProvider} from 'styled-components';
import {render as testRender, RenderOptions} from '@testing-library/react';
import {theme} from '@flavorli/elements';

export function render(
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) {
  const Wrapper = ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  const utils = testRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, {
    wrapper: Wrapper as React.ComponentType,
    ...options,
  });

  return utils;
}

export function renderWithRouter(ui: React.ReactElement, route: string = '/') {
  const history = createMemoryHistory({initialEntries: [route]});
  const Wrapper = ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>
      <Router history={history}>{children}</Router>
    </ThemeProvider>
  );
  return {
    ...testRender(ui, {
      wrapper: Wrapper as React.ComponentType,
    }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
