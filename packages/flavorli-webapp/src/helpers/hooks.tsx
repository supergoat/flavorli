import React from 'react';

export function useTimer(
  minutes: number,
  seconds: number,
): [
  {minutes: number; seconds: number},
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  const [isPaused, setIsPaused] = React.useState<boolean>(true);
  const [mins, setMins] = React.useState(minutes);
  const [secs, setSecs] = React.useState(seconds);

  React.useEffect(() => {
    if (isPaused) return;
    const timer: number = setInterval(() => {
      if (mins === 0 && secs === 0) {
        setIsPaused(true);
        clearInterval(timer);
      } else if (secs > 0) {
        setSecs(s => s - 1);
      } else {
        setMins(m => m - 1);
        setSecs(59);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [mins, secs, isPaused]);

  const time = {
    minutes: mins,
    seconds: secs,
  };

  return [time, isPaused, setIsPaused];
}

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef<() => void>();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => {
        console.log('unmounted');
        return clearInterval(id);
      };
    }
  }, [delay]);
}

export function useRestoreFocus(
  refEl: React.RefObject<HTMLElement>,
  predecate: boolean,
) {
  React.useEffect(() => {
    if (predecate) {
      const element = refEl?.current;
      element?.focus();
    }
  }, [refEl, predecate]);
}
