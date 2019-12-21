import React from 'react';
import {ThemeProvider} from 'styled-components';
import {render as testRender} from '@testing-library/react';
import {theme} from '.';

export function render(ui: React.ReactNode) {
  const utils = testRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  return utils;
}
