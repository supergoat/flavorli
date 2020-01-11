import React from 'react';
import {trapFocus, focusFirstDescendant} from './utils';

export function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

export function useDimensions(ref: React.RefObject<HTMLElement>) {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    if (ref && ref.current) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [ref.current]);

  return [width, height];
}

export function useFocusFirstDescendant(refEl: any) {
  React.useEffect(() => {
    if (refEl.current) {
      focusFirstDescendant(refEl.current);
    }
  }, [refEl.current]);
}

export function useTrapFocus(refEl: any) {
  function handleFocus(e: any) {
    trapFocus(e, refEl.current);
  }

  React.useEffect(() => {
    refEl.current.addEventListener('keydown', handleFocus);

    return () => {
      refEl.current.removeEventListener('keydown', handleFocus);
    };
  }, [refEl.current]);
}

export function useCloseOnEsc(onClose: () => void) {
  function handleEscKey(e: any) {
    const KEYCODE_ESC = 27;
    const isEsc = e.key === 'Escape' || e.keyCode === KEYCODE_ESC;

    if (!isEsc) {
      return;
    }

    onClose();
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);
}

export function usePortal(el: HTMLDivElement) {
  React.useEffect(() => {
    const portalRoot = document.createElement('div');
    portalRoot?.setAttribute('id', 'portal-root');
    document.body.appendChild(portalRoot);
    portalRoot?.appendChild(el);

    return () => {
      portalRoot?.removeChild(el);
    };
  }, [el]);
}
