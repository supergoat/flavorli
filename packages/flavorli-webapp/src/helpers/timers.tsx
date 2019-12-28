import React from 'react';
import {IStep, ITimer} from '../StepByStep/types';

export const TimersContext = React.createContext<{
  timers: any;
  setTimers: React.Dispatch<React.SetStateAction<{}>>;
  resetTimer: React.Dispatch<React.SetStateAction<{}>>;
} | null>(null);

export function TimersProvider({initialValues = {}, ...props}) {
  const [timers, setTimers] = React.useState(initialValues);
  const resetTimer = () => setTimers(initialValues);
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

export function useInitStepTimers(steps: IStep[]) {
  const {timers, setTimers} = useTimersContext();

  React.useEffect(() => {
    steps.forEach(step => {
      const timer = step.timer;
      if (!timer) return;
      setTimers(t => ({
        ...t,
        [timer.id]: {...timer, isPaused: true},
      }));
    });
  }, [setTimers, steps]);

  useUpdateTimers(timers, setTimers);
}

interface initTimer extends ITimer {
  isPaused: boolean;
}

export function useUpdateTimers(timers: initTimer[], setTimers: any) {
  React.useEffect(() => {
    const interval: number = setInterval(() => {
      let updatedTimers = {...timers};

      Object.values(timers).forEach(timer => {
        if (timer.isPaused) return;

        if (timer.minutes === 0 && timer.seconds === 0) {
          updatedTimers = {
            ...updatedTimers,
            [timer.id]: {...timer, isPaused: true},
          };
          clearInterval(interval);
        } else if (timer.seconds > 0) {
          updatedTimers = {
            ...updatedTimers,
            [timer.id]: {...timer, seconds: timer.seconds - 1},
          };
        } else {
          updatedTimers = {
            ...updatedTimers,
            [timer.id]: {...timer, minutes: timer.minutes - 1, seconds: 59},
          };
        }
      });

      setTimers(updatedTimers);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setTimers, timers]);
}
