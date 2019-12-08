import baseStyled, {ThemedStyledInterface} from 'styled-components';
import {families, weights} from '../fonts';
import {colors} from '../colors';
import {spacings} from '../spacings';
import {screens, media} from '../responsive';
import {radius} from '../radius';

const theme = {
  families,
  weights,
  colors,
  spacings,
  radius,
  screens,
  media,
};

export default theme;

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
