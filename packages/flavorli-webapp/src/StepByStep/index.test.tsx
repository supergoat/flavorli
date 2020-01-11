import React from 'react';
import {axe} from 'jest-axe';
import {renderWithRouter} from '../helpers/test-helpers';
import StepByStep from '.';
import userEvent from '@testing-library/user-event';

import {stepByStep} from './mockData';

const setup = () => {
  return {
    ...renderWithRouter(<StepByStep />),
    stepByStep,
  };
};
describe('StepByStep', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should use a section element to designate stepByStep as land mark region, with an aria-lable to describe its content', () => {
    const {getByLabelText} = setup();
    const section = getByLabelText('List of recipe steps');

    expect(section.tagName).toEqual('SECTION');
  });

  it('should have a next button that when clicked hides the current step and brings the next step into view', () => {
    const {queryByLabelText, getByText, stepByStep} = setup();
    const {preparationSteps, recipeSteps} = stepByStep;

    const noOfSteps = 3 + preparationSteps.length + recipeSteps.length;

    expect(queryByLabelText(`Step 1 of ${noOfSteps}`)).not.toBeNull();

    const nextButton = getByText(/ingredients/i);

    userEvent.click(nextButton);

    expect(queryByLabelText(`Step 2 of ${noOfSteps}`)).not.toBeNull();

    expect(queryByLabelText(`Step 1 of ${noOfSteps}`)).toBeNull();
  });

  it('should have a back button that when clicked hides the current step and brings the previous step into view', () => {
    const {queryByLabelText, getByText, stepByStep} = setup();
    const {preparationSteps, recipeSteps} = stepByStep;

    const noOfSteps = 3 + preparationSteps.length + recipeSteps.length;

    // Go to the second page, to enable us to test the back button
    const nextButton = getByText(/ingredients/i);
    userEvent.click(nextButton);

    expect(queryByLabelText(`Step 2 of ${noOfSteps}`)).not.toBeNull();

    const goToIngredientsButton = getByText(/back/i);

    userEvent.click(goToIngredientsButton);

    expect(queryByLabelText(`Step 1 of ${noOfSteps}`)).not.toBeNull();

    expect(queryByLabelText(`Step 2 of ${noOfSteps}`)).toBeNull();
  });
});
