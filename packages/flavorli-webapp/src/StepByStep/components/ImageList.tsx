import React from 'react';
import {Stack} from '@flavorli/elements';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IImageListProps {
  children: React.ReactNode;
}
const ImageList = ({children}: IImageListProps) => {
  return (
    <Stack
      width="100%"
      height="100%"
      id="step-images"
      data-testid="step-images"
      aria-live="polite"
      paddingLeft={8}
      paddingRight={8}
    >
      {children}
    </Stack>
  );
};

export default ImageList;
