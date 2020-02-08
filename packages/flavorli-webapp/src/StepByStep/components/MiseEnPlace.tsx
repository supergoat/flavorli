import React from 'react';
import {Stack, Text, H3, Button, usePortal, Dialog} from '@flavorli/elements';
import styled from 'styled-components';

const MiseEnPlace = () => {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <Stack gap={16}>
      <Button
        intent="text"
        color="secondaryTextColor"
        onClick={() => setShowInfo(true)}
      >
        What's this?
      </Button>

      {showInfo && <Info onClose={() => setShowInfo(false)} />}
    </Stack>
  );
};

export default MiseEnPlace;

const Info = ({onClose}: {onClose: () => void}) => {
  return (
    <DialogWrapper describedbyID="1" onClose={onClose}>
      <Stack
        background="surface"
        width="100%"
        gap={16}
        height="100%"
        paddingTop={24}
        paddingLeft={24}
        paddingRight={24}
        paddingBottom={16}
      >
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
          <Heading>Mise En Place</Heading>

          <SubHeading color="secondaryDark">Everything in place </SubHeading>
        </Stack>

        <H3 id="1">
          Mise en place is a technique chefs use to prepare dishes quickly and
          effortlessly
        </H3>

        <Text
          spacing={{
            line: '1.5',
          }}
        >
          It involves assembling the equipment needed and preparing the
          ingredients while placing them in order
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
        >
          This means everything is ready and available to use when needed
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
        >
          It reduces time delays that can affect food quality, and makes cooking
          simple and fun
        </Text>

        <Text
          spacing={{
            line: '1.5',
          }}
        >
          There is also more time to clean between steps!
        </Text>

        <Button onClick={onClose} intent="secondary">
          Close
        </Button>
      </Stack>
    </DialogWrapper>
  );
};

const DialogWrapper = styled(Dialog)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;
