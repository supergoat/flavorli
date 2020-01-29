import React from 'react';
import {ITimer, IContextITimer} from '../types';

export function useTimer(
  updatedAt: string,
  duration: number,
  isPaused: boolean,
) {
  const [remainingTime, setRemainingTime] = React.useState(duration);

  const end = useCalculateEndTime(updatedAt, duration);

  React.useEffect(() => {
    const newRemainingTime = getRemainingTime(end.current);

    if (isPaused) {
      // do nothing
      setRemainingTime(duration);
    } else if (newRemainingTime <= 0) {
      setRemainingTime(0);
    } else {
      setRemainingTime(newRemainingTime);
    }
  }, [end, isPaused, duration]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = getRemainingTime(end.current);
      if (isPaused) {
        clearInterval(interval);
      } else if (newRemainingTime <= 0) {
        setRemainingTime(0);
      } else {
        setRemainingTime(newRemainingTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [end, isPaused]);

  return remainingTime;
}

function getRemainingTime(duration: number) {
  return duration - new Date().getTime();
}

function useCalculateEndTime(updatedAt: string, duration: number) {
  const end = React.useRef(0);

  React.useEffect(() => {
    end.current = new Date(updatedAt).getTime() + duration;
  }, [duration, updatedAt]);

  return end;
}

export function useToggleTimer(timer: IContextITimer, remainingTime: number) {
  const {setTimers, recipeId} = useTimersContext();

  return () => {
    const updatedTimer = {
      ...timer,
      remainingTime,
      updatedAt: new Date().toISOString(),
      isPaused: !timer.isPaused,
    };

    setTimers({[timer.id]: updatedTimer});
    updatedTimerInLocalStorage(updatedTimer, recipeId);
  };
}

export function useResetTimer(timer: ITimer) {
  const {setTimers, recipeId} = useTimersContext();

  return () => {
    const updatedTimer = {
      ...timer,
      remainingTime: (timer.minutes * 60 + timer.seconds) * 1000,
      updatedAt: new Date().toISOString(),
      isPaused: true,
    };

    setTimers({[timer.id]: updatedTimer});
    updatedTimerInLocalStorage(updatedTimer, recipeId);
  };
}

export function convertMillisecondsToMinutesAndSeconds(ms: number) {
  ms = 1000 * Math.round(ms / 1000); // round to nearest second
  var d = new Date(ms);
  const hours = d.getUTCHours();
  const minutes = d.getUTCMinutes() + hours * 60;
  return {minutes, seconds: d.getUTCSeconds()};
}

export function useAddTimerIfItDoesNotExist(timer: ITimer) {
  const {setTimers, timers, recipeId} = useTimersContext();

  // Return timer if it exists in localStorage
  if (timers[timer.id]) return timers[timer.id];

  const newTimer = createNewTimer(timer);
  updatedTimerInLocalStorage(newTimer, recipeId);

  // Update the timers context with the new timer
  setTimers({[newTimer.id]: newTimer});

  return newTimer;
}

function createNewTimer(timer: ITimer) {
  const newTimer = {
    ...timer,
    isPaused: true,
    updatedAt: new Date().toISOString(),
    remainingTime: (timer.minutes * 60 + timer.seconds) * 1000,
  };

  return newTimer;
}

function updatedTimerInLocalStorage(
  updatedTimer: IContextITimer,
  recipeId: string,
) {
  const allSavedTimers = getSavedTimersFromLocalStorage();

  const updatedTimers = {
    ...allSavedTimers,
    [recipeId]: {
      ...allSavedTimers?.[recipeId],
      [updatedTimer.id]: updatedTimer,
    },
  };

  localStorage.setItem('__timers__', JSON.stringify(updatedTimers));

  return updatedTimer;
}

function getSavedTimersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('__timers__') || '{}');
}

interface ITimersContext {
  recipeId: string;
  timers: {[timerId: string]: IContextITimer};
  setTimers: React.Dispatch<{
    [timerId: string]: IContextITimer;
  }>;
}

export const TimersContext = React.createContext<ITimersContext | null>(null);

export function TimersProvider({
  recipeId,
  initialValues,
  ...props
}: {
  recipeId: string;
  initialValues?: {[timerId: string]: IContextITimer};
  children: React.ReactNode;
}) {
  const [initState] = React.useState(
    initialValues || getSavedTimersFromLocalStorage()[recipeId] || {},
  );

  const [timers, setTimers] = React.useReducer(
    (
      state: {[timerId: string]: IContextITimer},
      action: {[timerId: string]: IContextITimer},
    ) => ({
      ...state,
      ...action,
    }),
    initState,
  );

  return (
    <TimersContext.Provider value={{timers, setTimers, recipeId}} {...props} />
  );
}

export function useTimersContext() {
  const context = React.useContext(TimersContext);

  if (!context) {
    throw new Error('useTimersContext must be used within a TimersProvider');
  }
  return context;
}
