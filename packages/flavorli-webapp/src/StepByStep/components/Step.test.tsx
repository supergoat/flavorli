import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Step from './Step';
import {steps} from '../mockData';

describe('Step', () => {
  it('should not have any axe violations', async () => {
    const {container} = render(<Step step={steps[0]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a role of group to enable assistive technology users to preceive the boundaries of a step', () => {
    const {getByRole} = render(<Step step={steps[0]} />);
    getByRole('group');
  });

  it('should have an aria-label to indicate to assistive technology users the slide they are on', () => {
    const step = steps[0];
    const {getByLabelText} = render(<Step step={step} />);
    getByLabelText(`Step ${step.no}`);
  });

  it('should render correctly', () => {
    const {container} = render(<Step step={steps[0]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
