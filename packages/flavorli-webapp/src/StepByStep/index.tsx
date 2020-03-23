import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import RecipeStep from './components/RecipeStep';
import {RecipeTimersProvider} from './timersContext';

import IntroStep from './components/IntroStep';

import IngredientsStep from './components/IngredientsStep';
import ItemsStep from './components/ItemsStep';
import useFetchStepByStepRecipe from './useFetchStepByStepRecipe';

import styled from 'styled-components';
import {ProfileAvatar} from '../components';
import Author from './components/Author';

const StepByStep = () => {
  const {loading, error, recipe} = useFetchStepByStepRecipe();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {recipe && (
        <RecipeTimersProvider recipeId={recipe.id}>
          <Stack
            width="100%"
            height="100%"
            paddingLeft={16}
            paddingBottom={32}
            paddingTop={32}
          >
            <Stack width="100%" paddingRight={16} gap={48}>
              <Line />
              <IntroStep
                author={recipe.author}
                name={recipe.name}
                image={recipe?.image}
                video={recipe?.video}
                preparationTime={recipe.preparationTime}
                cookingTime={recipe.cookingTime}
                portions={recipe.portions}
                difficulty={recipe.difficulty}
                notes={recipe.notes}
                ingredients={recipe.ingredients}
                items={recipe.items}
              />

              {/* <IngredientsStep ingredients={recipe.ingredients} />
              <ItemsStep items={recipe.items} /> */}

              {recipe?.steps.map((step, index) => {
                return (
                  <RecipeStep
                    key={index}
                    stepNo={index + 1}
                    noOfSteps={recipe.steps.length}
                    step={step}
                  />
                );
              })}

              <Author />
            </Stack>
          </Stack>
        </RecipeTimersProvider>
      )}
    </>
  );
};

export default StepByStep;

const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 60px;
  width: 1px;
  height: calc(100% + 30px);
  background: black;
`;
