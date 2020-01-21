import React from 'react';
import {Stack} from '@flavorli/elements';
import {IIngredient} from '../../types';
import Ingredient from './Ingredient';

interface IIngredientListProps {
  ingredients: IIngredient[];
}
const IngredientList = ({ingredients}: IIngredientListProps) => {
  return (
    <Stack gap={8} alignment="center" width="100%">
      {ingredients.map(ingredient => {
        return <Ingredient ingredient={ingredient} key={ingredient.name} />;
      })}
    </Stack>
  );
};

export default IngredientList;
