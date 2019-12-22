import styled from 'styled-components';

const DEFAULT_WIDTH = '120px';
const DEFAULT_HEIGHT = '40px';

export interface IButtonProps {
  width?: string;
}

export const Button = styled.button<IButtonProps>`
  border: none;
  height: ${DEFAULT_HEIGHT};
  width: ${p => (p.width ? p.width : DEFAULT_WIDTH)};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.textOnPrimary};
  border-radius: ${p => `${p.theme.spacings['4']}px`};
  box-shadow: ${p => p.theme.shadows.LIGHT};
  transition: 0.1s;

  &:hover {
    background-color: ${({theme}) => theme.colors.primaryDark};
  }
`;
