import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Intro from './Intro';
import {introStep} from '../helpers/mockData';

const setup = () => {
  const mockOnChangeStep = jest.fn();
  return render(
    <>
      {/* Add a div with id recipe-steps to be used by aria-controls */}
      <div id="recipe-steps" />
      <Intro step={introStep} onChangeStep={mockOnChangeStep} />
    </>,
  );
};
describe('Intro', () => {
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
