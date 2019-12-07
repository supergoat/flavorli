import {styled} from '../../theme';

export const Label = styled.label`
  font-family: ${props => props.theme.families.TitilliumWeb};
  color: ${props => props.theme.colors.PRIMARY};
  font-size: 14px;
  font-weight: ${props => props.theme.weights.TitilliumWeb.BOLD};
`;

export default Label;
