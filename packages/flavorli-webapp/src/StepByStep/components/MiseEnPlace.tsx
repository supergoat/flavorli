import React from 'react';
import Step from './Step';
import {Stack, Text, H3} from '@flavorli/elements';
import styled from 'styled-components';

const MiseEnPlace = () => {
  return (
    <Step background="primary">
      <Stack gap={16}>
        <Stack gap={4}>
          <Text
            spacing={{
              line: '1.5',
            }}
            color="textOnPrimary"
            style={{
              fontSize: '16px',
            }}
          >
            (French miz ɑ̃ plas)
          </Text>
          <Heading color="white">Mise En Place</Heading>

          <SubHeading color="secondaryDark">Everything in place </SubHeading>
        </Stack>
        <H3 color="textOnPrimary">
          Mise en place is a technique chefs use to prepare dishes quickly and
          effortlessly
        </H3>

        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          It involves assembling the equipment needed and preparing the
          ingredients while placing them in order
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          This means everything is ready and available to use when needed
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          It reduces time delays that can affect food quality, and makes cooking
          simple and fun
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
          color="textOnPrimary"
        >
          There is also more time to clean between steps!
        </Text>

        {/* <Text
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

export default MiseEnPlace;

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
