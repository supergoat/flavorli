import React from 'react';
import {ITimer} from '../StepByStep/types';
import {useInterval} from './hooks';

export const TimersContext = React.createContext<{
  timers: any;
  setTimers: React.Dispatch<React.SetStateAction<{}>>;
  resetTimer: React.Dispatch<React.SetStateAction<{}>>;
} | null>(null);

export function TimersProvider({initialValues, ...props}: any) {
  const [timers, setTimers] = React.useState();

  React.useEffect(() => {
    setTimers(initialValues.timers);
  }, [initialValues.timers]);

  if (!timers) return null;

  const resetTimer = () => setTimers(initialValues.timers);
  return (
    <TimersContext.Provider
      value={{timers, setTimers, resetTimer}}
      {...props}
    />
  );
}

export function useTimersContext() {
  const context = React.useContext(TimersContext);
  if (!context) {
    throw new Error('useTimersContext must be used within a TimersProvider');
  }
  return context;
}

export interface initTimer extends ITimer {
  isPaused: boolean;
}

export function useUpdateTimers(timer: initTimer) {
  const {setTimers} = useTimersContext();

  useInterval(() => {
    if (timer.isPaused) return;

    if (timer.minutes === 0 && timer.seconds === 0) {
      setTimers(t => ({
        ...t,
        [timer.id]: {...timer, isPaused: true},
      }));
    } else if (timer.seconds > 0) {
      setTimers(t => ({
        ...t,
        [timer.id]: {...timer, seconds: timer.seconds - 1},
      }));
    } else {
      setTimers(t => ({
        ...t,
        [timer.id]: {...timer, minutes: timer.minutes - 1, seconds: 59},
      }));
    }
  }, 1000);
}
