import React from 'react';
import {Text} from '@flavorli/elements';

interface IStepNoProps {
  no?: number;
}
const StepNo = ({no}: IStepNoProps) => {
  return (
    <Text color="secondaryTextColor" fontSize={32}>
      {no}
    </Text>
  );
};

export default StepNo;
