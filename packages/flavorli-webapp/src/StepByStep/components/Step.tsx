import React from 'react';
import {Stack} from '@flavorli/elements';
import Navigation from './Navigation';

const NAVIGATION_COMPONENT_HEIGHT = '71px';
export interface IPreparationStepListProps {
  children: React.ReactNode;
  isDialog?: boolean;
}
const Step = ({isDialog, children}: IPreparationStepListProps) => {
  return (
    <Stack
      background="surface"
      width="100%"
      height="100%"
      borderRadiusTopLeft={isDialog ? undefined : 8}
      borderRadiusTopRight={isDialog ? undefined : 8}
      paddingTop={24}
    >
      <Stack
        width="100%"
        gap={16}
        height={`calc(100% - ${NAVIGATION_COMPONENT_HEIGHT})`}
        paddingLeft={24}
        paddingRight={24}
        paddingBottom={16}
        overflowY
      >
        {children}
      </Stack>

      <Stack width="100%" paddingLeft={24} paddingRight={24} paddingBottom={24}>
        <Navigation isDialog={isDialog} />
      </Stack>
    </Stack>
  );
};

export default Step;
