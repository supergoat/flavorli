import {styled} from '../theme';

interface IText {
  width?: string;
  align?: 'left' | 'center' | 'right';
  intent?: 'secondary';
}
export const Text = styled.p<IText>`
  font-family: ${({theme}) => theme.families.TitilliumWeb};
  color: ${({theme, intent}) =>
    intent === 'secondary'
      ? theme.colors.SECONDARY_TEXT_COLOR
      : theme.colors.TEXT_COLOR};
  font-size: 16px;
  font-weight: ${({theme}) => theme.weights.TitilliumWeb.REGULAR};
  width: ${({width}) => width};
  text-align: ${({align}) => align};
`;

export default Text;
