import {useQuery} from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';
import {IRecipe} from '../types';

const useFetchRecipeListQuery = graphql`
  query useFetchRecipeListQuery {
    recipes {
      id
      author
      name
      image
      preparationTime
      cookingTime
      portions
      difficulty
    }
  }
`;

function useFetchRecipeList() {
  const data = useQuery(
    useFetchRecipeListQuery,
    {},
    {
      fetchPolicy: 'store-or-network', //default
      networkCacheConfig: undefined,
    },
  );

  const error = data.error;
  const props = data.props as {recipes: IRecipe[]};

  console.log(props);
  let result = {
    loading: false,
    recipes: null,
    error: null,
  };

  const recipes = props?.recipes;

  if (recipes) {
    return {
      ...result,
      recipes,
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

export default useFetchRecipeList;
