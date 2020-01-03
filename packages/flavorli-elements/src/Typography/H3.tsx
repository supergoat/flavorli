import styled from 'styled-components';
import {IColor} from '../theme/colors';

interface IH3 {
  width?: string;
  align?: 'left' | 'center' | 'right';
  color?: IColor;
}
export const H3 = styled.h3<IH3>`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${p =>
    p.color ? p.theme.colors[p.color] : p.theme.colors.secondaryTextColor};
  font-size: ${p => p.theme.fontSizes[16]};
  font-weight: ${props => props.theme.weights.TitilliumWeb.BOLD};
  width: ${props => props.width};
  text-align: ${props => props.align};
`;
