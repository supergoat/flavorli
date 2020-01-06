import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Links from './Links';
import {recipeSteps} from '../helpers/mockData';
import {ILink} from '../types';
import userEvent from '@testing-library/user-event';
import {TimersProvider} from '../helpers/timersContext';
import {StepByStepProvider} from '../helpers/StepByStepContext';
import {act} from 'react-dom/test-utils';

const setup = (customLinks?: ILink[]) => {
  const links = customLinks || recipeSteps[7].links;

  return {
    ...render(
      <TimersProvider>
        <StepByStepProvider initialValues={{noOfSteps: 10}}>
          <Links links={links} />
        </StepByStepProvider>
      </TimersProvider>,
    ),
    links,
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

  it('should render an empty div if the links are an empty array', () => {
    const {container} = setup([]);
    expect(container.firstChild).toBeNull();
  });

  it('should open step in a dialog when view step is clicked', () => {
    const {getAllByText, getByLabelText, links} = setup();

    const link = links[0];
    const viewStepButton = getAllByText('View Step')[0];

    act(() => {
      userEvent.click(viewStepButton);
    });

    getByLabelText(`Step ${link.from}`);
  });

  it('should close the open dialog when the close button is clicked', () => {
    const {getAllByText, getByText, queryByLabelText, links} = setup();

    const link = links[0];
    const viewStepButton = getAllByText('View Step')[0];

    act(() => {
      userEvent.click(viewStepButton);
    });

    const closeButton = getByText(/close/i);

    act(() => {
      userEvent.click(closeButton);
    });

    expect(queryByLabelText(`Step ${link.from}`)).toBeNull();
  });
});
