import React from 'react';
import {Dialog} from '@flavorli/elements';
import RecipeStep from './RecipeStep';
import {recipeSteps} from '../helpers/mockData';
import styled from 'styled-components';
import {IRecipeStep} from '../types';

interface IPreparationStepDialogProps {
  stepNo: number;
  noOfSteps: number;
  onViewStep: (stepNo: number) => void;
  onClose: () => void;
}
const StepDialog = ({
  stepNo,
  noOfSteps,
  onViewStep,
  onClose,
}: IPreparationStepDialogProps) => {
  return (
    <DialogWrapper label="" describedbyID="step-description" onClose={onClose}>
      <RecipeStep
        isDialog={true}
        stepNo={stepNo}
        noOfSteps={noOfSteps}
        step={recipeSteps[stepNo - 1] as IRecipeStep}
        onChangeStep={() => {}}
        onViewStep={onViewStep}
        onClose={onClose}
      />
    </DialogWrapper>
  );
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
