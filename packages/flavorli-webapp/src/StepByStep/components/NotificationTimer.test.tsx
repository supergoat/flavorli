import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import NotificationTimer from './NotificationTimer';
import {steps} from '../helpers/mockData';

import {TimersProvider} from '../helpers/timersContext';
import {ITimer} from '../types';

afterEach(() => {
  jest.useRealTimers();
});

const setup = (type?: 'notification') => {
  const stepWithTimer = steps[6];
  const timer = {...stepWithTimer.timer, isPaused: true} as ITimer;

  return {
    ...render(
      <TimersProvider initialValues={{timers: {[timer.id]: timer}}}>
        <NotificationTimer timer={timer} />
      </TimersProvider>,
    ),
    timer,
  };
};

describe('NotificationTimer', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', async () => {
    const {container} = setup();

    expect(container.firstChild).toMatchSnapshot();
  });
});
