import React from 'react';
import Step from './Step';
import {Stack, Text, H1} from '@flavorli/elements';
import styled from 'styled-components';

const NextUp = ({
  heading,
  children,
}: {
  heading: string;
  children?: React.ReactNode;
}) => {
  return (
    <Step>
      <Stack height="100%" distribution="center">
        <Text color="secondaryTextColor" fontSize={24}>
          Next up:
        </Text>
        <Heading>{heading}</Heading>
        {children}
      </Stack>
    </Step>
  );
};

export default NextUp;

const Heading = styled.h1`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[48]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;
