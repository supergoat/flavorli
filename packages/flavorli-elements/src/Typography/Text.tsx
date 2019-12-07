import {styled} from '../theme';

interface IText {
  width?: string;
  align?: 'left' | 'center' | 'right';
  intent?: 'secondary' | 'highlight';
}
export const Text = styled.p<IText>`
  font-family: ${({theme}) => theme.families.TitilliumWeb};
  color: ${({theme, intent}) =>
    intent === 'secondary'
      ? theme.colors.SECONDARY_TEXT_COLOR
      : intent === 'highlight'
      ? theme.colors.PRIMARY
      : theme.colors.TEXT_COLOR};
  font-size: ${({intent}) => (intent === 'highlight' ? '14px' : '16px')};
  font-weight: ${({intent, theme}) =>
    intent === 'highlight'
      ? theme.weights.TitilliumWeb.BOLD
      : theme.weights.TitilliumWeb.REGULAR};
  width: ${({width}) => width};
  text-align: ${({align}) => align};
`;

export default Text;
