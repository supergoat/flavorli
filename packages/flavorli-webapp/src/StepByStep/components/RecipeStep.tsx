import React from 'react';
import Timer from './Timer';
import Links from './Links';
import Tag from './Tag';
import Items from './Items';
import Ingredients from './Ingredients';
import ImageList from './ImageList';
import {IStep} from '../../types';
import Step from './Step';
import StepNo from './StepNo';
import StepTasks from './StepTasks';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';

interface IRecipeStepProps {
  step: IStep;
}
const RecipeStep = ({step}: IRecipeStepProps) => {
  return (
    <Step background="surface">
      <Stack
        width="100%"
        paddingBottom={32}
        direction="horizontal"
        distribution="space-between"
        alignment="center"
      >
        <StepNo no={step.no} />

        {step.type === 'MISE_EN_PLACE' && (
          <Heading color="secondaryTextColor" fontSize={20}>
            Mise en place
          </Heading>
        )}
      </Stack>

      <Tag tag={step.tag} />

      <Links links={step.links} />

      <Items items={step.items} />

      <Ingredients ingredients={step.ingredients} />

      <StepTasks tasks={step.tasks} />

      <Timer timer={step.timer} />

      <ImageList images={step?.images} />
    </Step>
  );
};

export default RecipeStep;

const Heading = styled(Text)`
  font-family: ${p => p.theme.families.Pacifico};
`;
