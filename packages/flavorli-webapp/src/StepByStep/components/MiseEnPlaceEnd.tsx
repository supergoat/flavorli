import React from 'react';
import Step from './Step';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';

const MiseEnPlaceEnd = () => {
  return (
    <Step background="primary">
      <Stack gap={16}>
        <Stack gap={4}>
          <Heading color="white">Mise En Place</Heading>

          <SubHeading color="secondaryDark">Everything in place </SubHeading>
        </Stack>
        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          Now that we have everything in place we are ready to begin.
        </Text>

        {/* <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          It involves preparing your equipment and ingredients. Placing them in
          order, so they are ready and available to use when needed
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          This reduces time delays that may affect food quality, and makes
          cooking simple and fun
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          It is also means there is time to clean between steps
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
          style={{
            fontWeight: 'bold',
          }}
        >
          Follow the next steps that help take advantage of this technique
        </Text> */}
      </Stack>
    </Step>
  );
};

export default MiseEnPlaceEnd;

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.white};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: normal;
`;
