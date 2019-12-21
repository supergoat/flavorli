import styled from 'styled-components';

interface IH1 {
  width?: string;
  align?: 'left' | 'center' | 'right';
  intent?: 'secondary';
}
export const H1 = styled.h1<IH1>`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${props =>
    props.intent === 'secondary'
      ? props.theme.colors.secondaryTextColor
      : props.theme.colors.textColor};
  font-size: ${p => p.theme.fontSizes[32]};
  font-weight: ${props => props.theme.weights.TitilliumWeb.REGULAR};
  width: ${props => props.width};
  text-align: ${props => props.align};
`;

export default H1;
