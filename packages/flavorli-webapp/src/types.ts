import {IColor} from '@flavorli/elements/lib/theme/colors';

export type IRecipe = {
  id: string;
  author: string;
  name: string;
  image: string;
  preparationTime: number;
  cookingTime: number;
  portions: string;
  difficulty: string;
  createdAt: string;
  ingredients: IIngredient[];
  items: IItem[];
  steps: IStep[];
};

export interface IIngredient {
  qty: string;
  name: string;
}

export interface IItem {
  qty: string;
  name: string;
}

export interface IStep {
  type: 'MISE_EN_PLACE' | 'PREPARATION';
  no?: number;
  tag: ITag;
  links?: ILink[];
  items?: IItem[];
  ingredients?: IIngredient[];
  tasks: string[];
  timer?: ITimer;
  images?: IImage[];
}

export interface ITag {
  text: string;
  color: IColor;
}

export interface ITimer {
  id: string;
  name: string;
  minutes: number;
  seconds: number;
}

export interface IRecipeTimer {
  id: string;
  name: string;
  minutes: number;
  seconds: number;
  isPaused: boolean;
  updatedAt: string;
  remainingTime: number;
}

export interface IImage {
  src: string;
  alt: string;
}

export interface ILink {
  heading: string;
  name: string;
  from: number;
  timerId?: string;
}
