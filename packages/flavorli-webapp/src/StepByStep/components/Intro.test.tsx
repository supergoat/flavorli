import React from 'react';
import {renderWithRouter} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import IntroStep from './IntroStep';
import {recipes} from '../mockData';
import {StepByStepProvider} from '../stepByStepContext';

const setup = () => {
  const recipe = recipes[0];
  return renderWithRouter(
    <>
      {/* Add a div with id recipe-steps to be used by aria-controls */}
      <div id="recipe-steps" />
      <StepByStepProvider initialValues={{noOfSteps: 10}}>
        <IntroStep
          author={recipe.author}
          name={recipe.name}
          image={recipe.image}
          preparationTime={recipe.preparationTime}
          cookingTime={recipe.cookingTime}
          portions={recipe.portions}
          difficulty={recipe.difficulty}
        />
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
