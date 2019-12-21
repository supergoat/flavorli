import React, {FC, Children} from 'react';
import styled from 'styled-components';
import {spacings} from '../theme/spacings';
import {colors} from '../theme/colors';
import {motion, MotionProps} from 'framer-motion';
import {shadows} from '../theme/shadows';

export interface IStackProps extends MotionProps {
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
  background?: keyof typeof colors;
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
  overflow?: 'hidden' | 'visible';
}
export default React.forwardRef<HTMLDivElement, IStackProps>(
  (
    {
      children,
      direction = 'vertical',
      distribution = 'start',
      alignment = 'start',
      ...rest
    },
    ref,
  ) => {
    return (
      <Stack
        ref={ref}
        distribution={distribution}
        direction={direction}
        alignment={alignment}
        {...rest}
      >
        {Children.map(children, child => {
          const marginRight =
            direction === 'horizontal' && rest.gap ? `${rest.gap}px` : 0;
          const marginBottom =
            direction === 'vertical' && rest.gap ? `${rest.gap}px` : 0;
          return (
            child && (
              <Child
                component={child}
                marginRight={marginRight}
                marginBottom={marginBottom}
              />
            )
          );
        })}
      </Stack>
    );
  },
);

export const Child = styled(({component, ...props}) => {
  return React.cloneElement(component, props);
})`
  margin-right: ${p => p.marginRight};

  margin-bottom: ${p => p.marginBottom};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const Stack = styled(motion.div)<IStackProps>`
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

  /* ${Child} {
    margin-right: ${p =>
      p.direction === 'horizontal' && p.gap ? `${p.gap}px` : 0};

    margin-bottom: ${p =>
      p.direction === 'vertical' && p.gap ? `${p.gap}px` : 0};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  } */
`;
