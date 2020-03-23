import React from 'react';
import {Stack, H2, Text, Button} from '@flavorli/elements';
import styled from 'styled-components';

const Author = () => {
  return (
    <Stack
      alignment="center"
      width="100%"
      gap={24}
      background="surface"
      padding={48}
      borderRadius={8}
      shadow="LIGHT"
    >
      <Avatar />
      <H2>James Wythe</H2>

      <Stack width="100%" alignment="center">
        <Stack direction="horizontal" gap={16}>
          <InfoItem name="Followers" value="2000" />
          <InfoItem name="Following" value="2000" />
        </Stack>
      </Stack>
      <Button intent="secondary">Follow</Button>

      <Text width="100%" align="center">
        Fully qualified Health Coach and food blogger. Specialising in creating
        quick and healthy gluten, wheat, dairy, egg and refined sugar free
        recipes.
      </Text>
    </Stack>
  );
};

export default Author;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: ${p => p.theme.colors.secondarySurface};
  border-radius: 100%;
`;

const InfoItem = ({name, value}: {name: string; value: string}) => {
  return (
    <Stack gap={4} alignment="center" distribution="center">
      <Text intent="highlight">{value}</Text>
      <Text fontSize={14} intent="secondary">
        {name}
      </Text>
    </Stack>
  );
};
