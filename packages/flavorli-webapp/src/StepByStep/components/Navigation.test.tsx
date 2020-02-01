import React from 'react';
import {axe} from 'jest-axe';
import {renderWithRouter} from '../../helpers/test-helpers';
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
    ...renderWithRouter(
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

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should allow the user to navigate to the next step ', () => {
    const {getByText} = setup({customCurrentStep: 1});
    const nextStepButton = getByText(/Next/i);

    userEvent.click(nextStepButton);

    getByText(/Ingredients/i);
  });

  it('should allow the user to navigate to the previous step ', () => {
    const {getByText} = setup({customCurrentStep: 2});
    const backButton = getByText(/back/i);

    userEvent.click(backButton);

    getByText(/Next/i);
  });

  it('should have a next button with aria-controls set to "recipe-steps" to inform assistive technology users that it controls which step is displayed', () => {
    const {getByText} = setup();

    const nextStepButton = getByText(/Next/i);

    expect(nextStepButton).toHaveAttribute('aria-controls', 'recipe-steps');
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

  it('it should hide the back button when the current step is the first', () => {
    const {getByText} = setup();
    expect(getByText(/back/i)).not.toBeVisible();
    expect(getByText(/back/i)).toHaveAttribute('tabIndex', '-1');
  });

  it('it should display a close button when isDialog is true', () => {
    const {getByText} = setup({isDialog: true});
    getByText(/close/i);
  });

  it("should have a next button with the name 'Next' when the currentStep is 1", () => {
    const {getByText} = setup();

    getByText(/Next/i);
  });

  it("should have a next button with the name 'Ingredients' when the currentStep is 2", () => {
    const {getByText} = setup({customCurrentStep: 2});

    getByText(/Ingredients/i);
  });

  it("should have a next button with the name 'Items' when the currentStep is 3", () => {
    const {getByText} = setup({customCurrentStep: 3});

    getByText(/Items/i);
  });

  it("should have a next button with the name 'Preparation' when the currentStep is 4", () => {
    const {getByText} = setup({customCurrentStep: 4});

    getByText(/Preparation/i);
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
