import React from 'react';
import {renderWithRouter} from '../helpers/test-helpers';
import {axe} from 'jest-axe';
import Home from './index';

describe('Home', () => {
  it('should not have any axe violations', async () => {
    const {container} = renderWithRouter(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = renderWithRouter(<Home />);
    expect(container).toMatchSnapshot();
  });
});
