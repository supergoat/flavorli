import React from 'react';
import styled from 'styled-components';
import {Stack, Text} from '@flavorli/elements';
import Step from './Step';
import {IIngredient} from '../../types';

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

      <Stack>
        {ingredients.map((ingredient, index) => {
          return (
            <Label
              htmlFor={`ingredient-${ingredient.name}-${ingredient.qty}`}
              key={`ingredient-${ingredient.name}-${ingredient.qty}`}
            >
              <CheckBox
                id={`ingredient-${ingredient.name}-${ingredient.qty}`}
              />

              <Stack width="100%">
                {ingredient.link ? (
                  <Link target="_blank" href={ingredient.link}>
                    {ingredient.qty} {ingredient.name}
                  </Link>
                ) : (
                  <>
                    {ingredient.qty} {ingredient.name}
                  </>
                )}
                <Text intent="secondary">{ingredient?.notes}</Text>
              </Stack>
            </Label>
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

const Link = styled.a`
  color: ${p => p.theme.colors.primary};
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  padding: 8px 0;
  width: 100%;
`;
