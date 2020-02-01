import React from 'react';
import {renderWithRouter} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import ItemsStep from './ItemsStep';
import {items} from '../mockData';
import {StepByStepProvider} from '../stepByStepContext';

const setup = () => {
  return renderWithRouter(
    <>
      {/* Add a div with id recipe-steps to be used by aria-controls */}
      <div id="recipe-steps" />
      <StepByStepProvider initialValues={{noOfSteps: 10}}>
        <ItemsStep items={items} />
      </StepByStepProvider>
    </>,
  );
};

describe('ItemsStep', () => {
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
