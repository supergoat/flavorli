import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Ingredients from './Ingredients';
import {ingredients} from '../mockData';

describe('Ingredients', () => {
  it('should not have any axe violations', async () => {
    const {container} = render(<Ingredients ingredients={ingredients} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = render(<Ingredients ingredients={ingredients} />);
    expect(container).toMatchSnapshot();
  });

  it('should render an empty div if the ingredients are an empty array', () => {
    const {container} = render(<Ingredients ingredients={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
