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
import StepNo from './StepNo';
import StepDescription from './StepDescription';

interface IRecipeStepProps {
  step: IRecipeStep;
}
const RecipeStep = ({step}: IRecipeStepProps) => {
  return (
    <Step background="surface">
      <StepNo no={step.no} />

      <Tag tag={step.tag} />

      <Links links={step.links} />

      <Kitchenware kitchenware={step.kitchenware} />

      <Ingredients ingredients={step.ingredients} />

      <StepDescription description={step.description} />

      <Timer timer={step.timer} />

      <ImageList images={step?.images} />
    </Step>
  );
};

export default RecipeStep;
