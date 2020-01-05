import React from 'react';
import styled from 'styled-components';
import {Stack, Text} from '@flavorli/elements';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';
import ImageList from './ImageList';
import {IPreparationStep} from '../types';
import Step from './Step';

interface IPreparationStepProps {
  step: IPreparationStep;
}
export default ({step}: IPreparationStepProps) => {
  return (
    <Step background="surface">
      <Stack width="100%" paddingBottom={16} gap={4}>
        <Heading>Mise en place</Heading>
        <SubHeading>Preparation</SubHeading>
      </Stack>

      <Tag tag={step.tag} />

      <Kitchenware kitchenware={step.kitchenware} />

      <Ingredients ingredients={step.ingredients} />

      <Text spacing={{line: '1.5'}} id="step-description">
        {step.description}
      </Text>

      {step?.images && step?.images?.length > 0 && (
        <ImageList images={step?.images} />
      )}
    </Step>
  );
};

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.tagRed};
  font-weight: normal;
`;
