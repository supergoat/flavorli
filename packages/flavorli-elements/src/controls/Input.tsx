import styled from 'styled-components';
import {IColor} from '../theme/colors';

export interface IInputProps {
  width?: string;
  hasError?: string;
}

export const Input = styled.input<IInputProps>`
  border: ${p =>
    p.hasError
      ? `1px solid ${p.theme.colors.error}`
      : `1px solid ${p.theme.colors.secondarySurface}`};
  border-radius: ${p => `${p.theme.spacings[2]}px`};
  padding: ${p => `${p.theme.spacings[8]}px`};
  width: ${p => p.width || 'auto'};
`;
