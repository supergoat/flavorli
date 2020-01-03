import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import StepDialog from './StepDialog';
import {TimersProvider} from '../helpers/timersContext';

const setup = () => {
  return {
    ...render(
      <TimersProvider>
        {/* Add a div with id recipe-steps to be used by aria-controls */}
        <div id="recipe-steps" />
        <StepDialog
          onClose={jest.fn()}
          stepNo={1}
          onViewStep={jest.fn()}
          noOfSteps={1}
        />
      </TimersProvider>,
    ),
  };
};

describe('StepDialog', () => {
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
