import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IIngredient} from '../types';
import styled from 'styled-components';
const Ingredients = ({ingredients}: {ingredients: IIngredient[]}) => {
  return !!ingredients.length ? (
    <Stack gap={8} width="100%">
      <H3 color="primary">Ingredients</H3>

      {ingredients.map(ingredient => {
        return (
          <Stack
            direction="horizontal"
            alignment="center"
            gap={8}
            key={ingredient.name}
          >
            <FakeCheckBox />
            <Text>
              {ingredient.qty} {ingredient.name}
            </Text>
          </Stack>
        );
      })}
    </Stack>
  ) : null;
};

export default Ingredients;

const FakeCheckBox = styled.div`
  width: 15px;
  height: 15px;
  /* border: ${p => `1px solid ${p.theme.colors.primary}`}; */

  border-radius: ${p => `${p.theme.spacings[2]}px`};
  box-shadow: inset 0px 0px 2px 0px var(--Primary, #273b7a);
`;
