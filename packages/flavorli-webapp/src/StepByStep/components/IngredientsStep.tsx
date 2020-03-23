import React from 'react';
import styled from 'styled-components';
import {Stack, Text, H2, H3} from '@flavorli/elements';
import {IIngredient} from '../../types';

interface IIngredientsStepProps {
  ingredients: IIngredient[];
}
const IngredientsStep = ({ingredients}: IIngredientsStepProps) => {
  return (
    <Stack
      width="100%"
      gap={16}
      background="surface"
      padding={24}
      shadow="LIGHT"
      borderRadius={8}
    >
      <H2>Ingredients</H2>
      {ingredients.map((ingredients, index) => {
        return (
          <Stack key={index} width="100%">
            <H3>{ingredients.for}</H3>
            {ingredients.list.map(ingredient => {
              return (
                <Label
                  htmlFor={`ingredient-${ingredient.name}-${ingredient.qty}`}
                  key={`ingredient-${ingredient.name}-${ingredient.qty}`}
                >
                  <CheckBox
                    id={`ingredient-${ingredient.name}-${ingredient.qty}`}
                  />

                  <Stack gap={4} width="calc(100% - 24px)">
                    {ingredient.link ? (
                      <Link target="_blank" href={ingredient.link}>
                        <Stack width="100%" gap={4} direction="horizontal">
                          {ingredient.qty !== '-' && (
                            <Text intent="secondary">{ingredient.qty}</Text>
                          )}
                          <Text>{ingredient.name}</Text>
                        </Stack>
                      </Link>
                    ) : (
                      <Stack width="100%" gap={4} direction="horizontal">
                        {ingredient.qty !== '-' && (
                          <Text intent="secondary">{ingredient.qty}</Text>
                        )}
                        <Text>{ingredient.name}</Text>
                      </Stack>
                    )}
                    <Text intent="secondary">{ingredient?.notes}</Text>
                  </Stack>
                </Label>
              );
            })}
          </Stack>
        );
      })}
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
