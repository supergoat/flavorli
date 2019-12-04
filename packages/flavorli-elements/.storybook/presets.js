const path = require('path');

module.exports = [
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      configureJSX: true,
    },
  },
  {
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        transpileOnly: true,
      },
    },
  },
];
