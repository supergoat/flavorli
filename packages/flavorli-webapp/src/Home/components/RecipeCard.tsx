import React from 'react';
import {Stack} from '@flavorli/elements';
import styled from 'styled-components';
import Name from './Name';
import Author from './Author';
import Info from './Info';

import {IRecipe} from '../../types';
import {useHistory} from 'react-router';

interface IRecipeCardProps {
  recipe: IRecipe;
}
const RecipeCard = ({recipe}: IRecipeCardProps) => {
  const history = useHistory();

  const onNavigateToRecipe = () => {
    history.push(`/recipe/${recipe.id}`);
  };
  return (
    <Stack
      width="100%"
      shadow="LIGHT"
      borderRadius={16}
      onClick={onNavigateToRecipe}
      background="surface"
    >
      <Image src={recipe.image} alt="" />
      <Stack width="100%" gap={16} padding={16}>
        <Stack width="100%" gap={8}>
          <Name name={recipe.name} />
          <Author name={recipe.author} />
        </Stack>
      </Stack>
      <Info
        cookingTime={recipe.cookingTime}
        preparationTime={recipe.preparationTime}
        portions={recipe.portions}
        difficulty={recipe.difficulty}
      />
    </Stack>
  );
};

export default RecipeCard;

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
  border-top-right-radius: ${p => `${p.theme.spacings[16]}px`};
  border-top-left-radius: ${p => `${p.theme.spacings[16]}px`};
`;
