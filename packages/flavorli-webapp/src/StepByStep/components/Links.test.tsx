import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Links from './Links';
import {recipeSteps} from '../helpers/mockData';
import {ILink} from '../types';
import userEvent from '@testing-library/user-event';
import {TimersProvider} from '../helpers/timersContext';

const setup = (links?: ILink[]) => {
  const mockOnViewStep = jest.fn();
  const stepWithOneLinkWithTimerIds = recipeSteps[8];
  const stepLinks = links || stepWithOneLinkWithTimerIds.links;

  // The timerS that corresponds to the timers in stepWithOneLinkWithTimerIds
  const timer1 = recipeSteps[6].timer;
  const timer2 = recipeSteps[7].timer;

  const timers =
    timer1?.id && timer2?.id ? {[timer1.id]: timer1, [timer2.id]: timer2} : {};

  return {
    ...render(
      <TimersProvider initialValues={{...timers}}>
        <Links links={stepLinks} onViewStep={mockOnViewStep} />
      </TimersProvider>,
    ),
    links: stepLinks,
    timer1,
    timer2,
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
    const {getAllByText, mockOnViewStep, links} = setup();

    const link = links[0];
    const viewStepButton = getAllByText('View Step')[0];
    userEvent.click(viewStepButton);
    expect(mockOnViewStep).toHaveBeenCalledWith(link.from);
  });

  it('should render an empty div if the links are an empty array', () => {
    const {container} = setup([]);
    expect(container.firstChild).toBeNull();
  });

  it('should display the time from the timers if the links have timerIds', () => {
    const {getByTestId, timer1, timer2} = setup();

    expect(getByTestId(`timerid-${timer1?.id}`)).toHaveTextContent(
      `${timer1?.minutes}m ${timer1?.seconds}s`,
    );
    expect(getByTestId(`timerid-${timer2?.id}`)).toHaveTextContent(
      `${timer2?.minutes}m ${timer2?.seconds}s`,
    );
  });

  it('should not display the time if the links do not have timerIds', () => {
    const stepWithLinkAndNoTimerId = recipeSteps[7];
    const {queryByTestId} = setup(stepWithLinkAndNoTimerId.links);

    expect(queryByTestId(/timerid-/i)).toBeNull();
  });
});
