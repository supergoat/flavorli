import React from 'react';
import {ITimer} from './types';
import {useInterval} from '../helpers/hooks';

interface ITimersContext {
  timers: {[timerId: number]: ITimer};
  setTimers: React.Dispatch<{
    [timerId: number]: ITimer;
  }>;
}

export const TimersContext = React.createContext<ITimersContext | null>(null);

export function TimersProvider({
  initialValues,
  ...props
}: {
  initialValues?: {[timerId: number]: ITimer};
  children: React.ReactNode;
}) {
  const [initState] = React.useState(initialValues || {});
  const [timers, setTimers] = React.useReducer(
    (
      state: {[timerId: number]: ITimer},
      action: {[timerId: number]: ITimer},
    ) => ({
      ...state,
      ...action,
    }),
    initState,
  );

  return <TimersContext.Provider value={{timers, setTimers}} {...props} />;
}

export function useTimersContext() {
  const context = React.useContext(TimersContext);

  if (!context) {
    throw new Error('useTimersContext must be used within a TimersProvider');
  }
  return context;
}

export function useAddTimerIfItDoesNotExist(timer: ITimer) {
  const context = useTimersContext();

  if (context.timers[timer.id]) return context;
  context.setTimers({
    [timer.id]: {...timer, isPaused: timer.isPaused ?? true},
  });

  return context;
}

function decrementTimer(timer: ITimer) {
  if (timer.isPaused) return timer;

  if (timer.minutes === 0 && timer.seconds === 0) {
    return {...timer, isPaused: true};
  }

  if (timer.seconds > 0) {
    return {...timer, seconds: timer.seconds - 1};
  }

  return {
    ...timer,
    minutes: timer.minutes - 1,
    seconds: 59,
  };
}

export function useRunTimer(timer: ITimer) {
  const {setTimers} = useTimersContext();

  let updatedTimer = decrementTimer(timer);

  useInterval(
    () => setTimers({[updatedTimer.id]: updatedTimer}),
    updatedTimer.isPaused ||
      (updatedTimer.minutes === 0 && updatedTimer.seconds === 0)
      ? null
      : 1000,
  );

  return updatedTimer;
}
