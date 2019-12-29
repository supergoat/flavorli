import {IStep} from '../types';

export const steps: IStep[] = [
  {
    no: 1,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description: 'Place a pot of water in medium heat and set aside to boil',
    ingredients: [],
    kitchenware: [
      {
        qty: '1',
        name: 'Pot',
      },
    ],
  },
  {
    no: 2,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description: 'Place a sauce pan over high heat and add the olive oil',
    ingredients: [
      {
        qty: '4 - 6 tbsps',
        name: 'olive oil',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Sauce Pan',
      },
    ],
  },
  {
    no: 3,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Cut the eggplan into 1 cm cubes. Add it to the pan and sauté for 1-2 minutes',
    ingredients: [
      {
        qty: '2',
        name: 'eggplants',
      },
    ],
    kitchenware: [
      {qty: '1', name: 'Knife'},
      {qty: '1', name: 'Cutting Board'},
      {qty: '1', name: 'Spoon'},
    ],
  },
  {
    no: 4,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Finely chop the onion, add it to the pan and sauté for 1-2 minutes',
    ingredients: [
      {
        qty: '1',
        name: 'onion',
      },
    ],
    kitchenware: [],
  },
  {
    no: 5,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Cut the zucchinis and the peppers into small cubes and add them to the pan. Sauté for 4-5 minutes, until the vegetables are ready',
    ingredients: [
      {
        qty: '2',
        name: 'zucchinis',
      },
      {
        qty: '1',
        name: 'red bell pepper',
      },
      {
        qty: '1',
        name: 'green bell pepper',
      },
    ],
    kitchenware: [],
  },
  {
    no: 6,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Add the salt, pepper, oregano, thyme, chili flakes, sugar and tomato paste and sauté',
    ingredients: [
      {
        qty: '',
        name: 'salt',
      },
      {
        qty: '',
        name: 'pepper',
      },
      {
        qty: '1 tsp',
        name: 'oregano',
      },
      {
        qty: '1 tbsp',
        name: 'thyme',
      },
      {
        qty: '1 tsp',
        name: 'chilli flakes',
      },
      {
        qty: '1 tbsp',
        name: 'granulated sugar',
      },
      {
        qty: '1 tsp',
        name: 'tomato paste',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Tea Spoon',
      },
    ],
  },
  {
    no: 7,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Add the wine and canned tomatoes and simmer at medium-low heat for 10 minutes',
    ingredients: [
      {
        qty: '40 g',
        name: 'white wine',
      },
      {
        qty: '400 g',
        name: 'canned tomatoes',
      },
    ],
    timer: {id: 7, name: 'Step 7: Simmer Sauce', minutes: 10, seconds: 0},
    kitchenware: [{qty: '1', name: 'scale'}],
  },
  {
    no: 8,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [{from: 1, heading: 'From Step 1', name: 'Boiling water'}],
    description:
      'In the pot with boiling water, add salt along with the macaroni, and boil for ten minutes',
    ingredients: [
      {
        qty: '',
        name: 'salt',
      },
      {
        qty: '500 g',
        name: 'macaroni',
      },
    ],
    timer: {id: 8, name: 'Step 8: Cook Pasta', minutes: 10, seconds: 0},
    kitchenware: [],
  },
  {
    no: 9,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
    description: 'Preheat the oven at 180 C set to fan',
    ingredients: [],
    kitchenware: [],
  },
  {
    no: 10,
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    links: [],
    description:
      'Place a pot over medium heat. Add the olive oil and the flour and using a hand whisk, mix well until all of the flour is absorbed',
    ingredients: [
      {
        qty: '80 g',
        name: 'olive oil',
      },
      {
        qty: '80 g',
        name: 'all-purpose flour',
      },
    ],
    kitchenware: [
      {qty: '1', name: 'Small Pot'},
      {qty: '1', name: 'Hand Whisk'},
    ],
  },
  {
    no: 11,
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    links: [],
    description: 'Add the soy milk in 7-8 batches, stirring constantly',
    ingredients: [
      {
        qty: '800 g',
        name: 'soy milk',
      },
    ],
    kitchenware: [],
  },
  {
    no: 12,
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    links: [],
    description:
      'Season with salt and pepper and as soon as it thickens and comes to boil, remove from the heat',
    ingredients: [
      {
        qty: '',
        name: 'salt',
      },
      {
        qty: '',
        name: 'pepper',
      },
    ],
    kitchenware: [],
  },
  {
    no: 13,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [
      {
        from: 7,
        heading: 'From Step 7',
        name: 'Pan with vegetables',
        timerId: 7,
      },
      {
        from: 8,
        heading: 'From Step 8',
        name: 'Macaroni',
        timerId: 8,
      },
    ],
    description:
      'Drain the macaroni and transfer to the pan with the vegetables. Mix and set aside',
    ingredients: [],
    kitchenware: [{qty: '1', name: 'Colander'}],
  },
  {
    no: 14,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [{from: 12, heading: 'From Step 12', name: 'Bechamel sauce'}],
    description:
      'Add 100g of the bechamel into the pasta mixture, add oregano, mint, and mix well',
    ingredients: [
      {
        qty: '1 tsp',
        name: 'oregano',
      },
      {
        qty: '1 tbsp',
        name: 'mint',
      },
    ],
    kitchenware: [],
  },
  {
    no: 15,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
    description:
      'Grease 40 cm ovenproof baking dish with olive oil and sprinke the breadcrumps',
    ingredients: [
      {
        qty: '1 tbsp',
        name: 'olive oil',
      },
      {
        qty: '25 g',
        name: 'breadcrumps',
      },
    ],
    kitchenware: [{qty: '1', name: '40 cm ovenproof baking dish'}],
  },
  {
    no: 16,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
    description:
      'Add the pasta mixture, spread the bechamel sauce, and sprinke the breadcrumps, olive oil, thyme and pepper',
    ingredients: [
      {
        qty: '25 g',
        name: 'breadcrumps',
      },
      {
        qty: '1 tbsp',
        name: 'olive oil',
      },
      {
        qty: '1 tbsp',
        name: 'thyme',
      },
      {
        qty: '',
        name: 'pepper',
      },
    ],
    kitchenware: [],
  },
  {
    no: 17,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
    description: 'Bake for 25 - 30 minutes. Remove and let it cool',
    ingredients: [],
    timer: {id: 17, name: 'Step 17: Bake Pastitsio', minutes: 30, seconds: 0},
    kitchenware: [
      {
        qty: '1',
        name: 'Oven Mitts',
      },
    ],
  },
];
