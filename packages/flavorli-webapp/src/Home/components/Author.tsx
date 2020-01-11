import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';

interface IAuthorProps {
  name: string;
}

const Author = ({name}: IAuthorProps) => {
  return (
    <Stack gap={8} direction="horizontal" alignment="center">
      <Avatar />
      <Text intent="secondary">{name}</Text>
    </Stack>
  );
};

export default Author;

const Avatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17.5px;
  background: ${p => p.theme.colors.secondarySurface};
`;
