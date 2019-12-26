import React from 'react';
import styled from 'styled-components';
import {useLockBodyScroll} from '@flavorli/elements';
import StepList from './components/StepList';
import Step from './components/Step';
import {steps as STEPS} from './mockData';

export default ({steps = STEPS}: {steps?: any[]}) => {
  useLockBodyScroll();

  return (
    <Preparation aria-label="List of recipe steps">
      <StepList currentStep={9}>
        {steps.map(step => {
          return <Step step={step} key={step.no} />;
        })}
      </StepList>
    </Preparation>
  );
};

const Preparation = styled.section`
  width: 100%;
  height: 100%;
`;
