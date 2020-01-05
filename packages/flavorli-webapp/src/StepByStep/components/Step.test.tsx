import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import Step from './Step';
import {StepByStepProvider} from '../helpers/StepByStepContext';

const setup = () => {
  return {
    ...render(
      <>
        {/* Add a div with id recipe-steps to be used by aria-controls */}
        <div id="recipe-steps" />
        <StepByStepProvider initialValues={{noOfSteps: 10}}>
          <Step>children</Step>
        </StepByStepProvider>
      </>,
    ),
  };
};

describe('Step', () => {
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
