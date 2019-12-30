import React from 'react';
import {
  useLockBodyScroll,
  useFocusFirstDescendant,
  useTrapFocus,
  useCloseOnEsc,
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

  return (
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
    </div>
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
