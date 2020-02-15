import {IRecipe} from '../types';

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
