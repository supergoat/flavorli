import React from 'react';
import {Stack, H1, Button, Scroll} from '@flavorli/elements';
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';
import SectionHeading from './components/SectionHeading';
import Info from './components/Info';
import IngredientList from './components/IngredientList';
import PreparationStepList from './components/PreparationStepList';

import {recipe} from './mockData';

export default () => {
  let history = useHistory();

  return (
    <Scroll background="surface">
      <article data-testid="recipe">
        <motion.img src={recipe.image} alt="" width="100%" />

        <Stack padding={16} gap={16} width="100%" role="main">
          <H1>{recipe.name}</H1>

          <Stack direction="horizontal" width="100%">
            <Info
              name="Preparation"
              value={recipe.preparation}
              icon="preparationTime"
            />

            <Info name="Cooking" value={recipe.cooking} icon="cookingTime" />

            <Info name="Portions" value={recipe.portions} icon="serves" />

            <Info
              name="Difficulty"
              value={recipe.difficulty}
              icon="difficulty"
            />
          </Stack>

          <SectionHeading icon="ingredients">Ingredients</SectionHeading>

          {recipe.tasks.map(task => {
            return (
              <IngredientList
                key={task.name + 'ingredients'}
                taskName={task.name}
                ingredients={task.ingredients}
              />
            );
          })}

          <SectionHeading icon="preparation">Preparation</SectionHeading>

          <Button width="100%" onClick={() => history.push('/step-by-step')}>
            Step By Step
          </Button>

          {recipe.tasks.map(task => {
            return (
              <PreparationStepList
                taskName={task.name}
                steps={task.steps}
                key={task.name + 'preparation'}
              />
            );
          })}
        </Stack>
      </article>
    </Scroll>
  );
};
