import styled from 'styled-components';
import {IColor} from '../theme/colors';

interface IH2 {
  width?: string;
  align?: 'left' | 'center' | 'right';
  color?: IColor;
}
export const H2 = styled.h2<IH2>`
  font-family: ${p => p.theme.families.Muli};
  color: ${p => (p.color ? p.theme.colors[p.color] : p.theme.colors.textColor)};
  font-size: ${p => p.theme.fontSizes[24]};
  font-weight: ${p => p.theme.weights.Muli.REGULAR};
  width: ${p => p.width};
  text-align: ${p => p.align};
`;
