import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme, Button} from '@flavorli/elements';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Button>Hello World</Button>
      </ThemeProvider>
    </>
  );
};

export default App;
