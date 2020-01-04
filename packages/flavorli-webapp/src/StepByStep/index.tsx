import React from 'react';
import styled from 'styled-components';
import {useTrapFocus, useFocusFirstDescendant, Stack} from '@flavorli/elements';
import StepList from './components/StepList';
import RecipeStep from './components/RecipeStep';
import {
  introStep,
  ingredientsStep,
  itemsStep,
  preparationSteps,
  recipeSteps,
} from './helpers/mockData';
import StepDialog from './components/StepDialog';
import Timers from './components/Timers';
import {TimersProvider} from './helpers/timersContext';

import Intro from './components/Intro';
import IngredientsStep from './components/IngredientsStep';
import ItemsStep from './components/ItemsStep';
import PreparationStep from './components/PreparationStep';

export default () => {
  const refEl = React.useRef<HTMLDivElement>(null);
  const [lastFocus, setLastFocus] = React.useState();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [openLink, setOpenLink] = React.useState();

  // useFocusFirstDescendant(refEl);
  useTrapFocus(refEl);

  const onChangeStep = (direction: 1 | -1) => {
    setCurrentStep(s => s + direction);
  };

  const onViewStep = (stepNo: number) => {
    setLastFocus(document.activeElement);
    setOpenLink(stepNo);
  };

  const onCloseDialog = () => {
    setOpenLink(null);
    lastFocus.focus();
  };

  const noOfSteps = 3 + preparationSteps.length + recipeSteps.length;
  return (
    <DialogWrapper ref={refEl}>
      <TimersProvider>
        <Stack width="100%" height="100%">
          <Timers />
          <section
            aria-label="List of recipe steps"
            id="list-of-recipe-steps"
            style={{
              width: '100%',
              height: 'calc(100% - 58px)',
            }}
          >
            <StepList>
              <>
                {currentStep === 1 && (
                  <Intro
                    stepNo={1}
                    noOfSteps={noOfSteps}
                    step={introStep}
                    onChangeStep={onChangeStep}
                  />
                )}
                {currentStep === 2 && (
                  <IngredientsStep
                    stepNo={2}
                    noOfSteps={noOfSteps}
                    ingredients={ingredientsStep.ingredients}
                    onChangeStep={onChangeStep}
                  />
                )}
                {currentStep === 3 && (
                  <ItemsStep
                    stepNo={3}
                    noOfSteps={noOfSteps}
                    items={itemsStep.items}
                    onChangeStep={onChangeStep}
                  />
                )}
                {preparationSteps.map((preparationStep, index) => {
                  const isCurrentStep = index + 4 === currentStep;
                  return (
                    isCurrentStep && (
                      <PreparationStep
                        stepNo={index + 4}
                        noOfSteps={noOfSteps}
                        step={preparationStep}
                        onChangeStep={onChangeStep}
                      />
                    )
                  );
                })}
                {recipeSteps.map((recipeStep, index) => {
                  const isCurrentStep =
                    index + 4 + preparationSteps.length === currentStep;

                  return (
                    isCurrentStep && (
                      <RecipeStep
                        stepNo={index + 4 + preparationSteps.length}
                        noOfSteps={noOfSteps}
                        step={recipeStep}
                        onChangeStep={onChangeStep}
                        onViewStep={onViewStep}
                      />
                    )
                  );
                })}
              </>
            </StepList>
          </section>
        </Stack>

        {openLink && (
          <StepDialog
            stepNo={openLink}
            noOfSteps={preparationSteps.length}
            onViewStep={onViewStep}
            onClose={() => onCloseDialog()}
          />
        )}
      </TimersProvider>
    </DialogWrapper>
  );
};

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
