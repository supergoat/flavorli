import React from 'react';
import {
  styled,
  Stack,
  H1,
  H2,
  Icon,
  Label,
  Text,
  H3,
  Button,
} from '@flavorli/elements';

import {recipe} from './recipeData';

export default () => {
  return (
    <Stack background="SURFACE">
      <CoverImage src={recipe.image} alt={recipe.name} />

      <Stack padding="SM" gap="M" width="100%">
        <H1>{recipe.name}</H1>
        <Stack direction="horizontal" width="100%">
          <Stack width="25%" gap="XSS" alignment="center" distribution="center">
            <Icon name="preparationTime" />
            <Label>{recipe.preparation}</Label>
            <Text intent="secondary">Preparation</Text>
          </Stack>
          <Stack width="25%" gap="XSS" alignment="center" distribution="center">
            <Icon name="cookingTime" />
            <Label>{recipe.cooking}</Label>
            <Text intent="secondary">Cooking</Text>
          </Stack>
          <Stack width="25%" gap="XSS" alignment="center" distribution="center">
            <Icon name="serves" />
            <Label>{recipe.portions}</Label>
            <Text intent="secondary">Portions</Text>
          </Stack>
          <Stack width="25%" gap="XSS" alignment="center" distribution="center">
            <Icon name="difficulty" />
            <Label>{recipe.difficulty}</Label>
            <Text intent="secondary">Difficulty</Text>
          </Stack>
        </Stack>

        <Stack direction="horizontal" gap="XS" alignment="center">
          <Icon name="ingredients" />
          <H2>Ingredients</H2>
        </Stack>

        {Object.keys(recipe.ingredients).map(step => {
          return (
            <Stack gap="XS" alignment="center" width="100%">
              <H3 width="100%">{step}</H3>
              {recipe.ingredients[step].map(ingredient => {
                return (
                  <Stack direction="horizontal" gap="XS" width="100%">
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

        <Stack direction="horizontal" gap="XS" alignment="center">
          <Icon name="preparation" />
          <H2>Preparation</H2>
        </Stack>

        <Button width="100%">Step By Step</Button>

        {Object.keys(recipe.steps).map(stepName => {
          return (
            <Stack gap="SM" width="100%">
              <H3 width="100%">{stepName}</H3>
              {recipe.steps[stepName].map((step, index) => {
                return (
                  <Stack direction="horizontal" gap="SM" width="100%">
                    <Text>{index + 1}</Text>
                    <Text>{step}</Text>
                  </Stack>
                );
              })}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

const CoverImage = styled.img`
  width: 100%;
`;
