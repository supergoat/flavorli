import baseStyled, {ThemedStyledInterface} from 'styled-components';
import {families} from '../fonts';
import {colors} from '../colors';
import {spacings} from '../spacings';

const theme = {
  families,
  colors,
  spacings,
};

export default theme;

type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
