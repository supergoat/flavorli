import {families, weights, fontSizes} from './fonts';
import {colors} from './colors';
import {spacings} from './spacings';
import {shadows} from './shadows';
import {screens, media} from './responsive';

const theme = {
  families,
  weights,
  fontSizes,
  colors,
  spacings,
  shadows,
  screens,
  media,
};

export default theme;

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
