import React from 'react';
import styled from 'styled-components';
import {Stack, Text} from '@flavorli/elements';
import Timer from './Timer';
import Links from './Links';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';
import ImageList from './ImageList';
import {IRecipeStep} from '../types';
import Step from './Step';

interface IRecipeStepProps {
  isDialog?: boolean;
  step: IRecipeStep;
}
const RecipeStep = ({isDialog, step}: IRecipeStepProps) => {
  return (
    <Step isDialog={isDialog} background="surface">
      <Stack width="100%" paddingBottom={32}>
        <StepNo>{step.no}</StepNo>
      </Stack>

      <Tag tag={step.tag} />

      <Links links={step.links} />

      <Kitchenware kitchenware={step.kitchenware} />

      <Ingredients ingredients={step.ingredients} />

      <Text spacing={{line: '1.5'}} id="step-description">
        {step.description}
      </Text>

      <Timer timer={step.timer} />

      <ImageList images={step?.images} />
    </Step>
  );
};

export default RecipeStep;

const StepNo = styled.p`
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.secondaryTextColor};
`;
