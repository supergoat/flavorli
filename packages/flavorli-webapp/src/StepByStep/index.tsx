import React from 'react';
import StepList from './components/StepList';
import Step from './components/Step';
import {steps as STEPS} from './helpers/mockData';
import StepDialog from './components/StepDialog';
import Timers from './components/Timers';
import {TimersProvider} from './helpers/timersContext';
import {useTrapFocus, useFocusFirstDescendant} from '@flavorli/elements';
import styled from 'styled-components';

export default ({steps = STEPS}: {steps?: any[]}) => {
  const refEl = React.useRef<HTMLDivElement>(null);
  const [lastFocus, setLastFocus] = React.useState();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [openLink, setOpenLink] = React.useState();

  useFocusFirstDescendant(refEl);
  useTrapFocus(refEl);
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
    <DialogWrapper ref={refEl}>
      <TimersProvider>
        <Timers />
        <section
          aria-label="List of recipe steps"
          id="list-of-recipe-steps"
          style={{
            width: '100%',
            height: 'calc(100% - 58px)',
          }}
        >
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
        </section>

        {openLink && (
          <StepDialog
            stepNo={openLink}
            noOfSteps={steps.length}
            onViewStep={onViewStep}
            onClose={() => onCloseDialog()}
          />
        )}
      </TimersProvider>
    </DialogWrapper>
  );
};

const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${p => p.theme.colors.backdropDark};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
