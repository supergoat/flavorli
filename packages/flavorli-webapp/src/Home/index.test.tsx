import React from 'react';
import {renderWithRelayAndRouter} from '../helpers/test-helpers';
import {axe} from 'jest-axe';
import Home from './index';

jest.mock('./useFetchRecipeList', () => {
  const {recipes} = require('./mockData');

  return () => ({
    loading: false,
    error: '',
    recipes: recipes,
  });
});

describe('Home', () => {
  it('should not have any axe violations', async () => {
    const {container} = renderWithRelayAndRouter(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = renderWithRelayAndRouter(<Home />);
    expect(container).toMatchSnapshot();
  });
});
