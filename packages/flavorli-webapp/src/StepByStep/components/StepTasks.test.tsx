import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import StepTasks from './StepTasks';

const setup = () => {
  return {
    ...render(<StepTasks tasks={['Task 1', 'Task 2']} />),
  };
};

describe('StepTasks', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });
});
