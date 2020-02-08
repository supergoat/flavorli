import React from 'react';
import {Stack, H1, H2} from '@flavorli/elements';
import styled from 'styled-components';
import Info from './Info';
import Notebook from '../icons/notebook.svg';
import Step from './Step';

const Intro = ({
  author,
  name,
  image,
  preparationTime,
  cookingTime,
  portions,
  difficulty,
}: IIntroProps) => {
  return (
    <Step>
      <Image src={image} alt="" />
      <Stack gap={4}>
        <Heading>{name}</Heading>
        <Subheading>By {author}</Subheading>
      </Stack>

      <Stack gap={24} paddingBottom={24}>
        <Info
          name="Preparation"
          value={`${preparationTime} minutes`}
          icon="preparationTime"
        />

        <Info
          name="Cooking"
          value={`${cookingTime} minutes`}
          icon="cookingTime"
        />

        <Info name="Portions" value={portions} icon="serves" />

        <Info name="Difficulty" value={difficulty} icon="difficulty" />
      </Stack>
    </Step>
  );
};

export default Intro;

interface IIntroProps {
  author: string;
  name: string;
  image: string;
  preparationTime: number;
  cookingTime: number;
  portions: string;
  difficulty: string;
}

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
