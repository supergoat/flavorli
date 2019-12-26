import styled from 'styled-components';

const DEFAULT_WIDTH = '120px';
const DEFAULT_HEIGHT = '35px';

export interface IButtonProps {
  intent?: 'secondary';
  width?: string;
}

export const Button = styled.button<IButtonProps>`
  border: none;
  height: ${DEFAULT_HEIGHT};
  width: ${p => (p.width ? p.width : DEFAULT_WIDTH)};
  background-color: ${p =>
    p.intent === 'secondary' ? p.theme.colors.white : p.theme.colors.primary};
  color: ${p =>
    p.intent === 'secondary'
      ? p.theme.colors.primary
      : p.theme.colors.textOnPrimary};
  border-radius: ${p => `${p.theme.spacings['4']}px`};
  border: ${p => `1px solid ${p.theme.colors.primary}`};
  box-shadow: ${p =>
    p.intent === 'secondary' ? 'none' : p.theme.shadows.LIGHT};
  transition: 0.1s;

  &:hover {
    background-color: ${p =>
      p.intent === 'secondary'
        ? p.theme.colors.secondarySurface
        : p.theme.colors.primaryDark};
  }
`;
