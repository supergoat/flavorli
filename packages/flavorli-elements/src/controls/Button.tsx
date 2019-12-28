import styled from 'styled-components';

const DEFAULT_WIDTH = '120px';
const DEFAULT_HEIGHT = '35px';

export interface IButtonProps {
  intent?: 'secondary' | 'text';
  height?: string;
  width?: string;
}

export const Button = styled.button<IButtonProps>`
  padding: 0;
  height: ${p =>
    p.height ? p.height : p.intent === 'text' ? 'auto' : DEFAULT_HEIGHT};
  width: ${p =>
    p.width ? p.width : p.intent === 'text' ? 'auto' : DEFAULT_WIDTH};
  background-color: ${p =>
    p.intent === 'secondary'
      ? p.theme.colors.white
      : p.intent === 'text'
      ? 'transparent'
      : p.theme.colors.primary};
  font-weight: ${p => (p.intent === 'text' ? 'bold' : 'regular')};
  color: ${p =>
    p.intent === 'secondary' || p.intent === 'text'
      ? p.theme.colors.primary
      : p.theme.colors.textOnPrimary};
  border-radius: ${p => `${p.theme.spacings['4']}px`};
  border: ${p =>
    p.intent === 'text' ? 'none' : `1px solid ${p.theme.colors.primary}`};
  box-shadow: ${p =>
    p.intent === 'secondary' || p.intent === 'text'
      ? 'none'
      : p.theme.shadows.LIGHT};
  /* transition: 0.1s; */

  &:hover {
    background-color: ${p =>
      p.intent === 'secondary'
        ? p.theme.colors.secondarySurface
        : p.intent === 'text'
        ? 'none'
        : p.theme.colors.primaryDark};
  }
`;
