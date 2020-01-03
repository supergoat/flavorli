import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import Navigation from './Navigation';
import userEvent from '@testing-library/user-event';

const setup = ({
  nextButtonName,
  backButtonName,
  hideNextStepButton = false,
  hideBackButton = false,
  varation,
}: {
  nextButtonName?: string;
  backButtonName?: string;
  hideNextStepButton?: boolean;
  hideBackButton?: boolean;
  varation?: 'onPrimary';
} = {}) => {
  const mockOnNavigate = jest.fn();

  return {
    ...render(
      <>
        {/* Add a div with id recipe-steps to be used by aria-controls */}
        <div id="recipe-steps" />
        <Navigation
          nextButtonName={nextButtonName}
          backButtonName={backButtonName}
          onNavigate={mockOnNavigate}
          hideNextStepButton={hideNextStepButton}
          hideBackButton={hideBackButton}
          varation={varation}
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
    expect(container).toMatchSnapshot();
  });

  it('should have a next button with aria-controls set to "recipe-steps" to inform assistive technology users that it controls which step is displayed', () => {
    const {getByText} = setup();

    const nextStepButton = getByText(/Next/i);

    expect(nextStepButton).toHaveAttribute('aria-controls', 'recipe-steps');
  });

  it('should accept a custom name for the next button', () => {
    const {getByText} = setup({nextButtonName: 'Continue'});

    getByText(/Continue/i);
  });

  it('clicking the nextStep button calls onNavigate with 1', () => {
    const {getByText, mockOnNavigate} = setup();

    const nextStepButton = getByText(/Next/i);

    userEvent.click(nextStepButton);

    expect(mockOnNavigate).toHaveBeenCalledWith(1);
  });

  it('it should hide the nextStep button when hideNextStepButton is set to true', () => {
    const {queryByText} = setup({hideNextStepButton: true});
    expect(queryByText('Next')).toBeNull();
  });

  it('should have a back button with aria-controls set to "recipe-steps" to inform assistive technology users that it controls which step is displayed', () => {
    const {getByText} = setup();

    const backButton = getByText(/back/i);

    expect(backButton).toHaveAttribute('aria-controls', 'recipe-steps');
  });

  it('should accept a custom name for the back button', () => {
    const {getByText} = setup({backButtonName: 'previous'});

    getByText(/previous/i);
  });

  it('clicking the back button calls onNavigate with -1', () => {
    const {getByText, mockOnNavigate} = setup();

    const backButton = getByText(/back/i);

    userEvent.click(backButton);

    expect(mockOnNavigate).toHaveBeenCalledWith(-1);
  });

  it('it should hide the back button when hideBackButton is set to true', () => {
    const {getByText} = setup({hideBackButton: true});
    expect(getByText(/back/i)).not.toBeVisible();
    expect(getByText(/back/i)).toHaveAttribute('tabIndex', '-1');
  });

  it('should render correctly when variation is onPrimary', () => {
    const {container} = setup({
      varation: 'onPrimary',
    });

    expect(container).toMatchSnapshot();
  });
});
