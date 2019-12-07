import {styled} from '../theme';

interface IH3 {
  width?: string;
  align?: 'left' | 'center' | 'right';
}
export const H3 = styled.h3<IH3>`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${props => props.theme.colors.SECONDARY_TEXT_COLOR};
  font-size: 16px;
  font-weight: ${props => props.theme.weights.TitilliumWeb.BOLD};
  width: ${props => props.width};
  text-align: ${props => props.align};
`;

export default H3;
