import styled from 'styled-components';

interface IH2 {
  width?: string;
  align?: 'left' | 'center' | 'right';
}
export const H2 = styled.h2<IH2>`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${props => props.theme.colors.textColor};
  font-size: ${p => p.theme.fontSizes[24]};
  font-weight: ${props => props.theme.weights.TitilliumWeb.REGULAR};
  width: ${props => props.width};
  text-align: ${props => props.align};
`;
