import React from 'react';
import {Stack} from '@flavorli/elements';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IStepListProps {
  children: React.ReactNode;
  currentStep: number;
}
const StepList = ({children, currentStep}: IStepListProps) => {
  return (
    <Stack
      width="100%"
      height="100%"
      id="recipe-steps"
      data-testid="recipe-steps"
      aria-live="polite"
      paddingLeft={8}
      paddingRight={8}
    >
      {React.Children.map(children, (child, index: number) => {
        const isCurrentSlide = index === currentStep - 1;

        return isCurrentSlide && <>{child}</>;
      })}
    </Stack>
  );
};

export default StepList;
