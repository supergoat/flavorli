import styled from 'styled-components';

interface IH3 {
  width?: string;
  align?: 'left' | 'center' | 'right';
}
export const H3 = styled.h3<IH3>`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${props => props.theme.colors.secondaryTextColor};
  font-size: ${p => p.theme.fontSizes[16]};
  font-weight: ${props => props.theme.weights.TitilliumWeb.BOLD};
  width: ${props => props.width};
  text-align: ${props => props.align};
`;

export default H3;
