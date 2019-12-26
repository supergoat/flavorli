import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import StepList from './StepList';

export const items = [
  {id: '1', text: 'Step 1'},
  {id: '2', text: 'Step 2'},
  {id: '2', text: 'Step 3'},
];
export const steps = items.map(item => <div key="">{item.text}</div>);

const setup = (currentStep?: number) => {
  return render(<StepList currentStep={currentStep || 1}>{steps}</StepList>);
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

  it('should display only one step at a time', async () => {
    const [item1, ...restItems] = items;
    const {queryByText} = setup();
    expect(queryByText(item1.text)).toBeInTheDocument();

    restItems.forEach(item =>
      expect(queryByText(item.text)).not.toBeInTheDocument(),
    );
  });

  it('should display the step specified by currentStep', () => {
    const item2 = items[1];
    const {queryByText} = setup(2);
    expect(queryByText(item2.text)).toBeInTheDocument();
  });
});
