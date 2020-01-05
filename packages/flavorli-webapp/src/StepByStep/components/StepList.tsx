import React from 'react';
import {Stack} from '@flavorli/elements';
import {useStepsContext} from '../helpers/StepByStepProvider';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IPreparationStepListProps {
  children: React.ReactNode;
}
const StepList = ({children}: IPreparationStepListProps) => {
  const {currentStep} = useStepsContext();
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
      {React.Children.map(children, (child, index) => {
        return currentStep === index + 1 && child;
      })}
    </Stack>
  );
};

export default StepList;
