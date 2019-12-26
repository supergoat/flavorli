import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../helpers/test-helpers';
import StepByStep from '.';
import userEvent from '@testing-library/user-event';

import {steps} from './mockData';

const setup = () => {
  return render(<StepByStep steps={steps} />);
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

  it('should have a continue button that when clicked hides the current step and brings the next step into view', () => {
    const step1 = steps[0];
    const step2 = steps[1];
    const {queryByLabelText, getByText} = setup();
    expect(
      queryByLabelText(`Step ${step1.no} of ${steps.length}`),
    ).toBeInTheDocument();

    const continueButton = getByText(/continue/i);

    userEvent.click(continueButton);

    expect(
      queryByLabelText(`Step ${step2.no} of ${steps.length}`),
    ).toBeInTheDocument();

    expect(
      queryByLabelText(`Step ${step1.no} of ${steps.length}`),
    ).not.toBeInTheDocument();
  });

  it('should have a previous button that when clicked hides the current steps and brings the previous step into view', () => {
    const step1 = steps[0];
    const step2 = steps[1];
    const {queryByLabelText, getByText} = setup();

    const continueButton = getByText(/continue/i);

    userEvent.click(continueButton);

    expect(
      queryByLabelText(`Step ${step2.no} of ${steps.length}`),
    ).toBeInTheDocument();

    const previousButton = getByText(/previous/i);

    userEvent.click(previousButton);

    expect(
      queryByLabelText(`Step ${step1.no} of ${steps.length}`),
    ).toBeInTheDocument();

    expect(
      queryByLabelText(`Step ${step2.no} of ${steps.length}`),
    ).not.toBeInTheDocument();
  });
});
