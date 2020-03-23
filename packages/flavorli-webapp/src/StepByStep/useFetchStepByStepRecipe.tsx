import {useParams} from 'react-router-dom';
import {useQuery} from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';
import {IRecipe} from '../types';

const useFetchStepByStepRecipeQuery = graphql`
  query useFetchStepByStepRecipeQuery($id: String!) {
    recipe(id: $id) {
      id
      author
      name
      image
      video
      preparationTime
      cookingTime
      portions
      difficulty
      notes
      ingredients {
        for
        list {
          name
          qty
          notes
          link
        }
      }
      items {
        name
        qty
        notes
        link
      }
      steps {
        for
        heatLevel
        ovenTemperature
        links {
          from
          name
          timerId
        }
        notes
        video
        images {
          src
          alt
        }

        tasks {
          name
          notes
          timer {
            id
            name
            minutes
            seconds
          }
        }
      }
    }
  }
`;

function useFetchStepByStepRecipe() {
  const {recipeId} = useParams();
  const data = useQuery(
    useFetchStepByStepRecipeQuery,
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

  const recipe = props?.recipe as IRecipe;

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

export default useFetchStepByStepRecipe;
