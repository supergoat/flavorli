import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IIngredient} from '../../types';
import styled from 'styled-components';
const Ingredients = ({ingredients = []}: {ingredients?: IIngredient[]}) => {
  return !!ingredients.length ? (
    <Stack gap={8} width="100%">
      <H3 color="primary">Ingredients</H3>

      {ingredients.map(ingredient => {
        return (
          <Stack
            direction="horizontal"
            alignment="center"
            gap={8}
            key={ingredient.name}
          >
            <Text>{ingredient.qty}</Text>
            <Text>{ingredient.name}</Text>
          </Stack>
        );
      })}
    </Stack>
  ) : null;
};

export default Ingredients;
