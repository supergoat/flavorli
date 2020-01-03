import React from 'react';
import {Stack, Button, H1, H2} from '@flavorli/elements';
import styled from 'styled-components';

import ChevronRightWhite from '../icons/right_chevron_white.svg';
import Info from './Info';
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
      padding={32}
    >
      <Stack width="100%" height="100%" gap={16}>
        <Image src={step.image} alt="" />
        <Stack gap={4}>
          <Heading color="white">Greek Pastitsio</Heading>
          <Subheading color="secondaryDark">By Akis Petratzikis</Subheading>
        </Stack>

        <Stack width="100%" gap={24} paddingTop={24} paddingBottom={32}>
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
      <Stack direction="horizontal" distribution="end" width="100%">
        <NextButton
          aria-label="To Ingredients"
          aria-controls="recipe-steps"
          width="100%"
          onClick={() => onChangeStep(1)}
        >
          Ingredients
          <img src={ChevronRightWhite} alt="" />
        </NextButton>
      </Stack>
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
`;

const Heading = styled(H1)`
  font-size: 32px;
`;

const Subheading = styled(H2)`
  font-size: 20px;
`;
const NextButton = styled(Button)`
  background: transparent;
  border: 1px solid white;
  color: white;
  box-shadow: none;
  width: 165px;
  img {
    margin-left: 10px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
