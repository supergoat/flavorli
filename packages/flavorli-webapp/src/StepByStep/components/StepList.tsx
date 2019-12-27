import React from 'react';
import styled from 'styled-components';

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
    <StepListWrapper
      id="recipe-steps"
      data-testid="recipe-steps"
      aria-live="polite"
    >
      {React.Children.map(children, (child, index: number) => {
        const isCurrentSlide = index === currentStep - 1;

        return isCurrentSlide && <>{child}</>;
      })}
    </StepListWrapper>
  );
};

export default StepList;

const StepListWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
