import React from 'react';
import {
  Stack,
  H1,
  H2,
  Icon,
  Text,
  H3,
  Button,
  Scroll,
} from '@flavorli/elements';
import {motion} from 'framer-motion';

import {recipe} from './recipeData';
import {useHistory} from 'react-router-dom';

export default () => {
  let history = useHistory();

  return (
    <Scroll>
      <article>
        <motion.img src={recipe.image} alt="" width="100%" />

        <main>
          <Stack padding={16} gap={16} width="100%">
            <H1>{recipe.name}</H1>
            <Stack direction="horizontal" width="100%">
              <Stack
                width="25%"
                gap={4}
                alignment="center"
                distribution="center"
              >
                <Icon name="preparationTime" />
                <Text intent="highlight">{recipe.preparation}</Text>
                <Text intent="secondary">Preparation</Text>
              </Stack>
              <Stack
                width="25%"
                gap={4}
                alignment="center"
                distribution="center"
              >
                <Icon name="cookingTime" />
                <Text intent="highlight">{recipe.cooking}</Text>
                <Text intent="secondary">Cooking</Text>
              </Stack>
              <Stack
                width="25%"
                gap={4}
                alignment="center"
                distribution="center"
              >
                <Icon name="serves" />
                <Text intent="highlight">{recipe.portions}</Text>
                <Text intent="secondary">Portions</Text>
              </Stack>
              <Stack
                width="25%"
                gap={4}
                alignment="center"
                distribution="center"
              >
                <Icon name="difficulty" />
                <Text intent="highlight">{recipe.difficulty}</Text>
                <Text intent="secondary">Difficulty</Text>
              </Stack>
            </Stack>

            <Stack direction="horizontal" gap={8} alignment="center">
              <Icon name="ingredients" />
              <H2>Ingredients</H2>
            </Stack>

            {Object.keys(recipe.ingredients).map(step => {
              return (
                <Stack gap={8} alignment="center" width="100%">
                  <H3 width="100%">{step}</H3>
                  {recipe.ingredients[step].map(ingredient => {
                    return (
                      <Stack direction="horizontal" gap={8} width="100%">
                        <Text width="25%" align="right">
                          {ingredient.qty}
                        </Text>
                        <Text>{ingredient.name}</Text>
                      </Stack>
                    );
                  })}
                </Stack>
              );
            })}

            <Stack direction="horizontal" gap={8} alignment="center">
              <Icon name="preparation" />
              <H2>Preparation</H2>
            </Stack>

            <Button width="100%" onClick={() => history.push('/step-by-step')}>
              Step By Step
            </Button>

            {Object.keys(recipe.steps).map(stepName => {
              return (
                <Stack gap={16} width="100%">
                  <H3 width="100%">{stepName}</H3>
                  {recipe.steps[stepName].map((step, index) => {
                    return (
                      <Stack direction="horizontal" gap={16} width="100%">
                        <Text>{index + 1}</Text>
                        <Text>{step}</Text>
                      </Stack>
                    );
                  })}
                </Stack>
              );
            })}
          </Stack>
        </main>
      </article>
    </Scroll>
  );
};
