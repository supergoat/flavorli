import React from 'react';
import styled from 'styled-components';
import StepList from './components/StepList';
import Step from './components/Step';
import {steps as STEPS} from './helpers/mockData';
import StepDialog from './components/StepDialog';
import Timers from './components/Timers';
import {TimersProvider} from './helpers/timersContext';

export default ({steps = STEPS}: {steps?: any[]}) => {
  const [timers, setTimers] = React.useState({});
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

  React.useEffect(() => {
    steps.forEach(step => {
      const timer = step.timer;
      if (!timer) return;

      setTimers(t => ({...t, [timer.id]: {...timer, isPaused: true}}));
    });
  }, [steps]);

  return (
    <TimersProvider initialValues={{timers: timers}}>
      <Timers />
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
    </TimersProvider>
  );
};

const Preparation = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;
