import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import {IIngredient} from '../../types';

interface IIngredientProps {
  ingredient: IIngredient;
}
const Ingredient = ({ingredient}: IIngredientProps) => {
  return (
    <Stack direction="horizontal" gap={8} width="100%">
      <Text
        width="28%"
        align="right"
        intent="highlight"
        color="black"
        fontSize={16}
      >
        {ingredient.qty}
      </Text>
      <Text width="72%">{ingredient.name}</Text>
    </Stack>
  );
};

export default Ingredient;
