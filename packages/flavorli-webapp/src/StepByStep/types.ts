import {IColor} from '@flavorli/elements/lib/theme/colors';

export interface ITag {
  text: string;
  color: IColor;
}

export interface ILink {
  heading: string;
  name: string;
  from: number;
  timerId?: number;
}

export interface IIngredient {
  qty: string;
  name: string;
}

export interface ITimer {
  id: number;
  name: string;
  minutes: number;
  seconds: number;
  isPaused?: boolean;
}

export interface IKitchenware {
  qty: string;
  name: string;
}

export interface IImage {
  src: string;
  alt: string;
}
export interface IRecipeStep {
  no: number;
  description: string;
  tag: ITag;
  links: ILink[];
  ingredients: IIngredient[];
  timer?: ITimer;
  kitchenware: IKitchenware[];
  images?: IImage[];
}

export interface IItem {
  qty: string;
  name: string;
}

export interface IPreparationStep {
  description: string;
  tag: ITag;
  ingredients: IIngredient[];
  kitchenware: IKitchenware[];
  images?: IImage[];
}

export interface IIntroStep {
  name: string;
  image: string;
  preparation: string;
  cooking: string;
  portions: string;
  difficulty: string;
}

export type IStep = IIntroStep | IPreparationStep;

export type IStepByStep = {
  intro: IIntroStep;
  ingredients: IIngredient[];
  items: IItem[];
  preparationSteps: IPreparationStep[];
  recipeSteps: IRecipeStep[];
};
