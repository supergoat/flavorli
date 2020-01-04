import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import Step from './Step';

const setup = () => {
  return {
    ...render(
      <Step stepNo={1} noOfSteps={2}>
        children
      </Step>,
    ),
  };
};

describe('Step', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a role of group to enable assistive technology users to preceive the boundaries of a step', () => {
    const {getByRole} = setup();
    getByRole('group');
  });

  it('should have an aria-label to indicate to assistive technology users the step they are on', () => {
    const {getByLabelText} = setup();
    getByLabelText(`Step 1 of 2`);
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });
});
