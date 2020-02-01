import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {useRecipeTimersContext, RecipeTimersProvider} from './timersContext';
import {useAddTimerIfItDoesNotExist, useRunTimer} from './useTimer';
import {timer} from './mockData';

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe('useTimersContext', () => {
  it('should throw an error when useTimersContext is not used within a TimersProvider', () => {
    const {result} = renderHook(() => useRecipeTimersContext());

    expect(() => {
      expect(result.current).not.toBe(undefined);
    }).toThrow(Error('useTimersContext must be used within a TimersProvider'));
  });

  it('should expose the recipeTimers and setRecipeTimers function', () => {
    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <RecipeTimersProvider>{children}</RecipeTimersProvider>
    );

    const {result} = renderHook(() => useRecipeTimersContext(), {wrapper});

    const recipeTimers = result.current['recipeTimers'];
    const setRecipeTimers = result.current['setRecipeTimers'];

    expect(recipeTimers).toEqual({});
    expect(typeof setRecipeTimers).toBe('function');
  });

  it('should use custom recipeTimers', () => {
    const contextTimers = {[timer.id]: timer};
    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <RecipeTimersProvider initialValues={contextTimers}>
        {children}
      </RecipeTimersProvider>
    );

    const {result} = renderHook(() => useRecipeTimersContext(), {wrapper});

    const recipeTimers = result.current['recipeTimers'];
    const setRecipeTimers = result.current['setRecipeTimers'];

    expect(recipeTimers).toEqual(contextTimers);
    expect(typeof setRecipeTimers).toBe('function');
  });
});

describe('useAddTimerIfItDoesNotExist', () => {
  it('should add timer if it doesn not exist in context', () => {
    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <RecipeTimersProvider>{children}</RecipeTimersProvider>
    );

    const {result} = renderHook(() => useAddTimerIfItDoesNotExist(timer), {
      wrapper,
    });

    const recipeTimers = result.current['recipeTimers'];

    expect(recipeTimers).toEqual({[timer.id]: timer});
  });

  it('should return the timer if it is already in context', () => {
    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <RecipeTimersProvider initialValues={{[timer.id]: timer}}>
        {children}
      </RecipeTimersProvider>
    );

    const {result} = renderHook(() => useAddTimerIfItDoesNotExist(timer), {
      wrapper,
    });

    const recipeTimers = result.current['recipeTimers'];

    expect(recipeTimers).toEqual({[timer.id]: timer});
  });
});

describe('useRunTimer', () => {
  it('it should return the timer if the timer isPaused', async () => {
    jest.useFakeTimers();

    const pausedTimer = {...timer, isPaused: true};

    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <RecipeTimersProvider initialValues={{[pausedTimer.id]: pausedTimer}}>
        {children}
      </RecipeTimersProvider>
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
      <RecipeTimersProvider initialValues={{[zeroTimer.id]: zeroTimer}}>
        {children}
      </RecipeTimersProvider>
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
      <RecipeTimersProvider initialValues={{[timer.id]: timer}}>
        {children}
      </RecipeTimersProvider>
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
      <RecipeTimersProvider initialValues={{[timer.id]: timer}}>
        {children}
      </RecipeTimersProvider>
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
