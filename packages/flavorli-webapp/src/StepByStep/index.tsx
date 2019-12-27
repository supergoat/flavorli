import React from 'react';
import styled from 'styled-components';
import StepList from './components/StepList';
import Step from './components/Step';
import {steps as STEPS} from './mockData';

export default ({steps = STEPS}: {steps?: any[]}) => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const onChangeStep = (direction: 1 | -1) => {
    setCurrentStep(s => s + direction);
  };

  const onViewStep = (stepNo: number) => {
    setCurrentStep(stepNo);
  };

  return (
    <Preparation aria-label="List of recipe steps">
      <StepList currentStep={currentStep}>
        {steps.map(step => {
          return (
            <Step
              step={step}
              key={step.no}
              onChangeStep={onChangeStep}
              onViewStep={onViewStep}
              noOfSteps={steps.length}
            />
          );
        })}
      </StepList>
    </Preparation>
  );
};

const Preparation = styled.section`
  width: 100%;
  height: 100%;
`;
