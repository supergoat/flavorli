import React from 'react';
import styled from 'styled-components';
import {Stack} from './Stack';
import {IColor} from '../theme/colors';
import {spacings} from '../theme/spacings';

interface IPageProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
  background?: IColor;
  padding?: keyof typeof spacings;
  paddingTop?: keyof typeof spacings;
  paddingRight?: keyof typeof spacings;
  paddingBottom?: keyof typeof spacings;
  paddingLeft?: keyof typeof spacings;
}
export const Scroll = ({
  children,
  direction = 'vertical',
  width = '100%',
  height = '100%',
  ...rest
}: IPageProps) => {
  return (
    <ScrollWrapper
      direction={direction}
      height={height}
      width={width}
      {...rest}
    >
      {children}
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled(Stack)`
  position: relative;
  overflow-x: ${p => (p.direction === 'horizontal' ? 'scroll' : 'hidden')};
  overflow-y: ${p => (p.direction === 'vertical' ? 'scroll' : 'hidden')};
`;
