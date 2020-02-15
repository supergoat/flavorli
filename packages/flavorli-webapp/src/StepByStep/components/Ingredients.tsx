import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IIngredient} from '../../types';
import styled from 'styled-components';

const Ingredients = ({ingredients = []}: {ingredients?: IIngredient[]}) => {
  return !!ingredients.length ? (
    <Stack gap={8} width="100%">
      <H3 color="primary">Ingredients</H3>

      {ingredients.map(ingredient => {
        return (
          <Stack width="100%" key={`${ingredient.qty} ${ingredient.name}`}>
            {ingredient.link ? (
              <Link target="_blank" href={ingredient.link}>
                {ingredient.qty} {ingredient.name}
              </Link>
            ) : (
              <>
                {ingredient.qty} {ingredient.name}
              </>
            )}
            <Text intent="secondary">{ingredient?.notes}</Text>
          </Stack>
        );
      })}
    </Stack>
  ) : null;
};

export default Ingredients;

const Link = styled.a`
  color: ${p => p.theme.colors.primary};
`;
