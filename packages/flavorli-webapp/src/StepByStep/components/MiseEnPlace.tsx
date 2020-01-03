import React from 'react';
import {Stack, Scroll, Text} from '@flavorli/elements';
import styled from 'styled-components';
import {IMiseEnPlaceStep} from '../types';
import Navigation from './Navigation';

const MiseEnPlace = ({
  step,
  onChangeStep,
}: {
  step: IMiseEnPlaceStep;
  onChangeStep: (direction: 1 | -1) => void;
}) => {
  return (
    <MiseEnPlaceWrapper
      width="100%"
      height="100%"
      paddingBottom={24}
      role="group"
      aria-label={`Mise en place`}
      background="primary"
      borderRadiusTopLeft={24}
      borderRadiusTopRight={24}
      image={step.image}
    >
      <Stack
        width="100%"
        height="100%"
        paddingTop={48}
        paddingRight={48}
        paddingLeft={48}
        gap={16}
      >
        <Stack gap={4}>
          <Heading>Mise en place</Heading>
          <SubHeading>{step.heading}</SubHeading>
        </Stack>
        <Content height="100%">
          <Stack gap={16} paddingBottom={32} width="100%">
            <Stack gap={8} width="100%">
              {step.items.map(item => {
                return (
                  <Stack
                    direction="horizontal"
                    gap={16}
                    width="100%"
                    key={item.name}
                  >
                    <ItemQty width="30%" align="right">
                      {item.qty}
                    </ItemQty>
                    <ItemName>{item.name}</ItemName>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Content>

        <Navigation
          onNavigate={onChangeStep}
          nextButtonName={
            step.heading === 'Ingredients' ? 'Items' : 'Preparation'
          }
          variation="onPrimary"
        />
      </Stack>
    </MiseEnPlaceWrapper>
  );
};

export default MiseEnPlace;

const MiseEnPlaceWrapper = styled(Stack)<{image: string}>`
  position: relative;
  &::before {
    content: '';
    background-image: ${p => `url(${p.image})`};
    background-size: 550px;
    background-repeat: no-repeat;
    opacity: 0.1;
    top: 50px;
    left: 50px;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;
const Content = styled(Scroll)`
  z-index: 1;
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.4) inset;
`;
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

const ItemQty = styled(Text)`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[20]};
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: normal;
`;

const ItemName = styled(Text)`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[20]};
  color: ${p => p.theme.colors.white};
  font-weight: normal;
`;
