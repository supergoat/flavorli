import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {
  useTimersContext,
  TimersProvider,
  useAddTimerIfItDoesNotExist,
  useRunTimer,
} from './timersContext';
import {timer} from './mockData';

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
    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <TimersProvider>{children}</TimersProvider>
    );

    const {result} = renderHook(() => useTimersContext(), {wrapper});

    const timers = result.current['timers'];
    const setTimers = result.current['setTimers'];

    expect(timers).toEqual({});
    expect(typeof setTimers).toBe('function');
  });

  it('should use custom timers', () => {
    const contextTimers = {[timer.id]: timer};
    const wrapper = ({children}: {children?: React.ReactNode}) => (
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
  it('should add timer if it doesn not exist in context', () => {
    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <TimersProvider>{children}</TimersProvider>
    );

    const {result} = renderHook(() => useAddTimerIfItDoesNotExist(timer), {
      wrapper,
    });

    const timers = result.current['timers'];

    expect(timers).toEqual({[timer.id]: timer});
  });

  it('should return the timer if it is already in context', () => {
    const wrapper = ({children}: {children?: React.ReactNode}) => (
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

    const pausedTimer = {...timer, isPaused: true};

    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <TimersProvider initialValues={{[pausedTimer.id]: pausedTimer}}>
        {children}
      </TimersProvider>
    );

    const {result} = renderHook(() => useRunTimer(pausedTimer), {
      wrapper,
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const updatedTimer = result.current;

    expect(pausedTimer).toEqual(updatedTimer);
  });

  it('should pause the timer and return it if the timer is set to 0 minutes and 0 seconds', () => {
    jest.useFakeTimers();

    const zeroTimer = {...timer, isPaused: false, minutes: 0, seconds: 0};

    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <TimersProvider initialValues={{[zeroTimer.id]: zeroTimer}}>
        {children}
      </TimersProvider>
    );

    const {result} = renderHook(() => useRunTimer(zeroTimer), {
      wrapper,
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const updatedTimer = result.current;

    expect(updatedTimer).toEqual({...zeroTimer, isPaused: true});
  });

  it('should decrement the timer by 1 minute and set the seconds to 59 if the timer seconds are 0', () => {
    jest.useFakeTimers();

    const wrapper = ({children}: {children?: React.ReactNode}) => (
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

  it('should decrement the seconds by 1 and leave the minutes as is if the timer seconds are greater than 0 ', () => {
    jest.useFakeTimers();

    const timer = {
      id: 1,
      name: 'Timer Name',
      minutes: 9,
      seconds: 59,
      isPaused: false,
    };

    const wrapper = ({children}: {children?: React.ReactNode}) => (
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

    expect(updatedTimer).toEqual({...timer, minutes: 9, seconds: 58});
  });
});
