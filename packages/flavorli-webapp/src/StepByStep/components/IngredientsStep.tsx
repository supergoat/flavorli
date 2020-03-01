import React from 'react';
import styled from 'styled-components';
import {Stack, Text} from '@flavorli/elements';
import {IIngredient} from '../../types';

interface IIngredientsStepProps {
  ingredients: IIngredient[];
}
const IngredientsStep = ({ingredients}: IIngredientsStepProps) => {
  return (
    <Stack width="100%" gap={16}>
      <Dot />
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
    </Stack>
  );
};

export default IngredientsStep;

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

const Dot = styled.div`
  position: absolute;
  top: 4px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.colors.tagRed};
`;
