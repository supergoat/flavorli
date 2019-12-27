import React from 'react';
import styled from 'styled-components';
import StepList from './components/StepList';
import Step from './components/Step';
import {steps as STEPS} from './mockData';
import StepDialog from './components/StepDialog';

export default ({steps = STEPS}: {steps?: any[]}) => {
  const [lastFocus, setLastFocus] = React.useState();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [openLink, setOpenLink] = React.useState();

  const onChangeStep = (direction: 1 | -1) => {
    setCurrentStep(s => s + direction);
  };

  const onViewStep = (stepNo: number) => {
    setLastFocus(document.activeElement);
    setOpenLink(stepNo);
  };

  const onCloseDialog = () => {
    setOpenLink(null);
    lastFocus.focus();
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
      {openLink && (
        <StepDialog
          stepNo={openLink}
          noOfSteps={steps.length}
          onViewStep={onViewStep}
          onClose={() => onCloseDialog()}
        />
      )}
    </Preparation>
  );
};

const Preparation = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;
