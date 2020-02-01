import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import StepDialog from './StepDialog';
import {RecipeTimersProvider} from '../timersContext';
import {StepByStepProvider} from '../stepByStepContext';

const setup = () => {
  return {
    ...render(
      <RecipeTimersProvider>
        <StepByStepProvider initialValues={{noOfSteps: 10}}>
          <StepDialog />
        </StepByStepProvider>
      </RecipeTimersProvider>,
    ),
  };
};

describe('StepDialog', () => {
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
