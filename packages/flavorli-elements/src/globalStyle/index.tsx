import {createGlobalStyle} from 'styled-components';
import {normalize} from './normalize';
import {global} from './global';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${global}
`;
