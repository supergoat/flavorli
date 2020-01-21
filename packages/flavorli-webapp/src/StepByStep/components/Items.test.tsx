import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Items from './Items';
import {items} from '../mockData';

const setup = () => {
  return render(<Items items={items} />);
};
describe('Items', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should render an empty div if the items are an empty array', () => {
    const {container} = render(<Items items={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
