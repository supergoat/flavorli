import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Kitchenware from './Kitchenware';
import {steps} from '../helpers/mockData';

describe('Kitchenware', () => {
  it('should not have any axe violations', async () => {
    const {container} = render(
      <Kitchenware kitchenware={steps[0].kitchenware} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = render(
      <Kitchenware kitchenware={steps[0].kitchenware} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an empty div if the kitchenware are an empty array', () => {
    const {container} = render(<Kitchenware kitchenware={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
