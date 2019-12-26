import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Ingredient from './Ingredient';

const setup = () => {
  return render(<Ingredient ingredient={{qty: '1 cup', name: 'flour'}} />);
};

describe('Ingredient', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container.firstChild).toMatchSnapshot();
  });
});
