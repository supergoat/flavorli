import {IStep, IMiseEnPlaceStep, IIntro} from '../types';

// https://www.youtube.com/watch?v=q1q3HfVvzQ0

export const miseEnPlace: IMiseEnPlaceStep[] = [
  {
    no: 1,
    type: 'MISE_EN_PLACE',
    heading: 'Ingredients',
    image: require('../images/salad.svg'),
    items: [
      {
        qty: '2',
        name: 'eggplants',
      },
      {
        qty: '1',
        name: 'onion',
      },
      {
        qty: '1 clove',
        name: 'garlic',
      },
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
      {
        qty: '2 teaspoon',
        name: 'oregano',
      },
      {
        qty: '2 tablespoon',
        name: 'thyme',
      },
      {
        qty: '1 teaspoon',
        name: 'chilli flakes',
      },
      {
        qty: '1 tablespoon',
        name: 'granulated sugar',
      },
      {
        qty: '1 tablespoon',
        name: 'tomato paste',
      },
      {
        qty: '50 g',
        name: 'white wine',
      },
      {
        qty: '400 g',
        name: 'canned tomatoes',
      },
      {
        qty: '500 g',
        name: 'macaroni',
      },
      {
        qty: '80 g',
        name: 'all-purpose flour',
      },
      {
        qty: '80 g',
        name: 'olive oil',
      },
      {
        qty: '800 g',
        name: 'soy milk',
      },
      {
        qty: '50 g',
        name: 'dry breadcrumps',
      },
      {
        qty: '1 tablespoon',
        name: 'mint',
      },
      {
        qty: '1',
        name: 'squeeze bottle olive oil',
      },
      {
        qty: '',
        name: 'salt',
      },
      {
        qty: '',
        name: 'pepper',
      },
    ],
  },

  {
    no: 2,
    type: 'MISE_EN_PLACE',
    heading: 'Items',
    image: require('../images/box.svg'),
    items: [
      {
        qty: '2',
        name: 'Bowls',
      },
      {
        qty: '1',
        name: 'Small Bowl',
      },
      {
        qty: '3',
        name: 'Glasses',
      },
      {
        qty: '11',
        name: 'Ramekins',
      },
      {
        qty: '1',
        name: 'Sauce Pan',
      },
      {
        qty: '1',
        name: 'Pot',
      },
      {
        qty: '1',
        name: 'Small Pot',
      },
      {
        qty: '1',
        name: 'Cutting Board',
      },
      {
        qty: '1',
        name: 'Scale',
      },
      {
        qty: '1',
        name: 'Hand Whisk',
      },
      {
        qty: '1',
        name: 'Colander',
      },
      {
        qty: '1',
        name: '40 cm ovenproof dish',
      },
    ],
  },
];

export const preparationSteps: IStep[] = [
  {
    type: 'MISE_EN_PLACE_STEP',
    no: 1,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 2,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 3,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 4,
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 5,
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 6,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 7,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 8,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 9,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
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
    type: 'MISE_EN_PLACE_STEP',
    no: 10,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
        src: require('../images/eggplant_1.png'),
        alt: 'Cutting eggplant',
      },
      {
        src: require('../images/eggplant_2.png'),
        alt: 'Cutting eggplant',
      },
      {
        src: require('../images/eggplant_3.png'),
        alt: 'Cutting eggplant',
      },
      {
        src: require('../images/eggplant_4.png'),
        alt: 'Cutting eggplant',
      },
      {
        src: require('../images/eggplant_5.png'),
        alt: 'Cutting eggplant',
      },
    ],
  },
  {
    type: 'MISE_EN_PLACE_STEP',
    no: 11,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
        src: require('../images/onion_1.png'),
        alt: 'Cutting Onion',
      },
      {
        src: require('../images/onion_2.png'),
        alt: 'Cutting Onion',
      },
      {
        src: require('../images/onion_3.png'),
        alt: 'Cutting Onion',
      },
    ],
  },
  {
    type: 'MISE_EN_PLACE_STEP',
    no: 12,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
        src: require('../images/garlic.png'),
        alt: 'Cutting Garlic',
      },
    ],
  },
  {
    type: 'MISE_EN_PLACE_STEP',
    no: 13,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
        src: require('../images/zucchini_1.png'),
        alt: 'Cutting Zucchini',
      },
      {
        src: require('../images/zucchini_2.png'),
        alt: 'Cutting Zucchini',
      },
      {
        src: require('../images/zucchini_3.png'),
        alt: 'Cutting Zucchini',
      },
      {
        src: require('../images/zucchini_4.png'),
        alt: 'Cutting Zucchini',
      },
    ],
  },
  {
    type: 'MISE_EN_PLACE_STEP',
    no: 14,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
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
        src: require('../images/pepper.png'),
        alt: 'Cutting the peppers',
      },
    ],
  },
];

export const steps: IStep[] = [
  {
    type: 'PREPARATION',
    no: 1,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description: 'Place a pot of water on medium heat and set aside to boil',
    ingredients: [],
    kitchenware: [
      {
        qty: '1',
        name: 'Pot',
      },
    ],
    images: [],
  },
  {
    type: 'PREPARATION',
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
    images: [],
  },
  {
    type: 'PREPARATION',
    no: 3,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description: 'Add the eggplant to the pan and sauté for 1-2 minutes',
    ingredients: [
      {
        qty: '2',
        name: 'eggplants',
      },
    ],
    kitchenware: [],
    images: [
      {
        src: require('../images/add_eggplant_1.png'),
        alt: 'Add Eggplant',
      },
      {
        src: require('../images/add_eggplant_2.png'),
        alt: 'Add Eggplant',
      },
    ],
  },
  {
    type: 'PREPARATION',
    no: 4,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Add the onion and the garlic to the pan and sauté for 1-2 minutes',
    ingredients: [
      {
        qty: '1',
        name: 'finely chopped onion',
      },
      {
        qty: '1',
        name: 'finely chopped garlic',
      },
    ],
    kitchenware: [],
    images: [
      {
        src: require('../images/add_garlic_onion.png'),
        alt: 'Add garlic and onion',
      },
      {
        src: require('../images/add_garlic_onion_2.png'),
        alt: 'Add garlic and onion',
      },
    ],
  },
  {
    type: 'PREPARATION',
    no: 5,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Add the zucchinis and the peppers into the pan. Sauté for 4-5 minutes, until the vegetables are ready',
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
    images: [
      {
        src: require('../images/zucchini_peppers.png'),
        alt: 'Add zucchini and peppers',
      },
      {
        src: require('../images/saute_sauce.png'),
        alt: 'Saute',
      },
    ],
  },
  {
    type: 'PREPARATION',
    no: 6,
    tag: {
      text: 'Sauce',
      color: 'tagRed',
    },
    links: [],
    description:
      'Add the oregano, thyme, chili flakes, sugar and tomato paste and sauté. Add salt and pepper to taste',
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
        qty: '1 teaspoon',
        name: 'oregano',
      },
      {
        qty: '1 tablespoon',
        name: 'thyme',
      },
      {
        qty: '1 teaspoon',
        name: 'chilli flakes',
      },
      {
        qty: '1 tablespoon',
        name: 'granulated sugar',
      },
      {
        qty: '1 teaspoon',
        name: 'tomato paste',
      },
    ],
    kitchenware: [],
    images: [
      {
        src: require('../images/spices.png'),
        alt: 'Add the spices',
      },
    ],
  },
  {
    type: 'PREPARATION',
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
    images: [
      {
        src: require('../images/tomato.png'),
        alt: 'Add the tomatoes',
      },
      {
        src: require('../images/tomato_2.png'),
        alt: 'Add the tomatoes',
      },
      {
        src: require('../images/saute_sauce.png'),
        alt: 'Saute Sauce',
      },
    ],
  },
  {
    type: 'PREPARATION',
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
    images: [
      {
        src: require('../images/pasta.png'),
        alt: 'Add the macaroni',
      },
    ],
  },
  {
    type: 'PREPARATION',
    no: 9,
    tag: {
      text: 'Assembling',
      color: 'tagPink',
    },
    links: [],
    description: 'Preheat the oven at 180 C set to fan',
    ingredients: [],
    kitchenware: [],
    images: [],
  },
  {
    type: 'PREPARATION',
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
    images: [
      {
        src: require('../images/bechamel_prep_1.png'),
        alt: 'Add the oil and flour',
      },
    ],
  },
  {
    type: 'PREPARATION',
    no: 11,
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    links: [],
    description:
      'Add the soy milk in 7-8 batches, stirring constantly. Wait for the bechamel to thicken before adding the next batch.',
    ingredients: [
      {
        qty: '800 g',
        name: 'soy milk',
      },
    ],
    kitchenware: [],
    images: [
      {
        src: require('../images/bechamel_prep_2.png'),
        alt: 'Add the milk',
      },
      {
        src: require('../images/bechamel_prep_3.png'),
        alt: 'Add the milk',
      },
      {
        src: require('../images/bechamel_prep_4.png'),
        alt: 'Add the milk',
      },
      {
        src: require('../images/bechamel_prep_5.png'),
        alt: 'Add the milk',
      },
      {
        src: require('../images/bechamel_prep_6.png'),
        alt: 'Add the milk',
      },
      {
        src: require('../images/bechamel_prep_7.png'),
        alt: 'Add the milk',
      },
    ],
  },
  {
    type: 'PREPARATION',
    no: 12,
    tag: {
      text: 'Bechamel',
      color: 'tagOrange',
    },
    links: [],
    description:
      'Season with salt and pepper and as soon as it thickens and comes to boil (bubbles start forming), remove from the heat',
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
        qty: '1',
        name: 'fresh nutmeg',
      },
    ],
    kitchenware: [],
    images: [
      {
        src: require('../images/bechamel_prep_8.png'),
        alt: 'Add the spices',
      },
      {
        src: require('../images/bechamel_prep_9.png'),
        alt: 'Wait for bechamel to boil',
      },
    ],
  },
  {
    type: 'PREPARATION',
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
    images: [
      {
        src: require('../images/pasta_mixture_1.png'),
        alt: 'Add the pasta to the vegetables',
      },
      {
        src: require('../images/pasta_mixture_2.png'),
        alt: 'Add the pasta to the vegetables',
      },
    ],
  },
  {
    type: 'PREPARATION',
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
        qty: '1 teaspoon',
        name: 'oregano',
      },
      {
        qty: '1 tablespoon',
        name: 'mint',
      },
    ],
    kitchenware: [],
    images: [
      {
        src: require('../images/pasta_mixture_3.png'),
        alt: 'Add the bechamel to the pasta mixture',
      },
      {
        src: require('../images/pasta_mixture_4.png'),
        alt: 'Add the bechamel to the pasta mixture',
      },
    ],
  },
  {
    type: 'PREPARATION',
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
        qty: '1 tablespoon',
        name: 'olive oil',
      },
      {
        qty: '25 g',
        name: 'breadcrumps',
      },
    ],
    kitchenware: [{qty: '1', name: '40 cm ovenproof baking dish'}],
    images: [
      {
        src: require('../images/baking_dish_1.png'),
        alt: 'Sprinkle breadcrumps',
      },
      {
        src: require('../images/baking_dish_2.png'),
        alt: 'Spread breadcrumps',
      },
    ],
  },
  {
    type: 'PREPARATION',
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
        qty: '1 tablespoon',
        name: 'olive oil',
      },
      {
        qty: '1 tablespoon',
        name: 'thyme',
      },
      {
        qty: '',
        name: 'pepper',
      },
    ],
    kitchenware: [],
    images: [
      {
        src: require('../images/baking_dish_3.png'),
        alt: 'Add the pasta mixture',
      },
      {
        src: require('../images/assembling_1.png'),
        alt: 'Assembling',
      },
      {
        src: require('../images/assembling_3.png'),
        alt: 'Assembling',
      },
      {
        src: require('../images/assembling_4.png'),
        alt: 'Assembling',
      },
      {
        src: require('../images/assembling_5.png'),
        alt: 'Assembling',
      },
    ],
  },
  {
    type: 'PREPARATION',
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
    images: [
      {
        src: require('../images/serve_1.png'),
        alt: 'Assembling',
      },
      {
        src: require('../images/serve_2.png'),
        alt: 'Assembling',
      },
      {
        src: require('../images/serve_3.png'),
        alt: 'Assembling',
      },
    ],
  },
];

export const intro: IIntro = {
  type: 'INTRO',
  name: 'Greek Pastitsio',
  image:
    'https://akispetretzikis.com/system/uploads/medium/data/14955/recipe_main_vegan-pastitsio.jpg',
  preparation: '25 minutes',
  cooking: '40 minutes',
  portions: '8 - 10',
  difficulty: 'Level 2',
};
