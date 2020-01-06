import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Link from './Link';
import {ILink} from '../types';
import {TimersProvider} from '../helpers/timersContext';
import {StepByStepProvider} from '../helpers/StepByStepContext';

const setup = (customLink?: ILink) => {
  const link = customLink || {
    from: 7,
    heading: 'From Step 7',
    name: 'Pan with vegetables',
    timerId: 7,
  };

  const timer = {id: 7, name: 'Step 7: Simmer Sauce', minutes: 10, seconds: 0};

  const timers = {[timer.id]: timer};

  return {
    ...render(
      <TimersProvider initialValues={{...timers}}>
        <StepByStepProvider initialValues={{noOfSteps: 10}}>
          <Link link={link} />
        </StepByStepProvider>
      </TimersProvider>,
    ),
    link,
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
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display the time from the timer if the link has a timerId', () => {
    const {getByTestId, timer} = setup();

    expect(getByTestId(`timerid-${timer?.id}`)).toHaveTextContent(
      `${timer?.minutes}m ${timer?.seconds}s`,
    );
  });

  it('should not display the time if the link does not have a timerId', () => {
    const linkWithoutTimerId = {
      from: 1,
      heading: 'From Step 1',
      name: 'Boiling water',
    };

    const {queryByTestId} = setup(linkWithoutTimerId);

    expect(queryByTestId(/timerid-/i)).toBeNull();
  });
});
