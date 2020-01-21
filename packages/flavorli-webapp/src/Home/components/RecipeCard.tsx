import React from 'react';
import {Stack} from '@flavorli/elements';
import styled from 'styled-components';
import Name from './Name';
import Author from './Author';
import Info from './Info';

import {IRecipe} from '../../types';

interface IRecipeCardProps {
  recipe: IRecipe;
}
const RecipeCard = ({recipe}: IRecipeCardProps) => {
  return (
    <Stack width="100%" shadow="LIGHT" borderRadius={16} overflow="hidden">
      <Image src={recipe.image} alt="" />
      <Stack width="100%" gap={16} padding={16}>
        <Stack width="100%" gap={8}>
          <Name id={recipe.id} name={recipe.name} />
          <Author name={recipe.author} />
        </Stack>
      </Stack>
      <Info
        cookingTime={recipe.cookingTime}
        preparationTime={recipe.preparationTime}
        portions={recipe.portions}
      />
    </Stack>
  );
};

export default RecipeCard;

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
`;
