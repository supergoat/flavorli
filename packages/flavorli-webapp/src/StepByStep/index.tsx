import React from 'react';
import styled from 'styled-components';
import {useTrapFocus, Stack} from '@flavorli/elements';
import StepList from './components/StepList';
import RecipeStep from './components/RecipeStep';
import {stepByStep as STEP_BY_STEP} from './helpers/mockData';
import Timers from './components/Timers';
import {TimersProvider} from './helpers/timersContext';

import RunTimers from './components/RunTimers';
import IntroStep from './components/IntroStep';
import IngredientsStep from './components/IngredientsStep';
import ItemsStep from './components/ItemsStep';
import PreparationStep from './components/PreparationStep';
import {StepByStepProvider} from './helpers/StepByStepContext';
import {IStepByStep} from './types';

interface IStepByStepProps {
  stepByStep?: IStepByStep;
}

const StepByStep = ({stepByStep = STEP_BY_STEP}: IStepByStepProps) => {
  const refEl = React.useRef<HTMLDivElement>(null);
  useTrapFocus(refEl);

  const {intro, ingredients, items, preparationSteps, recipeSteps} = stepByStep;

  const noOfSteps = 3 + preparationSteps.length + recipeSteps.length;

  return (
    <DialogWrapper ref={refEl}>
      <TimersProvider>
        <RunTimers />

        <StepByStepProvider initialValues={{noOfSteps}}>
          <Stack width="100%" height="100%">
            <Timers />
            <Section
              aria-label="List of recipe steps"
              id="list-of-recipe-steps"
            >
              <StepList>
                <IntroStep step={intro} />
                <IngredientsStep ingredients={ingredients} />
                <ItemsStep items={items} />

                {preparationSteps.map(preparationStep => {
                  return <PreparationStep step={preparationStep} />;
                })}
                {recipeSteps.map(recipeStep => {
                  return <RecipeStep step={recipeStep} />;
                })}
              </StepList>
            </Section>
          </Stack>
        </StepByStepProvider>
      </TimersProvider>
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
