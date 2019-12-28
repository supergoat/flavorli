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
}

export interface IKitchenware {
  qty: string;
  name: string;
}
export interface IStep {
  no: number;
  description: string;
  tag: ITag;
  links: ILink[];
  ingredients: IIngredient[];
  timer?: ITimer;
  kitchenware: IKitchenware[];
}
