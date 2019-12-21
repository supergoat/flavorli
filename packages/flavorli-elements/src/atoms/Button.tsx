import styled from 'styled-components';

const DEFAULT_WIDTH = '120px';
const DEFAULT_HEIGHT = '40px';

export interface IButtonProps {
  width?: string;
}

export const Button = styled.button<IButtonProps>`
  border: none;
  height: ${DEFAULT_HEIGHT};
  width: ${({width}) => (width ? width : DEFAULT_WIDTH)};
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.textOnPrimary};
  border-radius: ${({theme}) => `${theme.spacings['4']}px`};
  box-shadow: ${({theme}) => theme.shadows.LIGHT};

  transition: 0.1s;
  &:hover {
    background-color: ${({theme}) => theme.colors.primaryDark};
  }
`;

export default Button;
