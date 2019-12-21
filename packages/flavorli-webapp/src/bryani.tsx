import {IStep} from './types';

export const steps: IStep[] = [
  {
    no: '1',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    description:
      'Soak the rice for at least 10 minutes. Drain the water and set aside',
    ingredients: [
      {
        qty: '200 g',
        name: 'basmati rice',
      },
    ],
    kitchenwareItems: [],
    notifications: [],
    timer: {
      name: 'basmati rice',
      minutes: 10,
      seconds: 0,
    },
  },
  {
    no: '2',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    notifications: [],
    description: 'Place a frying pan over high heat and add the olive oil',
    ingredients: [
      {
        qty: '4 - 6 tbsps',
        name: 'olive oil',
      },
    ],
    kitchenwareItems: [
      {
        qty: '1',
        name: 'Frying Pan',
      },
    ],
  },
  {
    no: '3',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    notifications: [],
    ingredients: [
      {
        qty: '1 medium',
        name: 'onion',
      },
    ],
    description: 'Slice the onion. Add it to the pan and sauté for 1-2 minutes',
    kitchenwareItems: [],
  },
  {
    no: '4',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    notifications: [],
    ingredients: [
      {
        qty: '170 g',
        name: 'carrot',
      },
    ],
    description:
      'Dice the carrots and add them to the frying pan and sauté for 3-4 minutes whilst regulary turning until slightly softened',
    kitchenwareItems: [
      {
        qty: '1',
        name: 'Frying Pan',
      },
    ],
  },
  {
    no: '5',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    notifications: [],
    ingredients: [
      {
        qty: 'pinch',
        name: 'tumeric',
      },
      {
        qty: 'pinch',
        name: 'cinnamon',
      },
      {
        qty: 'pinch',
        name: 'cayenne pepper',
      },
      {
        qty: '2 tsp',
        name: 'smoked paprika',
      },
      {
        qty: '1 tsp',
        name: 'garam masala',
      },
      {
        qty: '1 tsp',
        name: 'ground coriander',
      },
      {
        qty: '1 tsp',
        name: 'cumin',
      },
      {
        qty: '1 tsp',
        name: 'salt',
      },
      {qty: '1 tsp', name: 'chilli flakes'},
    ],
    description:
      'Add the spices to the frying pan and stir well to coat the carrots evenly',
    kitchenwareItems: [],
  },
  {
    no: '6',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    notifications: [],
    kitchenwareItems: [],
    ingredients: [
      {
        qty: '400 g',
        name: 'Chickpeas',
      },
      {
        qty: '1 tsp',
        name: ' ginger',
      },
      {
        qty: '1 tbsp double concentrated',
        name: 'tomato puree',
      },
    ],
    description:
      'Add the ginger to the frying pan along with the chickpeas and tomato puree and briefly stir',
  },
  {
    no: '7',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    notifications: [
      {
        heading: 'From Step 1',
        name: 'Soaked basmati rice',
        description:
          'Soak the rice for at least 10 minutes. Drain the water and set aside',
        icon: 'cookingTime',
      },
    ],
    kitchenwareItems: [],
    ingredients: [
      {
        qty: '2 russet',
        name: 'potatoes',
      },
      {
        qty: '1 cup',
        name: 'cauliflower florets',
      },
    ],
    description:
      'Peel and chop the potatoes. Cut the cauliflower into large pieces. Add the potatoes and the cauliflower florets to the frying pan along with soaked basmati rice. Stir until everything is well coated in spices.',
  },
  {
    no: '8',
    tag: {
      text: 'Biryani',
      color: '#0E2D7B',
    },
    notifications: [],
    kitchenwareItems: [],
    ingredients: [
      {
        qty: '1',
        name: 'stock cube',
      },
      {
        qty: '700 ml',
        name: 'water',
      },
    ],
    description:
      'Crumble the stock cube and add the water to the pan and bring to boil. Stir occasionally, and bring down to a simmer until all the water has gone and rice is well cooked.',
    timer: {
      name: 'Reduced Biryani',
      minutes: 10,
      seconds: 0,
    },
  },
  {
    no: '9',
    tag: {
      text: 'Mint Raita',
      color: '#CC3E1E',
    },
    notifications: [],
    kitchenwareItems: [{qty: '1', name: 'Blender'}],
    ingredients: [
      {
        qty: '200g',
        name: 'plain coconut yoghurt',
      },
      {
        qty: '2 tbsps',
        name: 'mint leaves',
      },
      {
        qty: '1/2 tsp',
        name: 'cumin',
      },
    ],
    description:
      "Place all the ingredients into a blender and blend them altogether briefly until smooth. If you don't have a blender then finely chop",
  },
  {
    no: '10',
    tag: {
      text: 'Assembling',
      color: '#C69FB4',
    },
    notifications: [
      {
        heading: 'From Step 8',
        name: 'Reduce biryani',
        description:
          'Crumble the stock cube and add the water to the pan and bring to boil. Stir occasionally, and bring down to a simmer until all the water has gone and rice is well cooked.',
        icon: 'cookingTime',
      },
      {
        heading: 'From Step 9',
        name: 'Mint Raita',
        description:
          "Place all the ingredients into a blender and blend them altogether briefly until smooth. If you don't have a blender then finely chop",
        icon: 'cookingTime',
      },
    ],
    kitchenwareItems: [],
    ingredients: [],
    description: 'Serve up the biryani in a bowl with a dollop of mint raita',
  },
];
