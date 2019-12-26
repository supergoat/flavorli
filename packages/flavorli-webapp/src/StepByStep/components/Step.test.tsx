import React from 'react';
import {axe} from 'jest-axe';
import userEvent from '@testing-library/user-event';
import {render} from '../../helpers/test-helpers';
import Step from './Step';
import {steps} from '../mockData';

const setup = (stepNo?: number) => {
  const mockOnChangeStep = jest.fn();
  const step = stepNo ? steps[stepNo - 1] : steps[0];
  const noOfSteps = steps.length + 1;

  return {
    ...render(
      <Step
        step={step}
        onChangeStep={mockOnChangeStep}
        noOfSteps={noOfSteps}
      />,
    ),
    step,
    noOfSteps,
    mockOnChangeStep,
  };
};
describe('Step', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a role of group to enable assistive technology users to preceive the boundaries of a step', () => {
    const {getByRole} = setup();
    getByRole('group');
  });

  it('should have an aria-label to indicate to assistive technology users the step they are on', () => {
    const {getByLabelText, step, noOfSteps} = setup();
    getByLabelText(`Step ${step.no} of ${noOfSteps}`);
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a continue button that calls onChangeStep with 1 when clicked', () => {
    const {getByText, mockOnChangeStep} = setup();

    const continueButton = getByText(/continue/i);

    userEvent.click(continueButton);

    expect(mockOnChangeStep).toHaveBeenCalledWith(1);
  });

  it('it should hide the continue button when the current step is the last step', () => {
    const {queryByText} = setup(steps.length);
    expect(queryByText('continue')).toBeNull();
  });

  it('should have a previous button that calls onChangeStep with -1 when clicked', () => {
    const {getByText, mockOnChangeStep} = setup(2);

    const previousButton = getByText(/previous/i);

    userEvent.click(previousButton);

    expect(mockOnChangeStep).toHaveBeenCalledWith(-1);
  });

  it('it should hide the previous button when the current step is the first step', () => {
    const {getByText} = setup(1);
    expect(getByText(/previous/i)).not.toBeVisible();
  });
});
