import React from 'react';
import styled from 'styled-components';
import Stack from './Stack';
import {colors} from '../theme/colors';
import {spacings} from '../theme/spacings';

interface IPageProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
  background?: keyof typeof colors;
  padding?: keyof typeof spacings;
  paddingTop?: keyof typeof spacings;
  paddingRight?: keyof typeof spacings;
  paddingBottom?: keyof typeof spacings;
  paddingLeft?: keyof typeof spacings;
}
export default ({
  children,
  direction = 'vertical',
  width = '100%',
  height = '100%',
  ...rest
}: IPageProps) => {
  return (
    <Scroll direction={direction} height={height} width={width} {...rest}>
      {children}
    </Scroll>
  );
};

const Scroll = styled(Stack)`
  position: relative;
  overflow-x: ${p => (p.direction === 'horizontal' ? 'scroll' : 'hidden')};
  overflow-y: ${p => (p.direction === 'vertical' ? 'scroll' : 'hidden')};
  height: ${p => p.height};
  width: ${p => p.width};
  background: ${p => p.background};
  padding: ${p => {
    const paddingTop = p.paddingTop || p.padding || 0;
    const paddingRight = p.paddingRight || p.padding || 0;
    const paddingBottom = p.paddingBottom || p.padding || 0;
    const paddingLeft = p.paddingLeft || p.padding || 0;

    return `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
  }};
`;
