import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../helpers/test-helpers';
import StepByStep from '.';
import userEvent from '@testing-library/user-event';

import {steps} from './mockData';
import {IStep} from './types';
import {act} from 'react-dom/test-utils';
import {prettyDOM, wait} from '@testing-library/react';

const setup = (customSteps?: IStep[]) => {
  return render(<StepByStep steps={customSteps || steps} />);
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

  it('should render the first step', () => {
    const step1 = steps[0];
    const {queryByLabelText} = setup();

    expect(
      queryByLabelText(`Step ${step1.no} of ${steps.length}`),
    ).toBeInTheDocument();
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

  it('should open Step from the step link in dialog when clicking View Step button', () => {
    const step1 = steps[0];
    // Step 7 has a link that points to step one
    const step7 = steps[7];

    const {getByLabelText, getByText} = setup([step1, step7]);

    const continueButton = getByText(/continue/i);

    // Click continue button to go the second step to find view button
    userEvent.click(continueButton);

    const viewStepButton = getByText('View Step');

    userEvent.click(viewStepButton);

    getByLabelText('Step 1 of 2');
  });

  it('close the dialog and return to previous step when clicking close button inside the dialog', () => {
    const step1 = steps[0];
    // Step 8 has a link that points to step one
    const step8 = steps[7];

    const {getByLabelText, getByText} = setup([step1, step8]);

    const continueButton = getByText(/continue/i);

    // Click continue button to go the second step to find view button
    userEvent.click(continueButton);

    const viewStepButton = getByText('View Step');

    userEvent.click(viewStepButton);

    const closeButton = getByText(/close/i);

    userEvent.click(closeButton);

    getByLabelText('Step 8 of 2');
  });

  // it('closing the dialog should return focus to the element that opened the dialog', () => {
  //   const step1 = steps[0];
  //   // Step 8 has a link that points to step one
  //   const step8 = steps[7];

  //   const {getByText} = setup([step1, step8]);

  //   const continueButton = getByText(/continue/i);

  //   // Click continue button to go the second step to find view button
  //   userEvent.click(continueButton);

  //   const viewStepButton = getByText('View Step');

  //   userEvent.click(viewStepButton);

  //   const closeButton = getByText(/close/i);
  //   userEvent.click(closeButton);

  //   expect(getByText('View Step')).toHaveFocus();
  // });
});
