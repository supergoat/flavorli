import {IRecipeWithTasks} from '../../types';

export const cheeseSauceRecipe: IRecipeWithTasks = {
  id: '2',
  author: 'Becky Striepe',
  name: 'Cheese Sauce',
  image: require('./images/cheese_sauce.jpg'),
  preparation: 5,
  cooking: 5,
  portions: '3',
  difficulty: '1',
  tasks: [
    {
      name: 'Sauce',
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
      steps: [
        'Heat the coconut oil in a small pot on low heat',
        'Once the oil is a complete liquid, add in the flour and whisk',
        'Add the salt, paprika powder, and curry powder and whisk again',
        'Then, add the nutritional yeast and whisk again. It should be clumpy – that’s normal, don’t worry',
        'Add the water and whisk on the lowest heat setting for about 1 minute until the sauce thickens nicely. If it gets too thick (or if you want to reheat at a later time) you can add a little bit more water and whisk again and it should be good as new',
        'Use it as a dip, pour it over some lasagna or pizza or whatever you like, and enjoy!',
      ],
    },
  ],
};
