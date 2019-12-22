import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button} from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const button = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);
