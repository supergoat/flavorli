import React from 'react';
import {Stack, H3} from '@flavorli/elements';
import PreparationStep from './PreparationStep';

interface IPreparationProps {
  taskName: string;
  steps: string[];
}
const PreparationStepList = ({taskName, steps}: IPreparationProps) => {
  return (
    <Stack gap={8} alignment="center" width="100%">
      <H3 width="100%">{taskName}</H3>
      {steps.map((step, index) => {
        return (
          <PreparationStep
            no={index + 1}
            description={step}
            key={index + 1 + taskName}
          />
        );
      })}
    </Stack>
  );
};

export default PreparationStepList;
