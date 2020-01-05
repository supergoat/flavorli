import ReactDOM from 'react-dom';
import React from 'react';
import {
  useLockBodyScroll,
  useFocusFirstDescendant,
  useTrapFocus,
  useCloseOnEsc,
  usePortal,
} from '../hooks';
import styled from 'styled-components';

interface IDialogProps {
  label?: string;
  labelledBy?: string;
  describedbyID: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Dialog = ({
  label,
  labelledBy,
  describedbyID,
  onClose,
  className,
  children,
  ...rest
}: IDialogProps) => {
  const refEl = React.useRef<HTMLDivElement>(null);
  useLockBodyScroll();
  useFocusFirstDescendant(refEl);
  useTrapFocus(refEl);
  useCloseOnEsc(onClose);

  const el = document.createElement('div');
  usePortal(el);

  return ReactDOM.createPortal(
    <div
      className={className}
      ref={refEl}
      role="dialog"
      aria-modal={true}
      aria-label={label}
      aria-labelledby={labelledBy}
      aria-describedby={describedbyID}
    >
      {children}
    </div>,
    el,
  );
};

const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
