import React from 'react';
import styled from 'styled-components';
import {Stack} from '@flavorli/elements';

import Step from './Step';

interface IPreparationStepProps {}
export default () => {
  return (
    <Step background="surface">
      <Stack width="100%" paddingBottom={16} gap={4}>
        <Heading>Mise en place</Heading>
        <SubHeading>Everything in its place</SubHeading>
      </Stack>
    </Step>
  );
};

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.tagRed};
  font-weight: normal;
`;
