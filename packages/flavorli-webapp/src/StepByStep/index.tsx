import React from 'react';
import styled from 'styled-components';
import {useTrapFocus, Stack} from '@flavorli/elements';
import StepList from './components/StepList';
import RecipeStep from './components/RecipeStep';
import Timers from './components/Timers';
import {TimersProvider} from './timersContext';

import RunTimers from './components/RunTimers';
import IntroStep from './components/IntroStep';
import MiseEnPlace from './components/MiseEnPlace';
import IngredientsStep from './components/IngredientsStep';
import ItemsStep from './components/ItemsStep';
import {StepByStepProvider} from './stepByStepContext';
import useFetchStepByStepRecipe from './useFetchStepByStepRecipe';

const StepByStep = () => {
  const refEl = React.useRef<HTMLDivElement>(null);
  useTrapFocus(refEl);

  const {loading, error, recipe} = useFetchStepByStepRecipe();

  return (
    <DialogWrapper ref={refEl}>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {recipe && (
        <TimersProvider>
          <RunTimers />

          <StepByStepProvider
            initialValues={{
              noOfSteps: 4 + recipe.steps.length,
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
                  <MiseEnPlace />

                  <IngredientsStep ingredients={recipe.ingredients} />
                  <ItemsStep items={recipe.items} />

                  {recipe.steps.map((step, index) => {
                    return <RecipeStep key={`${index}-step`} step={step} />;
                  })}
                </StepList>
              </Section>
            </Stack>
          </StepByStepProvider>
        </TimersProvider>
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
  height: calc(100% - 58px);
`;
