import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import PreparationStepList from './PreparationStepList';
import {recipes} from '../mockData';

const setup = () => {
  const recipe = recipes[0];
  return render(
    <PreparationStepList
      taskName={recipe.tasks[0].name}
      steps={recipe.tasks[0].steps}
    />,
  );
};

describe('PreparationStepList', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });
});
