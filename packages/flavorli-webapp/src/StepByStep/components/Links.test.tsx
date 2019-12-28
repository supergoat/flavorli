import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Links from './Links';
import {steps} from '../helpers/mockData';
import {ILink} from '../types';
import userEvent from '@testing-library/user-event';

const setup = (links?: ILink[]) => {
  const mockOnViewStep = jest.fn();
  const stepWithOneLink = steps[7];
  const stepLinks = links || stepWithOneLink.links;

  return {
    ...render(<Links links={stepLinks} onViewStep={mockOnViewStep} />),
    links: stepLinks,
    mockOnViewStep,
  };
};
describe('Links', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onViewStep with link.from when the user clicks View Step', () => {
    const {getByText, mockOnViewStep, links} = setup();

    const link = links[0];
    const viewStepButton = getByText('View Step');
    userEvent.click(viewStepButton);
    expect(mockOnViewStep).toHaveBeenCalledWith(link.from);
  });

  it('should render an empty div if the links are an empty array', () => {
    const {container} = setup([]);
    expect(container.firstChild).toBeNull();
  });
});
