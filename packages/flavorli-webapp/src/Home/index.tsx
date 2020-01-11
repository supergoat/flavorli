import React from 'react';
import {Stack, Scroll, H1} from '@flavorli/elements';
import RecipeCard from './components/RecipeCard';
import {recipes as RECIPES} from '../__mockData__';
import {IRecipe} from '../types';

interface IHomeProps {
  recipes?: IRecipe[];
}

const Home = ({recipes = RECIPES}: IHomeProps) => {
  return (
    <Scroll background="surface">
      <Stack padding={16} gap={16} width="100%" role="main">
        <H1 color="primary">Recipes</H1>
        <Stack gap={32} width="100%">
          {recipes.map(recipe => {
            return <RecipeCard key={recipe.name} recipe={recipe} />;
          })}
        </Stack>
      </Stack>
    </Scroll>
  );
};

export default Home;
