import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import StepNo from './StepNo';

const setup = () => {
  return {
    ...render(<StepNo no={1} />),
  };
};

describe('StepNo', () => {
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
