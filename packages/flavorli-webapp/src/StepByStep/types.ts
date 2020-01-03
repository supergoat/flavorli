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
export interface IStep {
  type: 'PREPARATION' | 'MISE_EN_PLACE_STEP';
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

export interface IMiseEnPlaceStep {
  no: number;
  type: 'MISE_EN_PLACE';
  heading: string;
  image: string;
  items: IItem[];
}

export interface IIntro {
  type: 'INTRO';
  name: string;
  image: string;
  preparation: string;
  cooking: string;
  portions: string;
  difficulty: string;
}
