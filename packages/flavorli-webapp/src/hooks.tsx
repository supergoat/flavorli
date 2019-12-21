import React from 'react';

export function useTimer(
  minutes: number,
  seconds: number,
): [string, boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isPaused, setIsPaused] = React.useState<boolean>(true);
  const [mins, setMins] = React.useState(minutes);
  const [secs, setSecs] = React.useState(seconds);

  React.useEffect(() => {
    let timer: number;
    if (isPaused) return;
    timer = setInterval(() => {
      if (mins === 0 && secs === 0) return clearInterval(timer);

      if (secs > 0) {
        return setSecs(s => s - 1);
      }

      setMins(m => m - 1);
      setSecs(59);
    }, 1000);

    return () => clearInterval(timer);
  }, [mins, secs, isPaused]);

  const time = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;

  return [time, isPaused, setIsPaused];
}
