import React from 'react';
import styled from 'styled-components';
import {Stack, Text, Button} from '@flavorli/elements';
import Timer from './Timer';
import Links from './Links';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';
import ImageList from './ImageList';
import Navigation from './Navigation';
import {IRecipeStep} from '../types';
import Step from './Step';

interface IPreparationStepProps {
  isDialog?: boolean;
  stepNo: number;
  noOfSteps: number;
  step: IRecipeStep;
  onChangeStep: (direction: 1 | -1) => void;
  onViewStep: (stepNo: number) => void;
  onClose?: () => void;
  className?: string;
}
export default ({
  isDialog,
  step,
  stepNo,
  noOfSteps,
  onChangeStep,
  onViewStep,
  onClose,
}: IPreparationStepProps) => {
  return (
    <Step
      stepNo={stepNo}
      noOfSteps={noOfSteps}
      background="surface"
      navigation={
        <>
          {!isDialog && (
            <Navigation
              onNavigate={onChangeStep}
              hideNextStepButton={step.no === noOfSteps}
            />
          )}

          {isDialog && (
            <Stack paddingTop={16} width="100%">
              <Button width="100%" intent="secondary" onClick={onClose}>
                Close
              </Button>
            </Stack>
          )}
        </>
      }
    >
      <Stack width="100%" paddingBottom={32}>
        <StepNo>{step.no}</StepNo>
      </Stack>

      <Tag tag={step.tag} />

      <Links links={step.links} onViewStep={onViewStep} />

      <Kitchenware kitchenware={step.kitchenware} />

      <Ingredients ingredients={step.ingredients} />

      <Text spacing={{line: '1.5'}} id="step-description">
        {step.description}
      </Text>

      {step.timer && <Timer timer={step.timer} />}

      {step?.images && step?.images?.length > 0 && (
        <ImageList images={step?.images} />
      )}
    </Step>
  );
};

const StepNo = styled.p`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[48]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;
