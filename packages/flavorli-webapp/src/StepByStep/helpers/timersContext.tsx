import React from 'react';
import {ITimer} from '../types';
import {useInterval} from '../../helpers/hooks';

interface ITimersContext {
  timers: {[timerId: number]: ITimer};
  setTimers: React.Dispatch<React.SetStateAction<{}>>;
}

export const TimersContext = React.createContext<ITimersContext | null>(null);

export function TimersProvider({
  initialValues,
  ...props
}: {
  initialValues?: Partial<ITimersContext>;
  children: React.ReactNode;
}) {
  const [contextTimers, setTimers] = React.useState({});

  const timers = initialValues?.timers;

  React.useEffect(() => {
    if (timers) setTimers(timers);
  }, [timers]);

  if (!contextTimers) return null;

  return (
    <TimersContext.Provider
      value={{timers: contextTimers, setTimers}}
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

export function useAddTimerIfItDoesNotExist(timer: ITimer) {
  const {timers, setTimers} = useTimersContext();
  if (timers[timer.id]) return;
  setTimers(t => ({...t, [timer.id]: {...timer, isPaused: true}}));
}

export function useUpdateTimers(timer: ITimer) {
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
