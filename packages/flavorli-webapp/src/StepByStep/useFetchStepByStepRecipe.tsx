import {useParams} from 'react-router-dom';
import {stepByStepRecipes} from '../__mockData__';

function useFetchStepByStepRecipe() {
  const {recipeId} = useParams();

  if (!recipeId) return stepByStepRecipes[0];
  const stepByStep = stepByStepRecipes[+recipeId - 1];

  return stepByStep;
}

export default useFetchStepByStepRecipe;
