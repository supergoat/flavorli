import React from 'react';
import {Stack, H1, H2} from '@flavorli/elements';
import styled from 'styled-components';
import Info from './Info';
import {IIntroStep} from '../types';
import Notebook from '../icons/notebook.svg';
import Step from './Step';

interface IIntroProps {
  step: IIntroStep;
}
const Intro = ({step}: IIntroProps) => {
  return (
    <Step background="primary" image={Notebook}>
      <Image src={step.image} alt="" />
      <Stack gap={4}>
        <Heading color="white">Greek Pastitsio</Heading>
        <Subheading color="secondaryDark">By Akis Petratzikis</Subheading>
      </Stack>

      <Stack width="100%" gap={24} paddingBottom={24}>
        <Info
          name="Preparation"
          value={step.preparation}
          icon="preparationTime"
        />

        <Info name="Cooking" value={step.cooking} icon="cookingTime" />

        <Info name="Portions" value={step.portions} icon="serves" />

        <Info name="Difficulty" value={step.difficulty} icon="difficulty" />
      </Stack>
    </Step>
  );
};

export default Intro;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${p => `${p.theme.spacings[4]}px`};
  object-fit: cover;
`;

const Heading = styled(H1)`
  font-size: 32px;
`;

const Subheading = styled(H2)`
  font-size: 20px;
`;
