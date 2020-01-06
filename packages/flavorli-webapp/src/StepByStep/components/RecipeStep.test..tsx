import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import RecipeStep from './RecipeStep';
import {recipeSteps} from '../helpers/mockData';
import {StepByStepProvider} from '../helpers/StepByStepContext';

const setup = () => {
  const step = recipeSteps[0];
  return render(
    <>
      {/* Add a div with id recipe-steps to be used by aria-controls */}
      <div id="recipe-steps" />
      <StepByStepProvider initialValues={{noOfSteps: 10}}>
        <RecipeStep step={step} />
      </StepByStepProvider>
    </>,
  );
};

describe('RecipeStep', () => {
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
