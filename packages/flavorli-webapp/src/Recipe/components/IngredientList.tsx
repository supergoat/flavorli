import React from 'react';
import {Stack, H3} from '@flavorli/elements';
import {IIngredient} from '../../StepByStep/types';
import Ingredient from './Ingredient';

interface IIngredientListProps {
  taskName: string;
  ingredients: IIngredient[];
}
const IngredientList = ({taskName, ingredients}: IIngredientListProps) => {
  return (
    <Stack gap={8} alignment="center" width="100%">
      <H3 width="100%">{taskName}</H3>
      {ingredients.map((ingredient, index2) => {
        return <Ingredient ingredient={ingredient} key={ingredient.name} />;
      })}
    </Stack>
  );
};

export default IngredientList;
