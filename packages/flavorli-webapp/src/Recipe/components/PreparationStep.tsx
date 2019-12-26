import React from 'react';
import {Stack, Text} from '@flavorli/elements';

interface IPreparationStepProps {
  no: number;
  description: string;
}
const PreparationStep = ({no, description}: IPreparationStepProps) => {
  return (
    <Stack direction="horizontal" gap={16} width="100%">
      <Text>{no}</Text>
      <Text>{description}</Text>
    </Stack>
  );
};

export default PreparationStep;
