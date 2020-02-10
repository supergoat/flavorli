import React from 'react';
import styled from 'styled-components';
import {Stack, Text} from '@flavorli/elements';
import Step from './Step';
import {IIngredient} from '../../types';
import SaladSvg from '../icons/salad.svg';

interface IIngredientsStepProps {
  ingredients: IIngredient[];
}
const IngredientsStep = ({ingredients}: IIngredientsStepProps) => {
  return (
    <Step>
      <Stack gap={4} paddingBottom={8}>
        <Heading>Mise en place</Heading>
        <SubHeading>Ingredients</SubHeading>
      </Stack>

      <Text>
        Here is a list of all the ingredients you will need. Check to make sure
        you are not missing anything before you begin
      </Text>

      <Stack gap={8} width="100%">
        {ingredients.map(ingredient => {
          return (
            <Stack
              direction="horizontal"
              gap={16}
              width="100%"
              key={ingredient.name}
            >
              <CheckBox
                id={`ingredient-${ingredient.name}-${ingredient.qty}`}
              />
              <label
                htmlFor={`ingredient-${ingredient.name}-${ingredient.qty}`}
              >
                {ingredient.qty} {ingredient.name}
              </label>
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
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const CheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  flex-shrink: 0;
  margin-right: 8px;
`;
