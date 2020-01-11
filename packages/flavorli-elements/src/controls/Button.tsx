import styled from 'styled-components';
import {IColor} from '../theme/colors';

const DEFAULT_WIDTH = '120px';
const DEFAULT_HEIGHT = '35px';

export interface IButtonProps {
  intent?: 'secondary' | 'secondaryOnPrimary' | 'text' | 'primary';
  height?: string;
  width?: string;
  color?: IColor;
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: ${p =>
    p.height ? p.height : p.intent === 'text' ? 'auto' : DEFAULT_HEIGHT};
  width: ${p =>
    p.width ? p.width : p.intent === 'text' ? 'auto' : DEFAULT_WIDTH};
  background-color: ${p =>
    p.intent === 'secondary'
      ? p.theme.colors.white
      : p.intent === 'text' || p.intent === 'secondaryOnPrimary'
      ? 'transparent'
      : p.theme.colors.primary};
  font-weight: ${p => (p.intent === 'text' ? 'bold' : 'regular')};
  color: ${p =>
    p.color
      ? p.theme.colors[p.color]
      : p.intent === 'secondary' || p.intent === 'text'
      ? p.theme.colors.primary
      : p.theme.colors.textOnPrimary};
  border-radius: ${p => `${p.theme.spacings['4']}px`};
  border: ${p =>
    p.intent === 'secondary'
      ? `1px solid ${p.theme.colors.primary}`
      : p.intent === 'secondaryOnPrimary'
      ? `1px solid ${p.theme.colors.white}`
      : 'none'};
  box-shadow: ${p =>
    p.intent === 'secondary' || p.intent === 'text'
      ? 'none'
      : p.theme.shadows.LIGHT};

  &:hover {
    background-color: ${p =>
      p.intent === 'secondary'
        ? p.theme.colors.secondarySurface
        : p.intent === 'secondaryOnPrimary'
        ? 'rgba(255, 255, 255, 0.1);'
        : p.intent === 'text'
        ? 'none'
        : p.theme.colors.primaryDark};
  }
`;
