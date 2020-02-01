import React from 'react';
import {renderWithRelayAndRouter} from '../helpers/test-helpers';
import {axe} from 'jest-axe';
import Recipe from './index';
import userEvent from '@testing-library/user-event';

jest.mock('./useFetchRecipe', () => {
  const {recipes} = require('./mockData');

  return () => ({
    loading: false,
    error: '',
    recipe: recipes[0],
  });
});

describe('Recipe', () => {
  it('should not have any axe violations', async () => {
    const {container} = renderWithRelayAndRouter(<Recipe />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should use an article element to to indicate that the recipe could be consumed independently to the rest of the app', () => {
    const {getByRole} = renderWithRelayAndRouter(<Recipe />);
    getByRole('article');
  });

  it('should use a main to indicate to assistive technology users the primary content', () => {
    const {getByRole} = renderWithRelayAndRouter(<Recipe />);
    getByRole('main');
  });

  it('should navigate the user to step-by-step when the click on the Step By Step button', () => {
    const {getByText, history} = renderWithRelayAndRouter(<Recipe />);
    jest.spyOn(history, 'push');
    const stepByStepButton = getByText('Step By Step');
    userEvent.click(stepByStepButton);

    expect(history.push).toHaveBeenCalledWith('/step-by-step/1');
    expect(history.location.pathname).toEqual('/step-by-step/1');
  });

  it('should render correctly', () => {
    const {container} = renderWithRelayAndRouter(<Recipe />);
    expect(container).toMatchSnapshot();
  });
});
