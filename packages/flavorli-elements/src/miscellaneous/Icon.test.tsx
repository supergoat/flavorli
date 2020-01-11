import React from 'react';
import {render} from '../test-helpers';
import {axe} from 'jest-axe';
import {Icon} from './Icon';

it('should not have any axe violations', async () => {
  const {container} = render(<Icon name="difficulty" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

it('should display the icon that matches the icon name', () => {
  const {container} = render(<Icon name="difficulty" />);
  expect(container).toMatchSnapshot();
});

it('should change the icon size to the desired size', () => {
  const {container} = render(<Icon name="difficulty" size="40px" />);
  expect(container).toMatchSnapshot();
});
