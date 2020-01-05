import React from 'react';
import {Dialog} from '@flavorli/elements';
import RecipeStep from './RecipeStep';
import {recipeSteps} from '../helpers/mockData';
import styled from 'styled-components';
import {IRecipeStep} from '../types';
import {useStepsContext} from '../helpers/StepsContext';

const StepDialog = () => {
  const {onCloseViewStep, openLink} = useStepsContext();

  return openLink ? (
    <DialogWrapper
      label=""
      describedbyID="step-description"
      onClose={onCloseViewStep}
    >
      <RecipeStep
        isDialog={true}
        step={recipeSteps[openLink - 1] as IRecipeStep}
      />
    </DialogWrapper>
  ) : null;
};

export default StepDialog;

const DialogWrapper = styled(Dialog)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${p => p.theme.colors.backdropDark};
`;
