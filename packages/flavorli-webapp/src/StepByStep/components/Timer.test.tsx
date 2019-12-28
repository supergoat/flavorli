import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Timer from './Timer';
import {steps} from '../helpers/mockData';
import {act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ITimer} from '../types';
import {TimersProvider} from '../helpers/timersContext';

afterEach(() => {
  jest.useRealTimers();
});

const setup = (type?: 'notification') => {
  const stepWithTimer = steps[6];
  const timer = stepWithTimer.timer as ITimer;

  return {
    ...render(
      <TimersProvider
        initialValues={{timers: {[timer.id]: {...timer, isPaused: true}}}}
      >
        <Timer id={timer.id} type={type} />
      </TimersProvider>,
    ),
    timer,
  };
};

describe('Timer', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a role of "timer" to inform assistive technology users that it is a timer', () => {
    const {getByRole} = setup();
    getByRole('timer');
  });

  it('should have an aria-label to provide the name of the timer', () => {
    const {getByLabelText, timer} = setup();
    getByLabelText(timer.name);
  });

  it('should have a aria-atomic set to true to ensure the entirety of the time is announced in full to assistive technology users', () => {
    const {getByRole} = setup();
    expect(getByRole('timer')).toHaveAttribute('aria-atomic', 'true');
  });

  it('should have aria-controls pointing to the timer on the start/pause buttons that control the timer', () => {
    const {getByRole, getByText, timer} = setup();
    expect(getByRole('timer')).toHaveAttribute('id', `timer-${timer.id}`);

    const startButton = getByText('START');
    expect(startButton).toHaveAttribute('aria-controls', `timer-${timer.id}`);

    // Start the timer to have access to the pause button
    act(() => {
      userEvent.click(startButton);
    });

    const pauseButton = getByText('PAUSE');
    expect(pauseButton).toHaveAttribute('aria-controls', `timer-${timer.id}`);
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when type is notification', () => {
    const {container} = setup('notification');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an empty div if the timer is null', () => {
    const {container} = render(<Timer />);
    expect(container.firstChild).toBeNull();
  });
});
