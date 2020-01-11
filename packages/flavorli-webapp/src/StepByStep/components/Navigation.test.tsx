import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import Navigation from './Navigation';
import * as StepByStepContext from '../stepByStepContext';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

const setup = ({
  customCurrentStep,
  isDialog,
}: {customCurrentStep?: number; isDialog?: boolean} = {}) => {
  const currentStep = customCurrentStep || 1;
  return {
    ...render(
      <>
        {/* Add a div with id recipe-steps to be used by aria-controls */}
        <div id="recipe-steps" />
        <StepByStepContext.StepByStepProvider
          initialValues={{noOfSteps: 10, currentStep}}
        >
          <Navigation isDialog={isDialog} />
        </StepByStepContext.StepByStepProvider>
      </>,
    ),
  };
};

describe('Navigation', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly when the current step is 1', () => {
    const {container} = setup({customCurrentStep: 1});
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when the current step is 2', () => {
    const {container} = setup({customCurrentStep: 2});
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when the current step is 3', () => {
    const {container} = setup({customCurrentStep: 3});
    expect(container).toMatchSnapshot();
  });

  it('should have a next button with aria-controls set to "recipe-steps" to inform assistive technology users that it controls which step is displayed', () => {
    const {getByText} = setup({customCurrentStep: 4});

    const nextStepButton = getByText(/Next/i);

    expect(nextStepButton).toHaveAttribute('aria-controls', 'recipe-steps');
  });

  it("should have a next button with the name 'Ingredients' when the currentStep is 1", () => {
    const {getByText} = setup({customCurrentStep: 1});

    getByText(/Ingredients/i);
  });

  it("should have a next button with the name 'Items' when the currentStep is 1", () => {
    const {getByText} = setup({customCurrentStep: 2});

    getByText(/Items/i);
  });

  it("should have a next button with the name 'Preparation' when the currentStep is 1", () => {
    const {getByText} = setup({customCurrentStep: 3});

    getByText(/Preparation/i);
  });

  it('clicking the nextStep button calls onNavigate with 1', () => {
    const mockUseStepsContentReturnValue = {
      currentDialogStep: 1,
      currentStep: 4,
      noOfSteps: 10,
      onNavigate: jest.fn(),
      onCloseDialogStep: jest.fn(),
      onOpenDialogStep: jest.fn(),
    };

    jest
      .spyOn(StepByStepContext, 'useStepByStepContext')
      .mockImplementationOnce(() => mockUseStepsContentReturnValue);

    const {getByText} = setup({customCurrentStep: 4});

    const nextStepButton = getByText(/Next/i);

    userEvent.click(nextStepButton);

    expect(mockUseStepsContentReturnValue.onNavigate).toHaveBeenCalledWith(1);
  });

  it('it should hide the nextStep button when the current step is the last step ', () => {
    const {queryByText} = setup({customCurrentStep: 10});
    expect(queryByText('Next')).toBeNull();
  });

  it('should have a back button with aria-controls set to "recipe-steps" to inform assistive technology users that it controls which step is displayed', () => {
    const {getByText} = setup();

    const backButton = getByText(/back/i);

    expect(backButton).toHaveAttribute('aria-controls', 'recipe-steps');
  });

  it('clicking the nextStep button calls onNavigate with -1', () => {
    const mockUseStepsContentReturnValue = {
      currentDialogStep: 1,
      currentStep: 4,
      noOfSteps: 10,
      onNavigate: jest.fn(),
      onCloseDialogStep: jest.fn(),
      onOpenDialogStep: jest.fn(),
    };

    jest
      .spyOn(StepByStepContext, 'useStepByStepContext')
      .mockImplementationOnce(() => mockUseStepsContentReturnValue);

    const {getByText} = setup({customCurrentStep: 4});

    const backButton = getByText(/back/i);

    userEvent.click(backButton);

    expect(mockUseStepsContentReturnValue.onNavigate).toHaveBeenCalledWith(-1);
  });

  it('it should hide the back button when the current step is the first', () => {
    const {getByText} = setup();
    expect(getByText(/back/i)).not.toBeVisible();
    expect(getByText(/back/i)).toHaveAttribute('tabIndex', '-1');
  });

  it('it should display a close button when isDialog is true', () => {
    const {getByText} = setup({isDialog: true});
    getByText(/close/i);
  });

  it('clicking the close button calls onCloseDialogStep', () => {
    const mockUseStepsContentReturnValue = {
      currentDialogStep: 1,
      currentStep: 4,
      noOfSteps: 10,
      onNavigate: jest.fn(),
      onCloseDialogStep: jest.fn(),
      onOpenDialogStep: jest.fn(),
    };

    jest
      .spyOn(StepByStepContext, 'useStepByStepContext')
      .mockImplementationOnce(() => mockUseStepsContentReturnValue);

    const {getByText} = setup({isDialog: true});

    const closeButton = getByText(/close/i);

    userEvent.click(closeButton);

    expect(mockUseStepsContentReturnValue.onCloseDialogStep).toHaveBeenCalled();
  });
});
