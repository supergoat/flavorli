import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import Navigation from './Navigation';
import userEvent from '@testing-library/user-event';

const setup = ({
  nextButtonName,
  previousButtonName,
  hideNextStepButton = false,
  hidePreviousStepButton = false,
}: {
  nextButtonName?: string;
  previousButtonName?: string;
  hideNextStepButton?: boolean;
  hidePreviousStepButton?: boolean;
} = {}) => {
  const mockOnNavigate = jest.fn();

  return {
    ...render(
      <>
        {/* Add a div with id recipe-steps to be used by aria-controls */}
        <div id="recipe-steps" />
        <Navigation
          nextButtonName={nextButtonName}
          previousButtonName={previousButtonName}
          onNavigate={mockOnNavigate}
          hideNextStepButton={hideNextStepButton}
          hidePreviousStepButton={hidePreviousStepButton}
        />
      </>,
    ),
    mockOnNavigate,
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
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a nextStep button with aria-controls set to "recipe-steps" to inform assistive technology users that it controls which step is displayed', () => {
    const {getByText} = setup();

    const nextStepButton = getByText(/Next Step/i);

    expect(nextStepButton).toHaveAttribute('aria-controls', 'recipe-steps');
  });

  it('should have an accessible label on the nextStep button to inform assistive technology users that clicking the button takes them to the next step', () => {
    const {getByText} = setup();

    const nextStepButton = getByText(/Next Step/i);

    expect(nextStepButton).toHaveAttribute('aria-label', 'Next Step');
  });

  it('should accept a custom name for the next button', () => {
    const {getByText} = setup({nextButtonName: 'Continue'});

    getByText(/Continue/i);
  });

  it('clicking the nextStep button calls onNavigate with 1', () => {
    const {getByText, mockOnNavigate} = setup();

    const nextStepButton = getByText(/Next Step/i);

    userEvent.click(nextStepButton);

    expect(mockOnNavigate).toHaveBeenCalledWith(1);
  });

  it('it should hide the nextStep button when hideNextStepButton is set to true', () => {
    const {queryByText} = setup({hideNextStepButton: true});
    expect(queryByText('Next Step')).toBeNull();
  });

  it('should have a previous button with aria-controls set to "recipe-steps" to inform assistive technology users that it controls which step is displayed', () => {
    const {getByText} = setup();

    const previousStepButton = getByText(/Previous Step/i);

    expect(previousStepButton).toHaveAttribute('aria-controls', 'recipe-steps');
  });

  it('should have an accessible label on the previous button to inform assistive technology users that clicking the button takes them to the previous step', () => {
    const {getByText} = setup();

    const previousStepButton = getByText(/Previous Step/i);

    expect(previousStepButton).toHaveAttribute('aria-label', 'Previous Step');
  });

  it('should accept a custom name for the previous button', () => {
    const {getByText} = setup({previousButtonName: 'Back'});

    getByText(/Back/i);
  });

  it('clicking the previous button calls onNavigate with -1', () => {
    const {getByText, mockOnNavigate} = setup();

    const previousStepButton = getByText(/Previous Step/i);

    userEvent.click(previousStepButton);

    expect(mockOnNavigate).toHaveBeenCalledWith(-1);
  });

  it('it should hide the previous button when hidePreviousStepButton is set to true', () => {
    const {getByText} = setup({hidePreviousStepButton: true});
    expect(getByText(/Previous Step/i)).not.toBeVisible();
    expect(getByText(/Previous Step/i)).toHaveAttribute('tabIndex', '-1');
  });
});
