import React from 'react';
import {Stack} from '@flavorli/elements';
import {useStepByStepContext} from '../stepByStepContext';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IPreparationStepListProps {
  children: React.ReactNode;
}
const StepList = ({children}: IPreparationStepListProps) => {
  const {currentStep} = useStepByStepContext();
  return (
    <Stack
      width="100%"
      height="100%"
      id="recipe-steps"
      data-testid="recipe-steps"
      aria-live="polite"
      paddingLeft={4}
      paddingRight={4}
    >
      {React.Children.map(children, (child, index) => {
        return (
          currentStep === index + 1 && (
            <Stack
              key={index}
              width="100%"
              height="100%"
              role="group"
              aria-label={`Step ${currentStep} of ${React.Children.count(
                children,
              )}`}
            >
              {child}
            </Stack>
          )
        );
      })}
    </Stack>
  );
};

export default StepList;
