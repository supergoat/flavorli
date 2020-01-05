import React from 'react';
import styled from 'styled-components';
import {Dialog} from '@flavorli/elements';
import Step from './Step';
import StepNo from './StepNo';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';
import StepDescription from './StepDescription';
import Timer from './Timer';
import ImageList from './ImageList';
import {useStepsContext} from '../helpers/StepByStepContext';
import {recipeSteps} from '../helpers/mockData';

const StepDialog = () => {
  const {onCloseDialogStep, currentDialogStep} = useStepsContext();

  const step = recipeSteps[currentDialogStep - 1];

  return currentDialogStep ? (
    <DialogWrapper
      label={`Step ${step.no}`}
      describedbyID="step-description"
      onClose={onCloseDialogStep}
    >
      <Step isDialog={true} background="surface">
        <StepNo no={step.no} />

        <Tag tag={step.tag} />

        <Kitchenware kitchenware={step.kitchenware} />

        <Ingredients ingredients={step.ingredients} />

        <StepDescription description={step.description} />

        <Timer timer={step.timer} />

        <ImageList images={step?.images} />
      </Step>
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
`;
