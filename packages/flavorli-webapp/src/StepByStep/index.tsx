import React from 'react';
import {Stack} from '@flavorli/elements';
import RecipeStep from './components/RecipeStep';
import {RecipeTimersProvider} from './timersContext';

import IntroStep from './components/IntroStep';

import IngredientsStep from './components/IngredientsStep';
import ItemsStep from './components/ItemsStep';
import useFetchStepByStepRecipe from './useFetchStepByStepRecipe';
import Timers from './components/Timers';

const StepByStep = () => {
  const {loading, error, recipe} = useFetchStepByStepRecipe();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {recipe && (
        <RecipeTimersProvider recipeId={recipe.id}>
          {/* <Timers /> */}
          <Stack
            width="100%"
            height="100%"
            overflowY
            paddingLeft={32}
            paddingBottom={32}
            paddingTop={32}
          >
            <Stack
              width="100%"
              style={{borderLeft: '1px solid grey'}}
              paddingLeft={32}
              paddingRight={24}
              gap={104}
            >
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
              />

              <IngredientsStep ingredients={recipe.ingredients} />
              <ItemsStep items={recipe.items} />

              {recipe?.steps.map((step, index) => {
                return <RecipeStep key={index} step={step} />;
              })}
            </Stack>
          </Stack>
        </RecipeTimersProvider>
      )}
    </>
  );
};

export default StepByStep;
