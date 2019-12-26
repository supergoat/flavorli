import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import {IIngredient} from '../../StepByStep/types';

interface IIngredientProps {
  ingredient: IIngredient;
}
const Ingredient = ({ingredient}: IIngredientProps) => {
  return (
    <Stack direction="horizontal" gap={8} width="100%">
      <Text width="25%" align="right">
        {ingredient.qty}
      </Text>
      <Text>{ingredient.name}</Text>
    </Stack>
  );
};

export default Ingredient;
