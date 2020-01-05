// https://www.youtube.com/watch?v=q1q3HfVvzQ0
import {introStep} from './introStep';
import {ingredients} from './ingredients';
import {items} from './items';
import {preparationSteps} from './preparationSteps';
import {recipeSteps} from './recipeSteps';
import {IStepByStep} from '../../types';

export const stepByStep: IStepByStep = {
  intro: introStep,
  ingredients,
  items,
  preparationSteps,
  recipeSteps,
};

export {introStep, ingredients, items, preparationSteps, recipeSteps};
