import React from 'react';
import {axe} from 'jest-axe';
import {renderWithRelayAndRouter} from '../helpers/test-helpers';
import StepByStep from '.';
import userEvent from '@testing-library/user-event';
import {recipes} from './mockData';

jest.mock('./useFetchStepByStepRecipe', () => {
  const {recipes} = require('./mockData');

  return () => ({
    loading: false,
    error: '',
    recipe: recipes[0],
  });
});

const setup = () => {
  return renderWithRelayAndRouter(<StepByStep />);
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
    const {queryByLabelText, getByText} = setup();
    const {steps} = recipes[0];

    const noOfSteps = 4 + steps.length;

    expect(queryByLabelText(`Step 1 of ${noOfSteps}`)).not.toBeNull();

    const nextButton = getByText(/next/i);

    userEvent.click(nextButton);

    expect(queryByLabelText(`Step 2 of ${noOfSteps}`)).not.toBeNull();

    expect(queryByLabelText(`Step 1 of ${noOfSteps}`)).toBeNull();
  });

  it('should have a back button that when clicked hides the current step and brings the previous step into view', () => {
    const {queryByLabelText, getByText} = setup();
    const {steps} = recipes[0];

    const noOfSteps = 4 + steps.length;

    // Go to the second page, to enable us to test the back button
    const nextButton = getByText(/next/i);
    userEvent.click(nextButton);

    expect(queryByLabelText(`Step 2 of ${noOfSteps}`)).not.toBeNull();

    const goToIngredientsButton = getByText(/back/i);

    userEvent.click(goToIngredientsButton);

    expect(queryByLabelText(`Step 1 of ${noOfSteps}`)).not.toBeNull();

    expect(queryByLabelText(`Step 2 of ${noOfSteps}`)).toBeNull();
  });
});
