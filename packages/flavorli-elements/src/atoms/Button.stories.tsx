import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  parameters: {
    component: Button,
    componentSubtitle: 'Displays a Button',
  },
};
export const text = () => <Button>Hello</Button>;
export const emoji = () => <Button>😀😎👍💯</Button>;
