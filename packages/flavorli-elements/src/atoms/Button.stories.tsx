import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from './Button';

const Text = () => <Button onClick={action('clicked')}>Click me</Button>;

storiesOf('Atoms', module).add('Button', () => <Text />);