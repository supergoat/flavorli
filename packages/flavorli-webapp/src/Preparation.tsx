import React from 'react';
import styled from 'styled-components';
import {useLockBodyScroll, Page, Stack} from '@flavorli/elements';
import Step from './Step';

import {steps} from './stepsData';

export default () => {
  useLockBodyScroll();

  return (
    <>
      <Backdrop />

      <Preparation>
        <Page width="100%" height="100%">
          {steps.map(step => {
            return <Step step={step} />;
          })}
        </Page>
      </Preparation>
    </>
  );
};

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Preparation = styled(Stack)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
