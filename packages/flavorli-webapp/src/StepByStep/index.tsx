import React from 'react';
import {Stack, Text, H2, H3} from '@flavorli/elements';
import RecipeStep from './components/RecipeStep';
import {RecipeTimersProvider} from './timersContext';

import IntroStep from './components/IntroStep';

import IngredientsStep from './components/IngredientsStep';
import ItemsStep from './components/ItemsStep';
import useFetchStepByStepRecipe from './useFetchStepByStepRecipe';

import styled from 'styled-components';
import {ProfileAvatar} from '../components';
import Author from './components/Author';
import {IIngredientItem} from '../types';
import StepTasks from './components/StepTasks';

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

              <Stack background="surface" gap={8} padding={8}>
                <H2 color="primary">Preparation</H2>
                {/* <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </Text> */}
              </Stack>
              <Stack shadow="LIGHT" borderRadius={8} width="100%">
                <Stack
                  background="secondary"
                  width="100%"
                  padding={16}
                  paddingTop={24}
                  paddingBottom={24}
                >
                  <H2 color="primary">Quinoa</H2>
                </Stack>
                <Stack
                  width="100%"
                  gap={32}
                  borderRadiusBottomLeft={8}
                  borderRadiusBottomRight={8}
                  background="surface"
                  padding={24}
                >
                  <Stack width="100%" gap={8}>
                    <H3>Ingredients</H3>

                    {([
                      {qty: '1 1/3 cup', name: 'quinoa'},
                    ] as IIngredientItem[]).map(ingredient => {
                      return (
                        <Stack
                          key={`ingredient-${ingredient.name}-${ingredient.qty}`}
                          gap={4}
                          width="calc(100% - 24px)"
                        >
                          <Stack width="100%" gap={4} direction="horizontal">
                            {ingredient.qty !== '-' && (
                              <Text intent="secondary">{ingredient.qty}</Text>
                            )}
                            <Text>{ingredient.name}</Text>
                          </Stack>

                          <Text intent="secondary">{ingredient?.notes}</Text>
                        </Stack>
                      );
                    })}
                  </Stack>

                  <StepTasks
                    tasks={[
                      {
                        name:
                          'In a saucepan over high heat, bring quinoa and 3 1⁄3 cups water to a boil',
                      },
                      {
                        name:
                          'Reduce heat to low, cover, and simmer for 20 minutes',
                      },
                      {
                        name:
                          'Remove from heat and let cool; fluff quinoa with a fork',
                      },
                    ]}
                  />
                </Stack>
              </Stack>

              <Stack background="surface" gap={8} padding={8}>
                <H2 color="primary">Preparation</H2>
                {/* <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </Text> */}
              </Stack>

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
