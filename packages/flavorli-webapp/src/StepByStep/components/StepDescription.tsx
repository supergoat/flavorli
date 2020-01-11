import React from 'react';
import {Text} from '@flavorli/elements';

interface IStepDescriptionProps {
  description: string;
}

const StepDescription = ({description}: IStepDescriptionProps) => {
  return (
    <Text spacing={{line: '1.5'}} id="step-description">
      {description}
    </Text>
  );
};

export default StepDescription;
