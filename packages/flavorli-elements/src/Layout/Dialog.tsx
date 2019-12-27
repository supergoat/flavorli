import React from 'react';
import {
  useLockBodyScroll,
  useFocusFirstDescendant,
  useTrapFocus,
  useCloseOnEsc,
} from '../hooks';

interface IDialog {
  label: string;
  describedbyID: string;
  onClose: () => void;
  children: React.ReactNode;
}
export const Dialog = ({label, describedbyID, onClose, children}: IDialog) => {
  const refEl = React.useRef<HTMLDivElement>(null);
  useLockBodyScroll();
  useFocusFirstDescendant(refEl);
  useTrapFocus(refEl);
  useCloseOnEsc(onClose);

  return (
    <div
      ref={refEl}
      role="dialog"
      aria-modal={true}
      aria-label={label}
      aria-describedby={describedbyID}
    >
      {children}
    </div>
  );
};
