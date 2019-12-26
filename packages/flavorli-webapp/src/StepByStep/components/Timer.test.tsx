import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Timer from './Timer';
import {steps} from '../mockData';
import {act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ITimer} from '../types';

const stepWithTimer = steps[6];
const timer = stepWithTimer.timer as ITimer;

afterEach(() => {
  jest.useRealTimers();
});

describe('Timer', () => {
  it('should not have any axe violations', async () => {
    const {container} = render(<Timer timer={timer} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a role of "timer" to inform assistive technology users that it is a timer', () => {
    const {getByRole} = render(<Timer timer={timer} />);
    getByRole('timer');
  });

  it('should have an aria-label to provide the name of the timer', () => {
    const {getByLabelText} = render(<Timer timer={timer} />);
    getByLabelText(timer.name);
  });

  it('should have a aria-atomic set to true to ensure the entirety of the time is announced in full to assistive technology users', () => {
    const {getByRole} = render(<Timer timer={timer} />);
    expect(getByRole('timer')).toHaveAttribute('aria-atomic', 'true');
  });

  it('should start/pause the timer when the start/pause button is clicked', () => {
    const {queryByText, getByText} = render(<Timer timer={timer} />);
    jest.useFakeTimers();

    const startButton = getByText('START');

    act(() => {
      userEvent.click(startButton);
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(queryByText('START')).toBeNull();

    getByText('9m 59s');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    getByText('9m 58s');

    const pauseButton = getByText('PAUSE');

    act(() => {
      userEvent.click(pauseButton);
    });

    expect(queryByText('PAUSE')).toBeNull();
    getByText('START');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    getByText('9m 58s');
  });

  it('should have aria-controls pointing to the timer on the start/pause buttons that control the timer', () => {
    const {getByRole, getByText} = render(<Timer timer={timer} />);
    expect(getByRole('timer')).toHaveAttribute('id', 'timer');

    const startButton = getByText('START');
    expect(startButton).toHaveAttribute('aria-controls', 'timer');

    // Start the timer to have access to the pause button
    act(() => {
      userEvent.click(startButton);
    });

    const pauseButton = getByText('PAUSE');
    expect(pauseButton).toHaveAttribute('aria-controls', 'timer');
  });

  it('should render an empty div if the timer is null', () => {
    const {container} = render(<Timer />);
    expect(container.firstChild).toBeNull();
  });
});
