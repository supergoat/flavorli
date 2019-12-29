import React from 'react';
import {Dialog} from '@flavorli/elements';
import Step from './Step';
import {steps} from '../helpers/mockData';
import styled from 'styled-components';

interface IStepDialogProps {
  stepNo: number;
  noOfSteps: number;
  onViewStep: (stepNo: number) => void;
  onClose: () => void;
}
const StepDialog = ({
  stepNo,
  noOfSteps,
  onViewStep,
  onClose,
}: IStepDialogProps) => {
  return (
    <DialogWrapper label="" describedbyID="step-description" onClose={onClose}>
      <Step
        isDialog={true}
        step={steps[stepNo - 1]}
        onChangeStep={() => {}}
        onViewStep={onViewStep}
        onClose={onClose}
        noOfSteps={noOfSteps}
      />
    </DialogWrapper>
  );
};

export default StepDialog;

const DialogWrapper = styled(Dialog)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
