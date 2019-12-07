import {styled} from '../theme';

interface IH1 {
  width?: string;
  align?: 'left' | 'center' | 'right';
}
export const H1 = styled.h1<IH1>`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${props => props.theme.colors.TEXT_COLOR};
  font-size: 34px;
  font-weight: ${props => props.theme.weights.TitilliumWeb.REGULAR};
  width: ${props => props.width};
  text-align: ${props => props.align};
`;

export default H1;
