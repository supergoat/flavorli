import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import IngredientList from './IngredientList';
import {recipe} from '../mockData';

const setup = () => {
  return render(
    <IngredientList
      taskName={recipe.tasks[0].name}
      ingredients={recipe.tasks[0].ingredients}
    />,
  );
};

describe('IngredientList', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container.firstChild).toMatchSnapshot();
  });
});
