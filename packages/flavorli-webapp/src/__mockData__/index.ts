import {cheeseSauceRecipe} from './CheeseSauce/recipe';
import {cheeseSauceStepByStep} from './CheeseSauce/stepByStep';
import {greekPastitsioRecipe} from './GreekPastitsio/recipe';
import {greekPastitsioStepByStep} from './GreekPastitsio/stepByStep';

import {IRecipeWithTasks} from '../types';
import {IStepByStep} from '../StepByStep/types';

export const recipes: IRecipeWithTasks[] = [
  greekPastitsioRecipe,
  cheeseSauceRecipe,
];

export const stepByStepRecipes: IStepByStep[] = [
  greekPastitsioStepByStep,
  cheeseSauceStepByStep,
];
