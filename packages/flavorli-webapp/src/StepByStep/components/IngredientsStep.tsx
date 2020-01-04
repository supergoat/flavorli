import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';
import {IIngredient} from '../types';
import Navigation from './Navigation';
import Step from './Step';
import SaladSvg from '../icons/salad.svg';

interface IIngredientsStepProps {
  stepNo: number;
  noOfSteps: number;
  ingredients: IIngredient[];
  onChangeStep: (direction: 1 | -1) => void;
}
const IngredientsStep = ({
  stepNo,
  noOfSteps,
  ingredients,
  onChangeStep,
}: IIngredientsStepProps) => {
  return (
    <Step
      stepNo={stepNo}
      noOfSteps={noOfSteps}
      background="primary"
      image={SaladSvg}
      navigation={
        <Navigation
          onNavigate={onChangeStep}
          nextButtonName="Items"
          variation="onPrimary"
        />
      }
    >
      <Stack gap={4} paddingBottom={8}>
        <Heading>Mise en place</Heading>
        <SubHeading>Ingredients</SubHeading>
      </Stack>
      <Stack gap={8} width="100%">
        {ingredients.map(ingredient => {
          return (
            <Stack
              direction="horizontal"
              gap={16}
              width="100%"
              key={ingredient.name}
            >
              <ItemQty width="30%" align="right">
                {ingredient.qty}
              </ItemQty>
              <ItemName>{ingredient.name}</ItemName>
            </Stack>
          );
        })}
      </Stack>
    </Step>
  );
};

export default IngredientsStep;

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.white};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: normal;
`;

const ItemQty = styled(Text)`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[20]};
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: normal;
`;

const ItemName = styled(Text)`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[20]};
  color: ${p => p.theme.colors.white};
  font-weight: normal;
`;
