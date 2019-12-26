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