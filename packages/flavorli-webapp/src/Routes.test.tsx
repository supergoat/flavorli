import React from 'react';
import {renderWithRouter} from './helpers/test-helpers';
import {axe} from 'jest-axe';
import Routes from './Routes';

describe('Routes', () => {
  it('should not have any axe violations', async () => {
    const {container} = renderWithRouter(<Routes />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render the recipe page', () => {
    const {history} = renderWithRouter(<Routes />, '/recipe');
    expect(history.location.pathname).toMatch('/recipe');
  });

  it('should render the step-by-step page', () => {
    const {history} = renderWithRouter(<Routes />, '/step-by-step');
    expect(history.location.pathname).toMatch('/step-by-step');
  });
});
