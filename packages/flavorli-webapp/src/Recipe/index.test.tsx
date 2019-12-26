import React from 'react';
import {renderWithRouter} from '../helpers/test-helpers';
import {axe} from 'jest-axe';
import Recipe from './index';
import userEvent from '@testing-library/user-event';

describe('Recipe', () => {
  it('should not have any axe violations', async () => {
    const {container} = renderWithRouter(<Recipe />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should use an article element to to indicate that the recipe could be consumed independently to the rest of the app', () => {
    const {getByRole} = renderWithRouter(<Recipe />);
    getByRole('article');
  });

  it('should use a main to indicate to assistive technology users the primary content', () => {
    const {getByRole} = renderWithRouter(<Recipe />);
    getByRole('main');
  });

  it('should navigate the user to step-by-step when the click on the Step By Step button', () => {
    const {getByText, history} = renderWithRouter(<Recipe />);
    jest.spyOn(history, 'push');
    const stepByStepButton = getByText('Step By Step');
    userEvent.click(stepByStepButton);

    expect(history.push).toHaveBeenCalledWith('/step-by-step');
    expect(history.location.pathname).toEqual('/step-by-step');
  });

  it('should render correctly', () => {
    const {container} = renderWithRouter(<Recipe />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
