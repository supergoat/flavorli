import React from 'react';
import {Dialog} from '@flavorli/elements';
import Step from './Step';
import {steps} from '../helpers/mockData';

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
    <Dialog label="" describedbyID="timer" onClose={onClose}>
      <Step
        isDialog={true}
        step={steps[stepNo - 1]}
        onChangeStep={() => {}}
        onViewStep={onViewStep}
        onClose={onClose}
        noOfSteps={noOfSteps}
      />
    </Dialog>
  );
};

export default StepDialog;
