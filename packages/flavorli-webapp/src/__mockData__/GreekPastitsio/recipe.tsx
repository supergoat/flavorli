import {IRecipeWithTasks} from '../../types';

export const greekPastitsioRecipe: IRecipeWithTasks = {
  id: '1',
  author: 'Akis Petratzikis',
  name: 'Greek Pastitsio',
  image: require('./images/greek_pastitsio.jpg'),
  preparation: 25,
  cooking: 40,
  portions: '8-10',
  difficulty: '2',
  tasks: [
    {
      name: 'Sauce',
      ingredients: [
        {
          qty: '2',
          name: 'eggplants',
        },
        {
          qty: '4-6 tbsps',
          name: 'olive oil',
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
          qty: '1 tbsp',
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
          qty: '',
          name: 'salt',
        },
        {
          qty: '',
          name: 'pepper',
        },
      ],
      steps: [
        'Place a frying pan over high heat and add the olive oil',
        'Cut the eggplan into 1 cm cubes. Add it to the pan and sauté for 1-2 minutes',
        'Finely chop the onion, add it to the pan and sauté for 1-2 minutes',
        'Cut the zucchinis and the peppers into small cubes and add them to the pan. Sauté for 4-5 minutes. until the vegetables are ready',
        'Add the salt, pepper, oregano, thyme, chili flakes, sugar and tomato paste and sauté',
        'Add the wine and canned tomatoes and simmer at medium-low heat for 10 minutes. Remove and set aside',
        'At the same time, in a pot with boiling water, add salt along with the macaroni, and boil for ten minutes',
        'Drain the macaroni and transfer to the pan with the vegetables. Mix and set aside',
      ],
    },
    {
      name: 'Bechamel Sauce',
      ingredients: [
        {
          qty: '80g',
          name: 'olive oil',
        },
        {
          qty: '80g',
          name: 'all-purpose flour',
        },
        {
          qty: '800g',
          name: 'soy milk',
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
      steps: [
        'Place a pot over medium heat. Add the olive oil and flour and mix well until all of the flour is absorbed',
        'Add the soy milk in 7-8 batches, stirring constantly with a hand whisk',
        'Season with salt and pepper and as soon as it thickens and comes to boil, remove from the heat',
      ],
    },

    {
      name: 'Assembling',
      ingredients: [
        {
          qty: '1 tsp',
          name: 'oregano',
        },
        {
          qty: '1 tbsp',
          name: 'mint',
        },
        {
          qty: '2 tbsps',
          name: 'olive oil',
        },
        {
          qty: '50 g',
          name: 'dry breadcrumps',
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
      steps: [
        'Preheat the oven at 180 C set to fan',
        'Add 100 g of the bechamel into the pasta mixture, add oregano, mint, and mix well',
        'Grease a 40 cm ovenproof baking dish with 1 tablespoon olive oil and sprinkle half of the breadcumps',
        'Add the pasta mixture, spread the bechamel sauce, and sprinkle with the remaining breadcrumps, 1 table spoon olive oil, thyme and pepper',
        'Bake for 25 -30 minutes. Remove and let it cool',
      ],
    },
  ],
};
