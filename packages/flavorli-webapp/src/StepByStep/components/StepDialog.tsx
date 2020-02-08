import React from 'react';
import styled from 'styled-components';
import {Dialog} from '@flavorli/elements';
import Step from './Step';
import StepNo from './StepNo';
import Tag from './Tag';
import Items from './Items';
import Ingredients from './Ingredients';
import StepTasks from './StepTasks';
import Timer from './Timer';
import ImageList from './ImageList';
import {useStepByStepContext} from '../stepByStepContext';
import useFetchStepByStepRecipe from '../useFetchStepByStepRecipe';

const StepDialog = () => {
  const {onCloseDialogStep, currentDialogStep} = useStepByStepContext();

  const {loading, error, recipe} = useFetchStepByStepRecipe();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const step = recipe?.steps[currentDialogStep - 1];

  if (!step) return null;

  return currentDialogStep ? (
    <DialogWrapper
      label={`Step ${step.no}`}
      describedbyID="step-tasks"
      onClose={onCloseDialogStep}
    >
      <Step isDialog={true}>
        <StepNo no={step?.no} />

        <Tag tag={step.tag} />

        <Items items={step.items} />

        <Ingredients ingredients={step.ingredients} />

        <StepTasks tasks={step.tasks} />

        {step.timer && <Timer timerInfo={step.timer} />}

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
