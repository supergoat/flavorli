// https://www.youtube.com/watch?v=q1q3HfVvzQ0
import {ingredients} from './ingredients';
import {items} from './items';
import {preparationSteps} from './preparationSteps';
import {recipeSteps} from './recipeSteps';
import {IStepByStep} from '../../types';

export const stepByStep: IStepByStep = {
  intro: {
    name: 'Greek Pastitsio',
    image:
      'https://akispetretzikis.com/system/uploads/medium/data/14955/recipe_main_vegan-pastitsio.jpg',
    preparation: '25 minutes',
    cooking: '40 minutes',
    portions: '8 - 10',
    difficulty: 'Level 2',
  },
  ingredients,
  items,
  preparationSteps,
  recipeSteps,
};

export {ingredients, items, preparationSteps, recipeSteps};
