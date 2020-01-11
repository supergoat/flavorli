import {useParams} from 'react-router-dom';
import {recipes} from '../__mockData__';

function useFetchRecipe() {
  const {recipeId} = useParams();

  if (!recipeId) return recipes[0];
  const recipe = recipes[+recipeId - 1];

  return recipe;
}

export default useFetchRecipe;
