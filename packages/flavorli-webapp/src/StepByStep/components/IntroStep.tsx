import React from 'react';
import {ProfileAvatar, BookmarkRecipe} from '../../components';
import {Stack, H1, H3, Text} from '@flavorli/elements';
import styled from 'styled-components';
import Video from '../../components/Video';

const Intro = ({
  author,
  name,
  image,
  video,
  preparationTime,
  cookingTime,
  portions,
  difficulty,
  notes,
}: IIntroProps) => {
  return (
    <Stack width="100%" gap={16}>
      <Dot />
      <Stack width="100%" gap={16}>
        <Stack gap={8} width="100%">
          <H1>{name}</H1>

          <ProfileAvatar name={author} />
        </Stack>

        <Stack direction="horizontal" width="100%">
          <InfoItem name="Hands On" value={`${preparationTime}'`} />
          <InfoItem name="Hands Off" value={`${cookingTime}'`} />
          <InfoItem name="Portions" value={portions} />
          <InfoItem name="Difficulty" value={difficulty} />
        </Stack>
      </Stack>
      {(image || video) &&
        (video ? <Video video={video} /> : <Image src={image} alt="" />)}
    </Stack>
  );
};

export default Intro;

interface IIntroProps {
  author: string;
  name: string;
  image?: string;
  video?: string;
  preparationTime: number;
  cookingTime: number;
  portions: string;
  difficulty: string;
  notes?: string[];
}

const Image = styled.img`
  width: 100%;
  border-radius: ${p => `${p.theme.spacings[8]}px`};
  box-shadow: ${p => p.theme.shadows.LIGHT};
`;

const InfoItem = ({name, value}: {name: string; value: string}) => {
  return (
    <Stack width="25%" gap={4} alignment="center" distribution="center">
      <Text intent="highlight">{value}</Text>
      <Text fontSize={14} intent="secondary">
        {name}
      </Text>
    </Stack>
  );
};

const Media = styled(Stack)`
  overflow: hidden;

  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */

  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
const Dot = styled.div`
  position: absolute;
  top: 9px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.textColor};
`;
