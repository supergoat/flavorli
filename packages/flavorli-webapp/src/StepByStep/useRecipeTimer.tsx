import React from 'react';
import {ITimer, IRecipeTimer} from '../types';
import {useRecipeTimersContext} from './timersContext';

/**
 * Checks if a timer with the given timer.id exists in context.
 * If it does it returns it, else it creates a new context timer
 * and adds it to the context and localStorage
 * @param timer The timer info used to create a new timer in context
 */
export function useAddRecipeTimerIfItDoesNotExist(timerInfo: ITimer) {
  const {setRecipeTimers, recipeTimers, recipeId} = useRecipeTimersContext();

  // Return timer if it exists in context
  const recipeTimer = recipeTimers.get(timerInfo.id);
  if (recipeTimer) {
    return recipeTimer;
  }

  const newRecipeTimer = createRecipeNewTimer(timerInfo);
  updatedRecipeTimerInLocalStorage(newRecipeTimer, recipeId);

  // Update the recipe timers context with the new recipe timer
  setRecipeTimers({timerId: newRecipeTimer.id, recipeTimer: newRecipeTimer});

  return newRecipeTimer;
}

function createRecipeNewTimer(timerInfo: ITimer) {
  const newRecipeTimer = {
    ...timerInfo,
    isPaused: true,
    updatedAt: new Date().toISOString(),
    remainingTime: (timerInfo.minutes * 60 + timerInfo.seconds) * 1000,
  };

  return newRecipeTimer;
}

export function useRecipeTimer(
  updatedAt: string,
  duration: number,
  isPaused: boolean,
) {
  const [remainingTime, setRemainingTime] = React.useState(duration);

  const endTime = useCalculateEndTime(updatedAt, duration);

  React.useEffect(() => {
    const newRemainingTime = getRemainingTime(endTime.current);

    if (isPaused) {
      setRemainingTime(duration);
    } else if (newRemainingTime <= 0) {
      setRemainingTime(0);
    } else {
      setRemainingTime(newRemainingTime);
    }
  }, [endTime, isPaused, duration]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = getRemainingTime(endTime.current);
      if (isPaused) {
        clearInterval(interval);
      } else if (newRemainingTime <= 0) {
        setRemainingTime(0);
      } else {
        setRemainingTime(newRemainingTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime, isPaused]);

  return remainingTime;
}

function getRemainingTime(endTime: number) {
  return endTime - new Date().getTime();
}

function useCalculateEndTime(updatedAt: string, duration: number) {
  const end = React.useRef(0);

  React.useEffect(() => {
    end.current = new Date(updatedAt).getTime() + duration;
  }, [duration, updatedAt]);

  return end;
}

export function useToggleTimer(timer: IRecipeTimer, remainingTime: number) {
  const {setRecipeTimers, recipeId} = useRecipeTimersContext();

  return () => {
    const updatedTimer = {
      ...timer,
      remainingTime,
      updatedAt: new Date().toISOString(),
      isPaused: !timer.isPaused,
    };

    setRecipeTimers({timerId: timer.id, recipeTimer: updatedTimer});

    updatedRecipeTimerInLocalStorage(updatedTimer, recipeId);
  };
}

export function useResetTimer(timer: ITimer) {
  const {setRecipeTimers, recipeId} = useRecipeTimersContext();

  return () => {
    const updatedTimer = {
      ...timer,
      remainingTime: (timer.minutes * 60 + timer.seconds) * 1000,
      updatedAt: new Date().toISOString(),
      isPaused: true,
    };

    setRecipeTimers({timerId: timer.id, recipeTimer: updatedTimer});
    updatedRecipeTimerInLocalStorage(updatedTimer, recipeId);
  };
}

export function convertMsToMinsAndSecs(ms: number) {
  ms = 1000 * Math.round(ms / 1000); // round to nearest second
  var d = new Date(ms);
  const hours = d.getUTCHours();
  const minutes = d.getUTCMinutes() + hours * 60;
  return {minutes, seconds: d.getUTCSeconds()};
}

function updatedRecipeTimerInLocalStorage(
  updatedTimer: IRecipeTimer,
  recipeId: string,
) {
  const allSavedTimers = getSavedTimersFromLocalStorage();

  const recipeTimers = getRecipeTimers(recipeId);

  recipeTimers.set(updatedTimer.id, updatedTimer);

  const updatedTimers = {
    ...allSavedTimers,
    [recipeId]: JSON.stringify(Array.from(recipeTimers.entries())),
  };

  localStorage.setItem('__timers__', JSON.stringify(updatedTimers));

  return updatedTimer;
}

export function getSavedTimersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('__timers__') || '{}');
}

export function getRecipeTimers(recipeId: string) {
  const allSavedTimers = getSavedTimersFromLocalStorage();
  const recipeTimers = allSavedTimers?.[recipeId];

  if (isPlainObject(recipeTimers)) {
    const recipeTimersMap = new Map<string, IRecipeTimer>();

    Object.keys(recipeTimers).forEach(timerId => {
      recipeTimersMap.set(timerId, recipeTimers[timerId]);
    });

    return recipeTimersMap;
  }

  return new Map<string, IRecipeTimer>(JSON.parse(recipeTimers || '[]'));
}

function isPlainObject(input: any) {
  return input && !Array.isArray(input) && typeof input === 'object';
}
