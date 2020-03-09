import {IColor} from '@flavorli/elements/lib/theme/colors';

export type IRecipe = {
  id: string;
  author: string;
  name: string;
  image?: string;
  video?: string;
  preparationTime: number;
  cookingTime: number;
  portions: string;
  difficulty: string;
  notes?: string[];
  createdAt: string;
  ingredients: IIngredient[];
  items: IItem[];
  steps: IStep[];
};

export interface IIngredient {
  qty: string;
  name: string;
  notes?: string;
  link?: string;
}

export interface IItem {
  qty: string;
  name: string;
  notes?: string;
  link?: string;
}

export interface IStep {
  for: string;
  links?: ILink[];
  heatLevel?: 'low' | 'mediumLow' | 'medium' | 'high';
  ovenTemperature?: string;
  tasks: ITask[];
  notes?: string[];
  images?: IImage[];
  video?: string;
}

export interface ITask {
  name: string;
  notes?: string[];
  timer?: ITimer;
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
  from: number;
  name: string;
  timerId?: string;
}

export interface IUser {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  cookbooks: ICookbook[];
}

export interface ICookbook {
  id: string;
  name: string;
  recipes: IRecipe[];
}
