import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import IntroStep from './IntroStep';
import {introStep} from '../mockData';
import {StepByStepProvider} from '../stepByStepContext';

const setup = () => {
  return render(
    <>
      {/* Add a div with id recipe-steps to be used by aria-controls */}
      <div id="recipe-steps" />
      <StepByStepProvider initialValues={{noOfSteps: 10}}>
        <IntroStep step={introStep} />
      </StepByStepProvider>
    </>,
  );
};

describe('IntroStep', () => {
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
