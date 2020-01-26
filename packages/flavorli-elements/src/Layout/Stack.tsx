import React, {FC, Children} from 'react';
import styled from 'styled-components';
import {spacings} from '../theme/spacings';
import {IColor} from '../theme/colors';
import {motion, MotionProps} from 'framer-motion';
import {shadows} from '../theme/shadows';

export interface IStackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | null;
  direction?: 'horizontal' | 'vertical';
  distribution?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignment?: 'start' | 'center' | 'end';
  width?: string;
  height?: string;
  background?: IColor;
  padding?: keyof typeof spacings;
  paddingTop?: keyof typeof spacings;
  paddingRight?: keyof typeof spacings;
  paddingBottom?: keyof typeof spacings;
  paddingLeft?: keyof typeof spacings;
  borderRadius?: keyof typeof spacings | '50%';
  borderRadiusTopLeft?: keyof typeof spacings;
  borderRadiusTopRight?: keyof typeof spacings;
  borderRadiusBottomRight?: keyof typeof spacings;
  borderRadiusBottomLeft?: keyof typeof spacings;
  gap?: keyof typeof spacings;
  shadow?: keyof typeof shadows;
  className?: string;
  border?: string;
  overflow?: 'hidden' | 'visible' | 'scroll';
}

const ForwardRefStack = (
  {
    children,
    direction = 'vertical',
    distribution = 'start',
    alignment = 'start',
    ...rest
  }: IStackProps & MotionProps,
  ref?: React.Ref<HTMLDivElement> | null | undefined,
) => {
  return (
    <StackWrapper
      ref={ref}
      distribution={distribution}
      direction={direction}
      alignment={alignment}
      {...rest}
    >
      {children}
    </StackWrapper>
  );
};

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<IStackProps & MotionProps>
>(ForwardRefStack);

export const StackWrapper = styled(motion.div)<IStackProps>`
  /* Select all direct children */
  > * {
    margin-bottom: ${p => p.direction === 'vertical' && `${p.gap}px`};
    margin-right: ${p => p.direction === 'horizontal' && `${p.gap}px`};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  position: relative;
  display: flex;
  flex-direction: ${p => (p.direction === 'horizontal' ? 'row' : 'column')};

  justify-content: ${p =>
    p.distribution === 'start' || p.distribution === 'end'
      ? `flex-${p.distribution}`
      : p.distribution};

  align-items: ${p =>
    p.alignment === 'center' ? 'center' : `flex-${p.alignment}`};

  padding: ${p => {
    const paddingTop = p.paddingTop || p.padding || 0;
    const paddingRight = p.paddingRight || p.padding || 0;
    const paddingBottom = p.paddingBottom || p.padding || 0;
    const paddingLeft = p.paddingLeft || p.padding || 0;

    return `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
  }};

  width: ${p => p.width};
  height: ${p => p.height};
  border: ${p => p.border};
  overflow: ${p => p.overflow};

  background: ${p => p.background && p.theme.colors[p.background]};

  border-radius: ${p => {
    const borderRadiusTopLeft = p.borderRadiusTopLeft || p.borderRadius || 0;
    const borderRadiusTopRight = p.borderRadiusTopRight || p.borderRadius || 0;
    const borderRadiusBottomRight =
      p.borderRadiusBottomRight || p.borderRadius || 0;
    const borderRadiusBottomLeft =
      p.borderRadiusBottomLeft || p.borderRadius || 0;

    return `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
  }};

  box-shadow: ${p => p.shadow && p.theme.shadows[p.shadow]};

  flex-shrink: 0;
`;
