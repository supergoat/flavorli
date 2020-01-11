import {IStepByStep} from '../../StepByStep/types';

export const cheeseSauceStepByStep: IStepByStep = {
  intro: {
    author: 'Becky Striepe',
    name: 'Cheese Sauce',
    image: require('./images/cheese_sauce.jpg'),
    preparation: '5 minutes',
    cooking: '5 minutes',
    portions: '3',
    difficulty: 'Level 1',
  },
  ingredients: [
    {
      qty: '2 tbsps',
      name: 'coconut oil',
    },
    {
      qty: '1/3 cup',
      name: 'all purpose flour',
    },
    {
      qty: '1/2 tsp',
      name: 'paprika powder',
    },
    {
      qty: '1/4 tsp',
      name: 'curry powder',
    },
    {
      qty: '1/3 cup',
      name: 'nutritional year',
    },
    {
      qty: '1/2 cup',
      name: 'water',
    },
  ],
  items: [
    {
      qty: '4',
      name: 'Ramekins',
    },
    {
      qty: '1',
      name: 'Glass',
    },
    {
      qty: '1',
      name: 'Small Pot',
    },
    {
      qty: '1',
      name: 'Hand Whisk',
    },
  ],
  preparationSteps: [
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      description:
        'Add the coconul oil in a ramekin and place it first in order',
      ingredients: [
        {
          qty: '2 tbsps',
          name: 'coconut oil',
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
          src: require('./images/coconut_oil.jpeg'),
          alt: 'CoconutOil',
        },
      ],
    },
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      description: 'Add the flour in a ramekin and place it next in order',
      ingredients: [
        {
          qty: '1/3 cup',
          name: 'all purpose flour',
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
          src: require('./images/flour.jpeg'),
          alt: 'Flour',
        },
      ],
    },
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      description:
        'Add the salt, paprika and curry powder in a ramekin and place it next in order',
      ingredients: [
        {
          qty: '1/2 teaspoon',
          name: 'salt',
        },
        {
          qty: '1/4 teaspoon',
          name: 'paprika',
        },
        {
          qty: '1/4 teaspoon',
          name: 'curry powder',
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
          src: require('./images/spices.jpeg'),
          alt: 'SpicesMiseEnPlace',
        },
      ],
    },
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      description:
        'Add the nutritional yeast in a ramekin and place it next in order',
      ingredients: [
        {
          qty: '1/3 cup',
          name: 'nutritional yeast',
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
          src: require('./images/nutritional_yeast.jpeg'),
          alt: 'NutritionalYeast',
        },
      ],
    },
    {
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      description: 'Add the water in a glass and place it next in order',
      ingredients: [
        {
          qty: '1/2 cup',
          name: 'water',
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
        text: '',
        color: 'tagRed',
      },
      description: '',
      ingredients: [],
      kitchenware: [],
      images: [
        {
          src: require('./images/all_ingredients.jpeg'),
          alt: 'AllIngredients',
        },
      ],
    },
  ],
  recipeSteps: [
    {
      no: 1,
      tag: {
        text: 'Sauce',
        color: 'tagRed',
      },
      links: [],
      description: 'Heat the coconut oil in a small pot on low heat',
      ingredients: [
        {
          qty: '2 tbsps',
          name: 'coconut oil',
        },
      ],
      kitchenware: [
        {
          qty: '1',
          name: 'Small Pot',
        },
      ],
      images: [
        {
          src: require('./images/coconut_oil_1.png'),
          alt: 'CoconutOil1',
        },
        {
          src: require('./images/coconut_oil_2.png'),
          alt: 'CoconutOil2',
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
      description:
        'Once the oil is a complete liquid, add in the flour and whisk',
      ingredients: [
        {
          qty: '1/3 cup',
          name: 'flour',
        },
      ],
      kitchenware: [
        {
          qty: '1',
          name: 'Hand Whisk',
        },
      ],
      images: [
        {
          src: require('./images/flour_1.png'),
          alt: 'Flour1',
        },
        {
          src: require('./images/flour_2.png'),
          alt: 'Flour2',
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
        'Add the salt, paprika powder, and curry powder and whisk again',
      ingredients: [
        {
          qty: '1/2 teaspoon',
          name: 'Salt',
        },
        {
          qty: '1/4 teaspoon',
          name: 'paprika powder',
        },
        {
          qty: '1/4 teaspoon',
          name: 'curry powder',
        },
      ],
      kitchenware: [],
      images: [
        {
          src: require('./images/spices.png'),
          alt: 'Spices',
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
        'Then, add the nutritional yeast and whisk again. It should be clumpy – that’s normal, don’t worry',
      ingredients: [
        {
          qty: '1/3 cup',
          name: 'nutritional yeast',
        },
      ],
      kitchenware: [],
      images: [
        {
          src: require('./images/nutritional_yeast_1.png'),
          alt: 'NutritionalYeast1',
        },
        {
          src: require('./images/nutritional_yeast_2.png'),
          alt: 'NutritionalYeast2',
        },
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
        'Add the water and whisk on the lowest heat setting for about 1 minute until the sauce thickens nicely. If it gets too thick (or if you want to reheat at a later time) you can add a little bit more water and whisk again and it should be good as new',
      ingredients: [
        {
          qty: '1/2 cup',
          name: 'water',
        },
      ],
      kitchenware: [],
      timer: {
        id: 1,
        name: 'Thicken Sauce',
        minutes: 1,
        seconds: 0,
      },
      images: [
        {
          src: require('./images/cheese.png'),
          alt: 'Cheese',
        },
      ],
    },
    {
      no: 5,
      tag: {
        text: 'Serving',
        color: 'tagPink',
      },
      links: [],
      description:
        'Add the cheese in a small bowl and use it as a dip, pour it over some lasagna or pizza or whatever you like, and enjoy',
      ingredients: [],
      kitchenware: [
        {
          qty: '1',
          name: 'Small Bowl',
        },
      ],
      images: [],
    },
  ],
};
