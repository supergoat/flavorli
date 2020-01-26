import React from 'react';
import {Stack, Scroll, H1} from '@flavorli/elements';
import RecipeCard from './components/RecipeCard';
import useFetchRecipeList from './useFetchRecipeList';
import styled from 'styled-components';

const Home = () => {
  const {recipes, loading, error} = useFetchRecipeList();

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  if (!recipes || !recipes.length) return null;
  return (
    <Stack overflow="scroll" height="100%">
      <Stack
        padding={16}
        gap={16}
        width="100%"
        role="main"
        background="surface"
      >
        <H1 color="primary">Recipes</H1>
        <Stack gap={32} width="100%">
          {recipes.map(recipe => {
            return <RecipeCard key={recipe.name} recipe={recipe} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
