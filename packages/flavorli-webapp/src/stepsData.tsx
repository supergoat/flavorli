import {IStep} from './types';

export const steps: IStep[] = [
  {
    no: '1',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [],
    description: 'Place a pot of water in medium heat and set aside to boil',
    ingredients: [],
    kitchenwareItems: [
      {
        qty: '1',
        name: 'Pot',
      },
    ],
  },
  {
    no: '2',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [],
    description: 'Place a sauce pan over high heat and add the olive oil',
    ingredients: [
      {
        qty: '4 - 6 tbsps',
        name: 'olive oil',
      },
    ],
    kitchenwareItems: [
      {
        qty: '1',
        name: 'Sauce Pan',
      },
    ],
  },
  {
    no: '3',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [],
    description:
      'Cut the eggplan into 1 cm cubes. Add it to the pan and sauté for 1-2 minutes',
    ingredients: [
      {
        qty: '2',
        name: 'eggplants',
      },
    ],
    kitchenwareItems: [
      {qty: '1', name: 'Knife'},
      {qty: '1', name: 'Cutting Board'},
      {qty: '1', name: 'Spoon'},
    ],
  },
  {
    no: '4',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [],
    description:
      'Finely chop the onion, add it to the pan and sauté for 1-2 minutes',
    ingredients: [
      {
        qty: '1',
        name: 'onion',
      },
    ],
    kitchenwareItems: [],
  },
  {
    no: '5',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [],
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
    kitchenwareItems: [],
  },
  {
    no: '6',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [],
    description:
      'Add the salt, pepper, oregano, thyme, chili flakes, sugar and tomato paste and sauté',
    ingredients: [
      {
        qty: '-',
        name: 'salt',
      },
      {
        qty: '-',
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
    kitchenwareItems: [
      {
        qty: '1',
        name: 'Tea Spoon',
      },
    ],
  },
  {
    no: '7',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [],
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
    timer: {name: '7. Simmer Sauce', minutes: 10, seconds: 0},
    kitchenwareItems: [{qty: '1', name: 'scale'}],
  },
  {
    no: '8',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [
      {
        heading: 'From Step 1',
        name: 'Boiling water',
        icon: 'cookingTime',
        description:
          'Place a pot of water on medium heat and set aside to boil',
      },
    ],
    description:
      'In the pot with boiling water, add salt along with the macaroni, and boil for ten minutes',
    ingredients: [
      {
        qty: '-',
        name: 'salt',
      },
      {
        qty: '500 g',
        name: 'macaroni',
      },
    ],
    timer: {name: '8. Cook Pasta', minutes: 10, seconds: 0},
    kitchenwareItems: [],
  },
  {
    no: '9',
    tag: {
      text: 'Assembling',
      color: '#C69FB4',
    },
    notifications: [],
    description: 'Preheat the oven at 180 C set to fan',
    ingredients: [],
    kitchenwareItems: [],
  },
  {
    no: '10',
    tag: {
      text: 'Bechamel',
      color: '#CC3E1E',
    },
    notifications: [],
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
    kitchenwareItems: [
      {qty: '1', name: 'Small Pot'},
      {qty: '1', name: 'Hand Whisk'},
    ],
  },
  {
    no: '11',
    tag: {
      text: 'Bechamel',
      color: '#CC3E1E',
    },
    notifications: [],
    description: 'Add the soy milk in 7-8 batches, stirring constantly',
    ingredients: [
      {
        qty: '800 g',
        name: 'soy milk',
      },
    ],
    kitchenwareItems: [],
  },
  {
    no: '12',
    tag: {
      text: 'Bechamel',
      color: '#CC3E1E',
    },
    notifications: [],
    description:
      'Season with salt and pepper and as soon as it thickens and comes to boil, remove from the heat',
    ingredients: [
      {
        qty: '-',
        name: 'salt',
      },
      {
        qty: '-',
        name: 'pepper',
      },
    ],
    kitchenwareItems: [],
  },
  {
    no: '13',
    tag: {
      text: 'Sauce',
      color: '#0E2D7B',
    },
    notifications: [
      {
        heading: 'From Step 7',
        icon: 'cookingTime',
        name: 'Pan with vegetables',
        description:
          'Add the wine and canned tomatoes and simmer at medium-low heat for 10 minutes',
      },
      {
        heading: 'From Step 8',
        icon: 'cookingTime',
        name: 'Macaroni',
        description:
          'In the pot with boiling water, add salt along with the macaroni, and boil for ten minutes',
      },
    ],
    description:
      'Drain the macaroni and transfer to the pan with the vegetables. Mix and set aside',
    ingredients: [],
    kitchenwareItems: [{qty: '1', name: 'Colander'}],
  },
  {
    no: '14',
    tag: {
      text: 'Assembling',
      color: '#C69FB4',
    },
    notifications: [
      {
        heading: 'From Step 12',
        icon: 'cookingTime',
        name: 'Bechamel sauce',
        description:
          'Season with salt and pepper and as soon as it thickens and comes to boil, remove from the heat',
      },
    ],
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
    kitchenwareItems: [],
  },
  {
    no: '15',
    tag: {
      text: 'Assembling',
      color: '#C69FB4',
    },
    notifications: [],
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
    kitchenwareItems: [{qty: '1', name: '40 cm ovenproof baking dish'}],
  },
  {
    no: '16',
    tag: {
      text: 'Assembling',
      color: '#C69FB4',
    },
    notifications: [],
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
        qty: '-',
        name: 'pepper',
      },
    ],
    kitchenwareItems: [],
  },
  {
    no: '17',
    tag: {
      text: 'Assembling',
      color: '#C69FB4',
    },
    notifications: [],
    description: 'Bake for 25 - 30 minutes. Remove and let it cool',
    ingredients: [],
    timer: {name: '17. Bake Pastitsio', minutes: 30, seconds: 0},
    kitchenwareItems: [
      {
        qty: '1',
        name: 'Oven Mitts',
      },
    ],
  },
];
