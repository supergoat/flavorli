import React from 'react';
import {Stack, H1, Button, Scroll} from '@flavorli/elements';
import {motion} from 'framer-motion';
import SectionHeading from './components/SectionHeading';
import Info from './components/Info';
import IngredientList from './components/IngredientList';
// import PreparationStepList from './components/PreparationStepList';
import useFetchRecipe from './useFetchRecipe';
import {useHistory} from 'react-router';

const Recipe = () => {
  const history = useHistory();
  const {recipe, loading, error} = useFetchRecipe();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  if (!recipe) return null;

  return (
    <Scroll background="surface">
      <article data-testid="recipe">
        <motion.img src={recipe.image} alt="" width="100%" />

        <Stack padding={16} gap={16} width="100%" role="main">
          <H1>{recipe.name}</H1>

          <Stack direction="horizontal" width="100%">
            <Info
              name="Preparation"
              value={`${recipe.preparationTime}'`}
              icon="preparationTime"
            />

            <Info
              name="Cooking"
              value={`${recipe.cookingTime}'`}
              icon="cookingTime"
            />

            <Info name="Portions" value={recipe.portions} icon="serves" />

            <Info
              name="Difficulty"
              value={recipe.difficulty}
              icon="difficulty"
            />
          </Stack>

          <SectionHeading icon="ingredients">Ingredients</SectionHeading>

          <IngredientList ingredients={recipe.ingredients} />

          <SectionHeading icon="preparation">Preparation</SectionHeading>

          <Button
            width="100%"
            onClick={() => history.push(`/step-by-step/${recipe.id}`)}
          >
            Step By Step
          </Button>
        </Stack>
      </article>
    </Scroll>
  );
};

export default Recipe;
