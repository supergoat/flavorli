import React from 'react';
import styled from 'styled-components';
import {Stack, H1, H3} from '@flavorli/elements';
import {useHistory} from 'react-router';
import useFetchUser from './useFetchUser';

const Profile = () => {
  const history = useHistory();

  const {user, loading, error} = useFetchUser();

  if (error) return <div>{error}</div>;

  const onNavigateToRecipe = (recipeId: string) => {
    history.push(`/recipe/${recipeId}`);
  };

  return (
    <Stack
      alignment="center"
      paddingTop={32}
      gap={16}
      height="100%"
      width="100%"
      overflowY
    >
      <Avatar />

      <H1>John Wick</H1>

      <Recipes gap={8} width="100%">
        <H3 width="100%">Saved Recipes</H3>

        <Stack direction="horizontal" width="100%" wrap>
          {loading && <LoadingRecipes />}
          {user?.cookbooks[0]?.recipes &&
            user?.cookbooks[0]?.recipes.length &&
            user?.cookbooks[0]?.recipes.map(recipe => {
              return (
                <RecipeCard
                  key={recipe.id}
                  width="44vw"
                  height="44vw"
                  borderRadius={4}
                  background="secondarySurface"
                  overflowX
                  overflowY
                  shadow="LIGHT"
                  onClick={() => onNavigateToRecipe(recipe.id)}
                >
                  <Image src={recipe.image} />
                </RecipeCard>
              );
            })}
        </Stack>
      </Recipes>
    </Stack>
  );
};

export default Profile;

const Avatar = styled.div`
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  background: ${p => p.theme.colors.secondary};
  flex-shrink: 0;
`;

const Recipes = styled(Stack)`
  border-top: 1px solid ${p => p.theme.colors.secondarySurface};
  padding: calc((100vw - (44vw * 2)) / 3);
`;

const RecipeCard = styled(Stack)`
  margin-right: calc((100vw - (44vw * 2)) / 3);
  margin-bottom: calc((100vw - (44vw * 2)) / 3);

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoadingRecipes = () => {
  return (
    <>
      {[1, 2, 3].map(no => {
        return (
          <RecipeCard
            key={no}
            width="44vw"
            height="44vw"
            borderRadius={4}
            background="secondarySurface"
          >
            <div />
          </RecipeCard>
        );
      })}
    </>
  );
};
