import React from 'react';
import {axe} from 'jest-axe';
import userEvent from '@testing-library/user-event';
import {render} from '../../helpers/test-helpers';
import PreparationStep from './PreparationStep';
import {steps} from '../helpers/mockData';
import {TimersProvider} from '../helpers/timersContext';

const setup = ({
  stepNo,
  isDialog,
}: {stepNo?: number; isDialog?: boolean} = {}) => {
  const mockOnClose = jest.fn();
  const mockOnChangeStep = jest.fn();
  const step = stepNo ? steps[stepNo - 1] : steps[0];
  const noOfSteps = steps.length;

  const timers = step.timer
    ? {[step.timer.id]: {...step.timer, isPaused: true}}
    : [];
  return {
    ...render(
      <TimersProvider
        initialValues={{
          ...timers,
        }}
      >
        {/* Add a div with id recipe-steps to be used by aria-controls */}
        <div id="recipe-steps" />
        <PreparationStep
          isDialog={isDialog}
          step={step}
          onViewStep={jest.fn()}
          onChangeStep={mockOnChangeStep}
          onClose={mockOnClose}
          noOfSteps={noOfSteps}
        />
      </TimersProvider>,
    ),
    step,
    noOfSteps,
    mockOnChangeStep,
    mockOnClose,
  };
};

describe('PreparationStep', () => {
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

  it('it should hide the next button when the current step is the last step', () => {
    const {queryByText} = setup({stepNo: steps.length});
    expect(queryByText(/next/i)).toBeNull();
  });

  it('should hide the back and next buttons when the step is a dialog', () => {
    const {queryByText} = setup({isDialog: true});
    expect(queryByText(/back/i)).not.toBeInTheDocument();
    expect(queryByText(/next/i)).not.toBeInTheDocument();
  });

  it('should have a close button when the step is a dialog', () => {
    const {getByText} = setup({isDialog: true});
    getByText(/close/i);
  });

  it('should call onClose when the close button is clicked', () => {
    const {getByText, mockOnClose} = setup({isDialog: true});
    const closeButton = getByText(/close/i);

    userEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
