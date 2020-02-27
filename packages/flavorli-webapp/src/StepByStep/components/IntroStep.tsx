import React from 'react';
import {ProfileAvatar, BookmarkRecipe} from '../../components';

import {Stack, H1, H3, Text} from '@flavorli/elements';
import styled from 'styled-components';

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
          <Stack
            paddingTop={4}
            width="100%"
            direction="horizontal"
            distribution="space-between"
          >
            <H1>{name}</H1>
            <BookmarkRecipe />
          </Stack>

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
        (video ? (
          <Media borderRadius={16} shadow="LIGHT">
            <video
              width="100%"
              height="100%"
              controls
              controlsList="nodownload"
              playsinline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Media>
        ) : (
          <Image src={image} alt="" />
        ))}

      {notes && notes.length > 0 && (
        <Stack gap={8}>
          <H3>NOTES</H3>

          <Stack width="100%" gap={4}>
            {(notes || []).map(note => (
              <Text width="100%" key={note}>
                {note}
              </Text>
            ))}
          </Stack>
        </Stack>
      )}
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
  top: 4px;
  left: -40px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.colors.tagRed};
`;
