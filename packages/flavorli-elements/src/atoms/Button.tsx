import React, {FC} from 'react';
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
  background-color: ${({theme}) => theme.colors.PRIMARY};
  color: ${({theme}) => theme.colors.TEXT_ON_PRIMARY};
  border-radius: ${({theme}) => theme.radius.XS};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);

  transition: 0.1s;
  &:hover {
    background-color: ${({theme}) => theme.colors.PRIMARY_DARK};
  }
`;

export default Button;
