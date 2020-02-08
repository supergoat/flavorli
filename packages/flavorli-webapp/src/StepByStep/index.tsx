import React from 'react';
import styled from 'styled-components';
import {useTrapFocus, Stack, Button, H3, Text} from '@flavorli/elements';
import StepList from './components/StepList';
import RecipeStep from './components/RecipeStep';
import Timers from './components/Timers';
import {RecipeTimersProvider} from './timersContext';

import IntroStep from './components/IntroStep';
import MiseEnPlace from './components/MiseEnPlace';
import NextUp from './components/NextUp';

import IngredientsStep from './components/IngredientsStep';
import ItemsStep from './components/ItemsStep';
import {StepByStepProvider} from './stepByStepContext';
import useFetchStepByStepRecipe from './useFetchStepByStepRecipe';

const StepByStep = () => {
  const refEl = React.useRef<HTMLDivElement>(null);
  useTrapFocus(refEl);

  const {loading, error, recipe} = useFetchStepByStepRecipe();

  let miseEnPlaceSteps: React.ReactElement[] = [];
  let preparationSteps: React.ReactElement[] = [];

  recipe?.steps.map((step, index) => {
    if (step.type === 'MISE_EN_PLACE') {
      miseEnPlaceSteps.push(<RecipeStep key={`${index}-step`} step={step} />);
    } else {
      preparationSteps.push(<RecipeStep key={`${index}-step`} step={step} />);
    }
  });

  return (
    <DialogWrapper ref={refEl}>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {recipe && (
        <RecipeTimersProvider recipeId={recipe.id}>
          <StepByStepProvider
            initialValues={{
              noOfSteps: 5 + recipe.steps.length,
            }}
          >
            <Stack width="100%" height="100%">
              <Timers />
              <Section
                aria-label="List of recipe steps"
                id="list-of-recipe-steps"
              >
                <StepList>
                  <IntroStep
                    author={recipe.author}
                    name={recipe.name}
                    image={recipe.image}
                    preparationTime={recipe.preparationTime}
                    cookingTime={recipe.cookingTime}
                    portions={recipe.portions}
                    difficulty={recipe.difficulty}
                  />

                  <NextUp heading="Mise En Place">
                    <MiseEnPlace />
                  </NextUp>

                  <IngredientsStep ingredients={recipe.ingredients} />
                  <ItemsStep items={recipe.items} />

                  {miseEnPlaceSteps}

                  <NextUp heading="Preparation" />

                  {preparationSteps}
                </StepList>
              </Section>
            </Stack>
          </StepByStepProvider>
        </RecipeTimersProvider>
      )}
    </DialogWrapper>
  );
};

export default StepByStep;

const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${p => p.theme.colors.backdropDark};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: calc(100% - 46px);
`;
