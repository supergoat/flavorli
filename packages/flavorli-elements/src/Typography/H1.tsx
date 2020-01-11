import styled from 'styled-components';
import {IColor} from '../theme/colors';

interface IH1 {
  width?: string;
  align?: 'left' | 'center' | 'right';
  intent?: 'secondary';
  color?: IColor;
}
export const H1 = styled.h1<IH1>`
  font-family: ${p => p.theme.families.TitilliumWeb};
  color: ${p =>
    p.color
      ? p.theme.colors[p.color]
      : p.intent === 'secondary'
      ? p.theme.colors.secondaryTextColor
      : p.theme.colors.textColor};
  font-size: ${p => p.theme.fontSizes[32]};
  font-weight: ${p => p.theme.weights.TitilliumWeb.REGULAR};
  width: ${p => p.width};
  text-align: ${p => p.align};
`;
