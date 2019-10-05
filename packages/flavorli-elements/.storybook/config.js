import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';

import {GlobalStyle} from '../src/';

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(require.context('../src/', true, /\.stories\.tsx$/), module);
