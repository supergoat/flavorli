import React from 'react';
import {Stack} from '@flavorli/elements';

interface IPageProps {
  children: React.ReactNode;
}
export default ({children}: IPageProps) => {
  const [page, setPage] = React.useState(0);
  const noOfChildren = React.Children.count(children);

  const pageOffset = page * (100 / noOfChildren);

  return (
    <Stack
      overflow="hidden"
      direction="horizontal"
      gap="XS"
      drag="x"
      dragElastic={0.5}
      dragConstraints={{left: 0, right: 0}}
      onDragEnd={(e, {offset}) => {
        const offsetX = offset.x;

        if (offsetX < -135) {
          if (page < noOfChildren - 1) setPage(p => p + 1);
        }

        if (offsetX > 135) {
          if (page > 0) setPage(p => p - 1);
        }
      }}
      animate={{
        translateX: `-${pageOffset}%`,
      }}
      transition={{
        type: 'spring',
        damping: 300,
        stiffness: 300,
      }}
    >
      {children}
    </Stack>
  );
};
