import '../src/fonts';

import {configure} from '@storybook/react';
const req = require.context('../src/', true, /.stories.tsx$/);
function loadStories() {
  require('./welcome.js');
  req.keys().forEach(req);
}
configure(loadStories, module);
