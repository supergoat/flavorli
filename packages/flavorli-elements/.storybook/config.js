import React from 'react';
import {ThemeProvider} from 'styled-components';
import {configure, addDecorator, addParameters} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {GlobalStyle} from '../src';
import theme from '../src/theme';
import storyBookTheme from './theme';

addParameters({options: {theme: storyBookTheme}});
addDecorator(withA11y);
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src/', true, /\.stories\.tsx$/),
  ],
  module,
);
