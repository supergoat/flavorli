import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IIngredient} from '../types';

const Ingredients = ({ingredients}: {ingredients: IIngredient[]}) => {
  return !!ingredients.length ? (
    <Stack gap={8} width="100%">
      <H3>Ingredients</H3>

      {ingredients.map(ingredient => {
        return (
          <Text key={ingredient.name}>
            {ingredient.qty} {ingredient.name}
          </Text>
        );
      })}
    </Stack>
  ) : null;
};

export default Ingredients;
