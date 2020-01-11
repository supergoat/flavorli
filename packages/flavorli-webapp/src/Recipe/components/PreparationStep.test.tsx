import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import PreparationStep from './PreparationStep';

const setup = () => {
  return render(
    <PreparationStep
      no={1}
      description="Place a frying pan over high heat and add the olive oil"
    />,
  );
};

describe('PreparationStep', () => {
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
