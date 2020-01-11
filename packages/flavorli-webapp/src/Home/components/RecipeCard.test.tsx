import React from 'react';
import {renderWithRouter} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import RecipeCard from './RecipeCard';
import {recipes} from '../mockData';
import userEvent from '@testing-library/user-event';

const setup = () => {
  const recipe = recipes[0];
  return {
    ...renderWithRouter(<RecipeCard recipe={recipe} />),
    recipe,
  };
};
describe('RecipeCard', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should take you to the recipe when you click on the recipe name', () => {
    const {getByText, history, recipe} = setup();

    const recipeName = getByText(recipe.name);
    userEvent.click(recipeName);
    expect(history.location.pathname).toMatch('/recipe/1');
  });
});
