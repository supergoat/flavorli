import {IStep, ITimer, ILink, IRecipe} from '../types';
import {recipes} from '../__mockData__';

export const stepByStep: IRecipe = recipes[0];

export const timer: ITimer = {
  id: 1,
  name: 'Thicken Sauce',
  minutes: 10,
  seconds: 0,
  isPaused: false,
};

export const link: ILink = {
  from: 1,
  heading: 'From Step 1',
  name: 'Thicken Sauce',
};

export const linkWithTimer: ILink = {
  from: 1,
  heading: 'From Step 1',
  name: 'Thicken Sauce',
  timerId: 1,
};

export const items = [
  {
    qty: '1',
    name: 'Pot',
  },
];

export const preparationStep: IStep = {
  type: 'MISE_EN_PLACE',
  tag: {
    text: 'Sauce',
    color: 'tagRed',
  },
  tasks: ['Add the coconul oil in a ramekin and place it first in order'],
  ingredients: [
    {
      qty: '2 tbsps',
      name: 'coconut oil',
    },
  ],
  items: [
    {
      qty: '1',
      name: 'Ramekin',
    },
  ],
  images: [],
};

export const recipeStep: IStep = {
  type: 'PREPARATION',
  no: 1,
  tag: {
    text: 'Sauce',
    color: 'tagRed',
  },
  links: [],
  tasks: ['Heat the coconut oil in a small pot on low heat'],
  ingredients: [
    {
      qty: '2 tbsps',
      name: 'coconut oil',
    },
  ],
  items: [
    {
      qty: '1',
      name: 'Small Pot',
    },
  ],
  images: [],
};

export const recipeSteps = [recipeStep];

export const introStep = {
  author: 'Akis Petratzikis',
  name: 'Greek Pastitsio',
  image: '',
  preparation: '25 minutes',
  cooking: '40 minutes',
  portions: '8 - 10',
  difficulty: 'Level 2',
};

export const ingredients = [{qty: '1', name: 'Onion'}];

export const images = [
  {
    src: '',
    alt: 'image 1',
  },

  {
    src: '',
    alt: 'image 2',
  },
];
