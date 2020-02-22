import styled from 'styled-components';
import {fontSizes, families, weights} from '../theme/fonts';
import {IColor} from '../theme/colors';

interface ILabelProps {}
export const Label = styled.label<ILabelProps>`
  font-family: ${p => p.theme.families.Muli};
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.weights.Muli.BOLD};
`;

export default Label;
