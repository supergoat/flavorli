import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import StepList from './StepList';
import {StepByStepProvider} from '../helpers/StepByStepContext';

export const items = [
  {id: '1', text: 'Step 1'},
  {id: '2', text: 'Step 2'},
  {id: '2', text: 'Step 3'},
];
export const steps = items.map(item => <div key="">{item.text}</div>);

const setup = (currentStep?: number) => {
  return render(
    <StepByStepProvider initialValues={{noOfSteps: 10}}>
      <StepList>{steps}</StepList>
    </StepByStepProvider>,
  );
};

describe('StepList', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have aria-live set to polite to inform assistive technology users when the step displayed changes, at the next available opportunity', () => {
    const {getByTestId} = setup();
    expect(getByTestId('recipe-steps')).toHaveAttribute('aria-live', 'polite');
  });

  // it('should have a role of group to enable assistive technology users to preceive the boundaries of a step', () => {
  //   const {getByRole} = setup();
  //   getByRole('group');
  // });

  // it('should have an aria-label to indicate to assistive technology users the step they are on', () => {
  //   const {getByLabelText} = setup();
  //   getByLabelText(`Step 1 of 2`);
  // });
});
