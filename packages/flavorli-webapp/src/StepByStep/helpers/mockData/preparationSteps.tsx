import {IPreparationStep} from '../../types';

export const preparationSteps: IPreparationStep[] = [
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description:
      'Add the oregano, thyme, chili flakes, sugar and tomato paste into ramekins and set aside',
    ingredients: [
      {
        qty: '1 teaspoon',
        name: 'oregano',
      },
      {
        qty: '1 tablespoon',
        name: 'thyme',
      },
      {
        qty: '1 teaspoon',
        name: 'chili flakes',
      },
      {
        qty: '1 tablespoon',
        name: 'granulated sugar',
      },
      {
        qty: '1 tablespoon',
        name: 'tomato paste',
      },
    ],
    kitchenware: [
      {
        qty: '5',
        name: 'Ramekins',
      },
    ],
    images: [],
  },
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description:
      'Measure the wine in a glass and set aside. Wash and wipe the can of tomatoes and set aside',
    ingredients: [
      {
        qty: '50 g',
        name: 'white wine',
      },
      {
        qty: '400 g',
        name: 'canned tomatoes',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Glass',
      },
    ],
    images: [],
  },
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description: 'Measure the macaroni and set aside in a bowl',
    ingredients: [
      {
        qty: '500 g',
        name: 'macaroni',
      },
    ],
    kitchenware: [],
    images: [],
  },
  {
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    description:
      'Measure the olive oil in a glass and set aside. Measure the flour in a glass and set aside.',
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
    kitchenware: [{qty: '2', name: 'Glass'}],
    images: [],
  },
  {
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    description: 'Set a carton of soy milk aside',
    ingredients: [
      {
        qty: '800 g',
        name: 'soy milk',
      },
    ],
    kitchenware: [],
    images: [],
  },
  {
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    description: 'Add the oregano and mint into ramekins',
    ingredients: [
      {
        qty: '1 teaspoon',
        name: 'oregano',
      },
      {
        qty: '1 tablespoon',
        name: 'mint',
      },
    ],
    kitchenware: [
      {
        qty: '2',
        name: 'Ramekin',
      },
    ],
    images: [],
  },
  {
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    description: 'Add the breadcrumps in a glass',
    ingredients: [
      {
        qty: '50 g',
        name: 'breadcrumps',
      },
    ],
    kitchenware: [{qty: '1', name: 'Glass'}],
    images: [],
  },
  {
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    description: 'Add the thyme into a ramekin',
    ingredients: [
      {
        qty: '1 tablespoon',
        name: 'thyme',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Ramekin',
      },
    ],
    images: [],
  },
  {
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    description: 'Add the oregano and mint into ramekins',
    ingredients: [
      {
        qty: '1 oregano',
        name: 'thyme',
      },
      {
        qty: '1 tablespoon',
        name: 'mint',
      },
    ],
    kitchenware: [
      {
        qty: '2',
        name: 'Ramekins',
      },
    ],
    images: [],
  },
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description: 'Cut the eggplants into 1 cm cubes and place them in a bowl',
    ingredients: [
      {
        qty: '2',
        name: 'eggplants',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Bowl',
      },
    ],
    images: [
      {
        src: require('../../images/eggplant_1.png'),
        alt: 'Chef cutting the top of the eggplant off',
      },
      {
        src: require('../../images/eggplant_2.png'),
        alt:
          'Chef placing the eggplant vertically, with the cut top facing upward, cutting the eggplant into columns',
      },
      {
        src: require('../../images/eggplant_3.png'),
        alt:
          'Chef stacking half the eggplant columns horizontally and cutting the eggplant in columns',
      },
      {
        src: require('../../images/eggplant_4.png'),
        alt: '',
      },
      {
        src: require('../../images/eggplant_5.png'),
        alt:
          'Chef putting the eggplant together and cutting into little squares',
      },
    ],
  },
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description: 'Finely chop the onion and place it in a ramekin',
    ingredients: [
      {
        qty: '1',
        name: 'onion',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Ramekin',
      },
    ],
    images: [
      {
        src: require('../../images/onion_1.png'),
        alt: 'Cutting Onion 1',
      },
      {
        src: require('../../images/onion_2.png'),
        alt: 'Cutting Onion 2',
      },
      {
        src: require('../../images/onion_3.png'),
        alt: 'Cutting Onion 3',
      },
    ],
  },
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description: 'Finely chop the garlic and place it in a ramekin',
    ingredients: [
      {
        qty: '1',
        name: 'garlic',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Ramekin',
      },
    ],
    images: [
      {
        src: require('../../images/garlic.png'),
        alt: 'Cutting Garlic 1',
      },
    ],
  },
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description: 'Cut the zucchinis into small cubes and place them in a bowl',
    ingredients: [
      {
        qty: '2',
        name: 'zucchinis',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Bowl',
      },
    ],
    images: [
      {
        src: require('../../images/zucchini_1.png'),
        alt: 'Cutting Zucchini 1',
      },
      {
        src: require('../../images/zucchini_2.png'),
        alt: 'Cutting Zucchini  2',
      },
      {
        src: require('../../images/zucchini_3.png'),
        alt: 'Cutting Zucchini 3',
      },
      {
        src: require('../../images/zucchini_4.png'),
        alt: 'Cutting Zucchini 4',
      },
    ],
  },
  {
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    description:
      'Cut the the peppers into small cubes and place them in a small bowl',
    ingredients: [
      {
        qty: '1',
        name: 'red bell pepper',
      },
      {
        qty: '1',
        name: 'green bell pepper',
      },
    ],
    kitchenware: [
      {
        qty: '1',
        name: 'Small Bowl',
      },
    ],
    images: [
      {
        src: require('../../images/pepper.png'),
        alt: 'Cutting the peppers 1',
      },
    ],
  },
];
