import {IStep, IRecipeTimer, ILink, IRecipe} from '../types';

export const recipes: IRecipe[] = [
  {
    id: '1',
    createdAt: '2020-01-19T19:37:42.873Z',
    author: 'Robin Robertson',
    name: 'Cherry Berry Smoothie',
    image: 'image.jpeg',
    preparationTime: 7,
    cookingTime: 0,
    portions: '1',
    difficulty: '1',
    ingredients: [
      {
        qty: '1 cup/100 g',
        name: 'Frozen Blueberries',
      },
      {
        qty: '1/2 cup/110 g',
        name: 'fresh or frozen pitted cherries',
      },
      {
        qty: '1',
        name: 'frozen ripe banana, cut into chunks before freezing',
      },
      {
        qty: '1 tbsp',
        name: 'ground flaxseeds (or linseeds)',
      },
      {
        qty: '1 tbsp',
        name: 'almond butter (or peanut butter)',
      },
      {
        qty: '1 cup/22.5 g',
        name: 'raw spinach leaves',
      },
      {
        qty: '1 1/2 cup (360 ml)',
        name: 'water',
      },
    ],
    items: [
      {
        qty: '1',
        name: 'Blender',
      },
      {
        qty: '1',
        name: 'Cup',
      },
      {
        qty: '1/2',
        name: 'cup',
      },
      {
        qty: '1',
        name: 'tablespoon',
      },
    ],
    steps: [
      {
        no: 1,
        type: 'MISE_EN_PLACE',
        tag: {
          text: 'Smoothie',
          color: 'tagRed',
        },
        items: [
          {
            qty: '1',
            name: 'Blender',
          },
        ],
        ingredients: [
          {
            qty: '1 cup/100 g',
            name: 'Frozen Blueberries',
          },
          {
            qty: '1/2 cup/110 g',
            name: 'fresh or frozen pitted cherries',
          },
          {
            qty: '1',
            name: 'frozen ripe banana, cut into chunks before freezing',
          },
          {
            qty: '1 tbsp',
            name: 'ground flaxseeds (or linseeds)',
          },
          {
            qty: '1 tbsp',
            name: 'almond butter (or peanut butter)',
          },
          {
            qty: '1 cup/22.5 g',
            name: 'raw spinach leaves',
          },
          {
            qty: '1 1/2 cup (360 ml)',
            name: 'water',
          },
        ],
        tasks: [
          {name: 'Add 1 cup/100 g Frozen Blueberries in a blender'},
          {name: 'Add 1/2 cup/110 g fresh or frozen pitted cherries'},
          {name: 'Add 1 frozen ripe banana, cut into chunks before freezing'},
          {name: 'Add 1 tbsp ground flaxseeds (or linseeds)'},
          {name: 'Add 1 tbsp almond butter (or peanut butter)'},
          {name: 'Add 1 cup/22.5 g raw spinach leaves'},
          {name: 'Add 1 1/2 cup cup (360 ml) water'},
        ],
        images: [],
      },
      {
        no: 2,
        type: 'PREPARATION',
        tag: {
          text: 'Smoothie',
          color: 'tagRed',
        },
        items: [],
        ingredients: [],
        tasks: [
          {
            name:
              'Blend all the ingredients until smooth and creamy for about 1 minute',
          },
          {name: 'Add more water if you prefer a thinner consistency'},
          {name: 'Serve immediately'},
        ],
        timer: {
          id: '2',
          name: 'Step 2: Blend',
          minutes: 1,
          seconds: 0,
        },
        images: [],
      },
    ],
  },
];

export const timer: IRecipeTimer = {
  id: '1',
  name: 'Thicken Sauce',
  minutes: 10,
  seconds: 0,
  isPaused: true,
  updatedAt: '2020-01-26T15:15:06.689Z',
  remainingTime: 600000,
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
  timerId: '1',
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
  tasks: [
    {name: 'Add the coconul oil in a ramekin and place it first in order'},
  ],
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
  tasks: [{name: 'Heat the coconut oil in a small pot on low heat'}],
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
