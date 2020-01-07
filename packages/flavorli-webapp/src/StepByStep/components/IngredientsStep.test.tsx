import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import IngredientsStep from './IngredientsStep';
import {ingredients} from '../helpers/mockData';
import {StepByStepProvider} from '../helpers/stepByStepContext';

const setup = () => {
  return render(
    <>
      {/* Add a div with id recipe-steps to be used by aria-controls */}
      <div id="recipe-steps" />
      <StepByStepProvider initialValues={{noOfSteps: 10}}>
        <IngredientsStep ingredients={ingredients} />
      </StepByStepProvider>
    </>,
  );
};
describe('IngredientsStep', () => {
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
