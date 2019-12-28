import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import PreparationStepList from './PreparationStepList';
import {recipe} from '../helpers/mockData';

const setup = () => {
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
    expect(container.firstChild).toMatchSnapshot();
  });
});
