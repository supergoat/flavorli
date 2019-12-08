import React, {FC, Children} from 'react';
import styled from 'styled-components';
import {spacings} from '../../spacings';
import {colors} from '../../colors';
import {motion, MotionProps} from 'framer-motion';

export interface IStackProps extends MotionProps {
  children: React.ReactNode;
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
  overflow?: 'hidden' | 'visible';
  background?: keyof typeof colors;
  padding?: keyof typeof spacings;
  gap?: keyof typeof spacings;
}
export default ({
  children,
  direction = 'vertical',
  distribution = 'start',
  alignment = 'start',
  ...rest
}: IStackProps) => {
  return (
    <Stack
      distribution={distribution}
      direction={direction}
      alignment={alignment}
      {...rest}
    >
      {Children.map(children, child => (
        <Child component={child} />
      ))}
    </Stack>
  );
};

export const Child = styled(({component, ...props}) => {
  return React.cloneElement(component, props);
})``;

export const Stack = styled(motion.div)<IStackProps>`
  display: flex;
  flex-direction: ${({direction}) =>
    direction === 'horizontal' ? 'row' : 'column'};
  justify-content: ${({distribution}) =>
    distribution === 'start' || distribution === 'end'
      ? `flex-${distribution}`
      : distribution};
  align-items: ${({alignment}) =>
    alignment === 'center' ? 'center' : `flex-${alignment}`};
  padding: ${({theme, padding}) =>
    padding ? `${theme.spacings[padding]}px` : 0};
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: ${props => props.overflow};

  background: ${({theme, background}) =>
    background && theme.colors[background]};

  ${Child} {
    margin-right: ${({direction, theme, gap}) =>
      direction === 'horizontal' && gap ? `${theme.spacings[gap]}px` : 0};

    margin-bottom: ${({direction, theme, gap}) =>
      direction === 'vertical' && gap ? `${theme.spacings[gap]}px` : 0};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;
