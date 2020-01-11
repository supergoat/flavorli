import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Kitchenware from './Kitchenware';
import {kitchenware} from '../mockData';

const setup = () => {
  return render(<Kitchenware kitchenware={kitchenware} />);
};
describe('Kitchenware', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should render an empty div if the kitchenware are an empty array', () => {
    const {container} = render(<Kitchenware kitchenware={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
