import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {
  useTimersContext,
  TimersProvider,
  useAddTimerIfItDoesNotExist,
  useRunTimer,
} from './timersContext';
import {steps} from './mockData';
import {ITimer} from '../types';

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe('useTimersContext', () => {
  it('should throw an error when useTimersContext is not used within a TimersProvider', () => {
    const {result} = renderHook(() => useTimersContext());

    expect(() => {
      expect(result.current).not.toBe(undefined);
    }).toThrow(Error('useTimersContext must be used within a TimersProvider'));
  });

  it('should expose the timers and setTimers function', () => {
    const wrapper = ({children}) => <TimersProvider>{children}</TimersProvider>;

    const {result} = renderHook(() => useTimersContext(), {wrapper});

    const timers = result.current['timers'];
    const setTimers = result.current['setTimers'];

    expect(timers).toEqual({});
    expect(typeof setTimers).toBe('function');
  });

  it('should use custom timers', () => {
    const stepWithTimer = steps[6];
    const timer = {...stepWithTimer.timer, isPaused: true} as ITimer;

    const contextTimers = {[timer.id]: timer};
    const wrapper = ({children}) => (
      <TimersProvider initialValues={contextTimers}>{children}</TimersProvider>
    );

    const {result} = renderHook(() => useTimersContext(), {wrapper});

    const timers = result.current['timers'];
    const setTimers = result.current['setTimers'];

    expect(timers).toEqual(contextTimers);
    expect(typeof setTimers).toBe('function');
  });
});

describe('useAddTimerIfItDoesNotExist', () => {
  it('add timer if it doesn not exist in context', () => {
    const stepWithTimer = steps[6];
    const timer = {...stepWithTimer.timer, isPaused: true} as ITimer;

    const wrapper = ({children}) => <TimersProvider>{children}</TimersProvider>;

    const {result} = renderHook(() => useAddTimerIfItDoesNotExist(timer), {
      wrapper,
    });

    const timers = result.current['timers'];

    expect(timers).toEqual({[timer.id]: timer});
  });

  it('should return the timer if it is already in context', () => {
    const stepWithTimer = steps[6];
    const timer = {...stepWithTimer.timer, isPaused: true} as ITimer;

    const wrapper = ({children}) => (
      <TimersProvider initialValues={{[timer.id]: timer}}>
        {children}
      </TimersProvider>
    );

    const {result} = renderHook(() => useAddTimerIfItDoesNotExist(timer), {
      wrapper,
    });

    const timers = result.current['timers'];

    expect(timers).toEqual({[timer.id]: timer});
  });
});

describe('useRunTimer', () => {
  it('it should return the timer if the timer isPaused', async () => {
    jest.useFakeTimers();
    const stepWithTimer = steps[6];
    const timer = {...stepWithTimer.timer, isPaused: true} as ITimer;

    const wrapper = ({children}) => (
      <TimersProvider initialValues={{[timer.id]: timer}}>
        {children}
      </TimersProvider>
    );

    const {result} = renderHook(() => useRunTimer(timer), {
      wrapper,
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const updatedTimer = result.current;

    expect(timer).toEqual(updatedTimer);
  });

  it('should pause the timer and return it if the timer is set to 0 minutes and 0 seconds', () => {
    jest.useFakeTimers();

    const stepWithTimer = steps[6];
    const timer = {
      ...stepWithTimer.timer,
      isPaused: false,
      minutes: 0,
      seconds: 0,
    } as ITimer;

    const wrapper = ({children}) => (
      <TimersProvider initialValues={{[timer.id]: timer}}>
        {children}
      </TimersProvider>
    );

    const {result} = renderHook(() => useRunTimer(timer), {
      wrapper,
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const updatedTimer = result.current;

    expect(updatedTimer).toEqual({...timer, isPaused: true});
  });

  it('should decrement the timer by one second', () => {
    jest.useFakeTimers();
    const stepWithTimer = steps[6];
    const timer = {
      ...stepWithTimer.timer,
      isPaused: false,
    } as ITimer;

    const wrapper = ({children}) => (
      <TimersProvider initialValues={{[timer.id]: timer}}>
        {children}
      </TimersProvider>
    );

    const {result} = renderHook(() => useRunTimer(timer), {
      wrapper,
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const updatedTimer = result.current;

    expect(updatedTimer).toEqual({...timer, minutes: 9, seconds: 59});
  });
});