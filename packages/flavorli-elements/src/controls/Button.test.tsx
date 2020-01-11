import React from 'react';
import {render} from '../test-helpers';
import {axe} from 'jest-axe';
import {Button} from './Button';

it('should not have any axe violations', async () => {
  const {container} = render(<Button>Hello World</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it('should have display the default button', () => {
  const {container} = render(<Button>Hello World</Button>);
  expect(container).toMatchSnapshot();
});
