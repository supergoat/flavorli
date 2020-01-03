import React from 'react';
import {Stack, Button, H1, H2} from '@flavorli/elements';
import styled from 'styled-components';
import Info from './Info';
import Navigation from './Navigation';
import {IIntro} from '../types';

const Intro = ({
  step,
  onChangeStep,
}: {
  step: IIntro;
  onChangeStep: (direction: 1 | -1) => void;
}) => {
  return (
    <IntroWrapper
      width="100%"
      height="100%"
      role="group"
      aria-label={`Recipe info`}
      background="primary"
      borderRadiusTopLeft={24}
      borderRadiusTopRight={24}
      padding={48}
      paddingBottom={24}
    >
      <Stack width="100%" gap={16} height="100%">
        <Image src={step.image} alt="" />
        <Stack gap={4}>
          <Heading color="white">Greek Pastitsio</Heading>
          <Subheading color="secondaryDark">By Akis Petratzikis</Subheading>
        </Stack>

        <Stack width="100%" gap={24}>
          <Info
            name="Preparation"
            value={step.preparation}
            icon="preparationTime"
          />

          <Info name="Cooking" value={step.cooking} icon="cookingTime" />

          <Info name="Portions" value={step.portions} icon="serves" />

          <Info name="Difficulty" value={step.difficulty} icon="difficulty" />
        </Stack>
      </Stack>

      <Navigation
        onNavigate={onChangeStep}
        hideBackButton={true}
        nextButtonName="Ingredients"
        variation="onPrimary"
      />
    </IntroWrapper>
  );
};

export default Intro;

const IntroWrapper = styled(Stack)`
  position: relative;
  &::before {
    content: '';
    background-image: url(${require('../icons/notebook.svg')});
    background-size: 370px;
    background-repeat: no-repeat;
    opacity: 0.15;
    top: 320px;
    left: 15px;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${p => `${p.theme.spacings[8]}px`};
  object-fit: cover;
`;

const Heading = styled(H1)`
  font-size: 32px;
`;

const Subheading = styled(H2)`
  font-size: 20px;
`;
