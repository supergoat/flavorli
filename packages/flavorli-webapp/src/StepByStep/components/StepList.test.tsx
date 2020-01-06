import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import StepList from './StepList';
import {StepByStepProvider} from '../helpers/StepByStepContext';
import {recipeSteps} from '../helpers/mockData';

const setup = () => {
  const steps = recipeSteps;
  return {
    ...render(
      <StepByStepProvider initialValues={{noOfSteps: 10}}>
        <StepList>
          {steps.map(step => (
            <div key={step.no}>{step.no}</div>
          ))}
        </StepList>
      </StepByStepProvider>,
    ),
    steps,
  };
};

describe('StepList', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should an id of recipe-steps that can be used by aria-controls', () => {
    const {getByTestId} = setup();
    getByTestId('recipe-steps');
  });

  it('should have aria-live set to polite to inform assistive technology users when the step displayed changes, at the next available opportunity', () => {
    const {getByTestId} = setup();
    expect(getByTestId('recipe-steps')).toHaveAttribute('aria-live', 'polite');
  });

  it('should render the first step when it loads', () => {
    const {queryByLabelText, steps} = setup();
    const step1 = steps[0];

    expect(
      queryByLabelText(`Step ${step1.no} of ${steps.length}`),
    ).toBeInTheDocument();
  });

  it('should add a role of group to each step to enable assistive technology users to preceive the boundaries of a step', () => {
    const {getByRole} = setup();

    getByRole('group');
  });

  it('should add an aria-label to each step to indicate to assistive technology users the step they are on', () => {
    const {getByLabelText, steps} = setup();
    getByLabelText(`Step 1 of ${steps.length}`);
  });

  it('should display only one step at a time', async () => {
    const {queryByLabelText, queryByText, steps} = setup();

    steps.forEach((step, index) => {
      const stepNo = index + 1;
      if (stepNo === 1) {
        expect(queryByLabelText(`Step 1 of ${steps.length}`)).not.toBeNull();
        expect(queryByText(`${step.no}`)).not.toBeNull();
      } else {
        expect(queryByText(`${step.no}`)).toBeNull();
        expect(
          queryByLabelText(`Step ${stepNo} of ${steps.length}`),
        ).toBeNull();
      }
    });
  });
});
