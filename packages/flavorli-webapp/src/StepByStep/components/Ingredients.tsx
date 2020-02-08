import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IIngredient} from '../../types';

const Ingredients = ({ingredients = []}: {ingredients?: IIngredient[]}) => {
  return !!ingredients.length ? (
    <Stack gap={8} width="100%">
      <H3 color="primary">Ingredients</H3>

      {ingredients.map(ingredient => {
        return (
          <Stack
            width="100%"
            direction="horizontal"
            // alignment="center"
            gap={8}
            key={ingredient.name}
          >
            {/* <Text width="25%">{ingredient.qty}</Text>
            <Text width="75%">{ingredient.name}</Text> */}
            <Text>{ingredient.name}</Text>
          </Stack>
        );
      })}
    </Stack>
  ) : null;
};

export default Ingredients;
