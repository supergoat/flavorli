import React from 'react';

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
