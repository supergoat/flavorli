import styled from 'styled-components';

interface IH2 {
  width?: string;
  align?: 'left' | 'center' | 'right';
}
export const H2 = styled.h2<IH2>`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${props => props.theme.colors.TEXT_COLOR};
  font-size: 20px;
  font-weight: ${props => props.theme.weights.TitilliumWeb.REGULAR};
  width: ${props => props.width};
  text-align: ${props => props.align};
`;

export default H2;
