import {useParams} from 'react-router-dom';
import {useQuery} from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';
import {IRecipe} from '../types';

const useFetchRecipeQuery = graphql`
  query useFetchRecipeQuery($id: String!) {
    recipe(id: $id) {
      id
      author
      name
      image
      preparationTime
      cookingTime
      portions
      difficulty
      ingredients {
        qty
        name
      }
    }
  }
`;

function useFetchRecipe() {
  const {recipeId} = useParams();
  const data = useQuery(
    useFetchRecipeQuery,
    {id: recipeId},
    {
      fetchPolicy: 'store-or-network', //default
      networkCacheConfig: undefined,
    },
  );

  const error = data.error;
  const props = data.props as {recipe: IRecipe};

  let result = {
    loading: false,
    recipe: null,
    error: null,
  };

  const recipe = props?.recipe;

  if (recipe) {
    return {
      ...result,
      recipe,
    };
  } else if (error) {
    return {
      ...result,
      error,
    };
  }
  return {
    ...result,
    loading: true,
  };
}

export default useFetchRecipe;
