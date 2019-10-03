import baseStyled, {ThemedStyledInterface} from 'styled-components';
import {families} from '../fonts';
import {colors} from '../colors';

const theme = {
  families,
  colors,
};

export default theme;

type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
