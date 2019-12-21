export interface IStep {
  no: string;
  description: string;
  tag: {text: string; color: string};
  notifications: {
    heading: string;
    icon: string;
    name: string;
    description: string;
  }[];
  ingredients: {
    qty: string;
    name: string;
  }[];
  timer?: {name: string; minutes: number; seconds: number};
  kitchenwareItems: {
    qty: string;
    name: string;
  }[];
}

export interface INotification {
  heading: string;
  name: string;
  description: string;
}
