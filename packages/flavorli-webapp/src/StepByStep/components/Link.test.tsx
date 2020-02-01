import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Link from './Link';
import {ILink} from '../types';
import {RecipeTimersProvider} from '../timersContext';
import {StepByStepProvider} from '../stepByStepContext';
import {link, linkWithTimer, timer} from '../mockData';

const setup = (customLink?: ILink) => {
  const timers = {[timer.id]: timer};

  return {
    ...render(
      <RecipeTimersProvider initialValues={{...timers}}>
        <StepByStepProvider initialValues={{noOfSteps: 10}}>
          <Link link={customLink || linkWithTimer} />
        </StepByStepProvider>
      </RecipeTimersProvider>,
    ),
    link: linkWithTimer,
    timer,
  };
};

describe('Link', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should display the time from the timer if the link has a timerId', () => {
    const {getByTestId, timer} = setup();

    expect(getByTestId(`timerid-${timer?.id}`)).toHaveTextContent(
      `${timer?.minutes}m ${timer?.seconds}s`,
    );
  });

  it('should not display the time if the link does not have a timerId', () => {
    const {queryByTestId} = setup(link);

    expect(queryByTestId(/timerid-/i)).toBeNull();
  });
});
