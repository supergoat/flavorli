import React from 'react';
import styled from 'styled-components';
import {Stack, Text, H2} from '@flavorli/elements';
import {IIngredient} from '../../types';

interface IIngredientsStepProps {
  ingredients: IIngredient[];
}
const IngredientsStep = ({ingredients}: IIngredientsStepProps) => {
  return (
    <Stack width="100%" gap={16}>
      <Dot />
      <H2>Ingredients</H2>

      <Stack width="100%">
        {ingredients.map((ingredient, index) => {
          return (
            <Label
              htmlFor={`ingredient-${ingredient.name}-${ingredient.qty}`}
              key={`ingredient-${ingredient.name}-${ingredient.qty}`}
            >
              <CheckBox
                id={`ingredient-${ingredient.name}-${ingredient.qty}`}
              />

              <div>
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
              </div>
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
  top: 6px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.textColor};
`;
