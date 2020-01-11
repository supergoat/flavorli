import React from 'react';
import {renderWithRouter} from './helpers/test-helpers';
import {axe} from 'jest-axe';
import App from './App';

describe('App', () => {
  it('should not have any axe violations', async () => {
    const {container} = renderWithRouter(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = renderWithRouter(<App />);
    expect(container).toMatchSnapshot();
  });
});
