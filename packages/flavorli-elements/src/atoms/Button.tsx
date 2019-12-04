import React, {FC} from 'react';
import {styled} from '../theme';

export interface ButtonProps {
  disabled?: boolean;
}

/**
 *`import {Button} from '@flavorli/elements'`
 */
export const StoryButton: FC<ButtonProps> = ({disabled = false, ...rest}) => {
  return <Button disabled={disabled} {...rest} />;
};

export const Button = styled.button<ButtonProps>`
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 4px #bbb;
`;

export default StoryButton;
