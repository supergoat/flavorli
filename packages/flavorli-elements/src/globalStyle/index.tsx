import {createGlobalStyle} from 'styled-components';
import {normalize} from './normalize';
import {global} from './global';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${global}
`;

export default GlobalStyle;
