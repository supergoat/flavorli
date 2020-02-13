import React from 'react';
import {Stack, H1, H2, H3, Text} from '@flavorli/elements';
import styled from 'styled-components';

interface IRecipeProps {
  author: string;
  name: string;
  image: string;
  preparationTime: number;
  cookingTime: number;
  portions: string;
  difficulty: string;
}

const Recipe = ({
  author,
  name,
  image,
  preparationTime,
  cookingTime,
  portions,
  difficulty,
}: IRecipeProps) => {
  return (
    <>
      <Stack width="100%" gap={16}>
        <Stack gap={4} width="100%">
          <Text intent="secondary">By {author}</Text>
          <H1>{name}</H1>
        </Stack>

        {/* <Stack gap={8} width="100%">
          <H3>MAIN INGREDIENTS</H3>
          <p>Nutritional yeast</p>
          <p>Cashews</p>
          <p>Macaroni</p>
          <p>Plant based milk</p>
        </Stack>

        <Stack gap={8} width="100%">
          <H3>NOTES</H3>
          <p>This recipe requires a blender</p>
        </Stack> */}

        <Stack direction="horizontal" width="100%">
          <Stack width="25%" gap={4} alignment="center" distribution="center">
            <Text intent="highlight">{preparationTime}'</Text>
            <Text intent="secondary">Hands on</Text>
          </Stack>

          <Stack width="25%" gap={4} alignment="center" distribution="center">
            <Text intent="highlight">{cookingTime}'</Text>
            <Text intent="secondary">Hands off</Text>
          </Stack>

          <Stack width="25%" gap={4} alignment="center" distribution="center">
            <Text intent="highlight">{portions}</Text>
            <Text intent="secondary">Portions</Text>
          </Stack>

          <Stack width="25%" gap={4} alignment="center" distribution="center">
            <Text intent="highlight">{difficulty}</Text>
            <Text intent="secondary">Difficulty</Text>
          </Stack>
        </Stack>
      </Stack>
      <Image src={image} alt="" />
    </>
  );
};

export default Recipe;

const Image = styled.img`
  width: 100%;
  border-radius: ${p => `${p.theme.spacings[8]}px`};
  box-shadow: ${p => p.theme.shadows.LIGHT};
`;
