import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {RecipeTimersProvider} from './timersContext';
import {
  useAddRecipeTimerIfItDoesNotExist,
  useRecipeTimer,
} from './useRecipeTimer';
import {timer as MockTimer} from './mockData';
import {IRecipeTimer} from '../types';

beforeEach(() => {
  jest
    .spyOn(Date.prototype, 'toISOString')
    .mockReturnValue('2020-02-01T20:26:03.142Z');
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
  jest.useRealTimers();
});

const setupUseAddRecipeTimerIfItDoesNotExist = ({
  initialValues,
}: {initialValues?: {[timerId: string]: IRecipeTimer}} = {}) => {
  const wrapper = ({children}: {children?: React.ReactNode}) => (
    <RecipeTimersProvider recipeId="1" initialValues={initialValues}>
      {children}
    </RecipeTimersProvider>
  );

  return {
    ...renderHook(() => useAddRecipeTimerIfItDoesNotExist(MockTimer), {
      wrapper,
    }),
    timer: MockTimer,
  };
};

describe('useAddRecipeTimerIfItDoesNotExist', () => {
  it('should add timer if it doesn not exist in context', () => {
    const {result, timer} = setupUseAddRecipeTimerIfItDoesNotExist();

    const expectedTimer = {
      ...timer,
      isPaused: true,
      updatedAt: new Date().toISOString(),
      remainingTime: (timer.minutes * 60 + timer.seconds) * 1000,
    };

    expect(result.current).toEqual(expectedTimer);
  });

  it('should return the timer if it is already in context', () => {
    const expectedTimer = {
      ...MockTimer,
      isPaused: true,
      updatedAt: new Date().toISOString(),
      remainingTime: (MockTimer.minutes * 60 + MockTimer.seconds) * 1000,
    };

    const {result} = setupUseAddRecipeTimerIfItDoesNotExist({
      initialValues: {[expectedTimer.id]: expectedTimer},
    });

    expect(result.current).toEqual(expectedTimer);
  });
});

const setupUseRecipeTimer = ({
  initialValues,
}: {initialValues?: {[timerId: string]: IRecipeTimer}} = {}) => {
  const wrapper = ({children}: {children?: React.ReactNode}) => (
    <RecipeTimersProvider recipeId="1" initialValues={initialValues}>
      {children}
    </RecipeTimersProvider>
  );

  const updatedAt = new Date().toISOString();
  const duration = 600000;
  const isPaused = true;

  return {
    ...renderHook(() => useRecipeTimer(updatedAt, duration, isPaused), {
      wrapper,
    }),
    updatedAt,
    duration,
    isPaused,
  };
};

describe('useRecipeTimer', () => {
  it('it should return the remainingTime equal to the duration  if the timer isPaused', async () => {
    jest.useFakeTimers();

    const {result, duration} = setupUseRecipeTimer();

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const remainingTime = result.current;

    expect(duration).toEqual(remainingTime);
  });

  // it('should pause the timer and return it if the timer is set to 0 minutes and 0 seconds', () => {
  //   jest.useFakeTimers();

  //   const zeroTimer = {...timer, isPaused: false, minutes: 0, seconds: 0};

  //   const wrapper = ({children}: {children?: React.ReactNode}) => (
  //     <RecipeTimersProvider initialValues={{[zeroTimer.id]: zeroTimer}}>
  //       {children}
  //     </RecipeTimersProvider>
  //   );

  //   const {result} = renderHook(() => useRecipeTimer(zeroTimer), {
  //     wrapper,
  //   });

  //   act(() => {
  //     jest.runOnlyPendingTimers();
  //   });

  //   const updatedTimer = result.current;

  //   expect(updatedTimer).toEqual({...zeroTimer, isPaused: true});
  // });

  // it('should decrement the timer by 1 minute and set the seconds to 59 if the timer seconds are 0', () => {
  //   jest.useFakeTimers();

  //   const wrapper = ({children}: {children?: React.ReactNode}) => (
  //     <RecipeTimersProvider initialValues={{[timer.id]: timer}}>
  //       {children}
  //     </RecipeTimersProvider>
  //   );

  //   const {result} = renderHook(() => useRecipeTimer(timer), {
  //     wrapper,
  //   });

  //   act(() => {
  //     jest.runOnlyPendingTimers();
  //   });

  //   const updatedTimer = result.current;

  //   expect(updatedTimer).toEqual({...timer, minutes: 9, seconds: 59});
  // });

  // it('should decrement the seconds by 1 and leave the minutes as is if the timer seconds are greater than 0 ', () => {
  //   jest.useFakeTimers();

  //   const timer = {
  //     id: 1,
  //     name: 'Timer Name',
  //     minutes: 9,
  //     seconds: 59,
  //     isPaused: false,
  //   };

  //   const wrapper = ({children}: {children?: React.ReactNode}) => (
  //     <RecipeTimersProvider initialValues={{[timer.id]: timer}}>
  //       {children}
  //     </RecipeTimersProvider>
  //   );

  //   const {result} = renderHook(() => useRecipeTimer(timer), {
  //     wrapper,
  //   });

  //   act(() => {
  //     jest.runOnlyPendingTimers();
  //   });

  //   const updatedTimer = result.current;

  //   expect(updatedTimer).toEqual({...timer, minutes: 9, seconds: 58});
  // });
});
