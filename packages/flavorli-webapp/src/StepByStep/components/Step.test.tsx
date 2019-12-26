import React from 'react';
import {axe} from 'jest-axe';
import userEvent from '@testing-library/user-event';
import {render} from '../../helpers/test-helpers';
import Step from './Step';
import {steps} from '../mockData';

const setup = () => {
  const mockOnChangeStep = jest.fn();
  const step = steps[0];
  return {
    ...render(<Step step={step} onChangeStep={mockOnChangeStep} />),
    step,
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

  it('should have an aria-label to indicate to assistive technology users the slide they are on', () => {
    const {getByLabelText, step} = setup();
    getByLabelText(`Step ${step.no}`);
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
});
