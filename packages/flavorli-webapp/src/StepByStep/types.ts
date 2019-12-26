export interface ITag {
  text: string;
  color: string;
}

export interface ILink {
  heading: string;
  name: string;
}

export interface IIngredient {
  qty: string;
  name: string;
}

export interface ITimer {
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
