import React from 'react';
import {Stack, Text} from '@flavorli/elements';

interface IStepNo {
  no: number;
}
const StepNo = ({no}: IStepNo) => {
  return (
    <Stack width="100%" paddingBottom={32}>
      <Text color="secondaryTextColor" fontSize={32}>
        {no}
      </Text>
    </Stack>
  );
};

export default StepNo;
