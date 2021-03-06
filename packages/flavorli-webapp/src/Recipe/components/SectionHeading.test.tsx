import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import SectionHeading from './SectionHeading';

const setup = () => {
  return render(
    <SectionHeading icon="ingredients">Ingredients</SectionHeading>,
  );
};

describe('SectionHeading', () => {
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
