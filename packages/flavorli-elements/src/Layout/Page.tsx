import React from 'react';
import styled from 'styled-components';
import {Stack} from './index';
import {useDimensions} from '../hooks';
import {colors} from '../theme/colors';
import {spacings} from '../theme/spacings';

const SLIDE_TRIGGER_THRESHOLD = 70;

interface IPageProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
  background?: keyof typeof colors;
  padding?: keyof typeof spacings;
  gap?: keyof typeof spacings;
}
export const Page = ({
  children,
  direction = 'horizontal',
  background,
  gap = 8,
  padding,
  width = '100%',
  height = '100%',
}: IPageProps) => {
  const refEl = React.useRef<HTMLDivElement>(null);
  const [page, setPage] = React.useState(0);
  const [pageWidth, pageHeight] = useDimensions(refEl);

  const noOfChildren = React.Children.count(children);

  const paddingAdjustment = padding ? padding * 2 : 0;
  const pageOffset =
    page *
    ((direction === 'horizontal' ? pageWidth : pageHeight) +
      gap -
      paddingAdjustment);

  const onDragEnd = (e: any, {offset}: any) => {
    if (direction === 'horizontal') {
      const offsetX = offset.x;

      if (offsetX < -SLIDE_TRIGGER_THRESHOLD) {
        if (page < noOfChildren - 1) setPage(p => p + 1);
      }

      if (offsetX > SLIDE_TRIGGER_THRESHOLD) {
        if (page > 0) setPage(p => p - 1);
      }
    } else {
      const offsetY = offset.y;

      if (offsetY < -SLIDE_TRIGGER_THRESHOLD) {
        if (page < noOfChildren - 1) setPage(p => p + 1);
      }

      if (offsetY > SLIDE_TRIGGER_THRESHOLD) {
        if (page > 0) setPage(p => p - 1);
      }
    }
  };

  const animate =
    direction === 'horizontal'
      ? {translateX: `-${pageOffset}px`}
      : {translateY: `-${pageOffset}px`};

  const transition = {
    type: 'spring',
    damping: 400,
    stiffness: 200,
  };

  const dragConstraints =
    direction === 'horizontal' ? {left: 0, right: 0} : {top: 0, bottom: 0};

  return (
    <PageWrapper
      width={width}
      height={height}
      ref={refEl}
      background={background}
    >
      <Stack
        direction={direction}
        gap={gap}
        padding={padding}
        drag={direction === 'horizontal' ? 'x' : 'y'}
        dragElastic={0.5}
        dragConstraints={dragConstraints}
        onDragEnd={onDragEnd}
        animate={animate}
        transition={transition}
      >
        {React.Children.map(children, child => (
          <Child
            component={child}
            width={pageWidth - paddingAdjustment}
            height={pageHeight - paddingAdjustment}
          />
        ))}
      </Stack>
    </PageWrapper>
  );
};

export const Child = styled(({component, ...props}) => {
  return React.cloneElement(component, props);
})`
  width: ${props => `${props.width}px`} !important;
  height: ${props => `${props.height}px`} !important;
`;

const PageWrapper = styled(Stack)`
  position: relative;
  overflow: hidden;
`;
