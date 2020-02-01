import {IRecipe} from '../types';

export const recipes: IRecipe[] = [
  {
    id: '1',
    createdAt: '2020-01-19T19:37:42.873Z',
    author: 'Robin Robertson',
    name: 'Cherry Berry Smoothie',
    image:
      'https://flavorli-bucket-2.s3.eu-west-2.amazonaws.com/CherryBerrySmoothie.jpeg',
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
          'Add 1 cup/100 g Frozen Blueberries in a blender',
          'Add 1/2 cup/110 g fresh or frozen pitted cherries',
          'Add 1 frozen ripe banana, cut into chunks before freezing',
          'Add 1 tbsp ground flaxseeds (or linseeds)',
          'Add 1 tbsp almond butter (or peanut butter)',
          'Add 1 cup/22.5 g raw spinach leaves',
          'Add 1 1/2 cup cup (360 ml) water',
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
          'Blend all the ingredients until smooth and creamy for about 1 minute',
          'Add more water if you prefer a thinner consistency',
          'Serve immediately',
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
