import React from 'react';
import StoryButton, {Button} from './Button';
import {styled} from '../theme';

export default {
  title: 'Elements|Button',
  component: StoryButton,
};

export const examples = () => (
  <Buttons>
    <Button>Click Me</Button>
    <Button disabled>Click Me</Button>
  </Buttons>
);

export const enabled = () => <Button>Click Me</Button>;

export const disabled = () => <Button disabled>Click Me</Button>;

const Buttons = styled.div`
  display: flex;
  ${Button} {
    margin-right: 10px;
  }
`;
