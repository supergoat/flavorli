import React from 'react';
import {Stack, Icon, Text} from '@flavorli/elements';

interface InfoProps {
  cookingTime: number;
  preparationTime: number;
  portions: string;
  difficulty: string;
}
const Info = ({
  cookingTime,
  preparationTime,
  portions,
  difficulty,
}: InfoProps) => {
  return (
    <Stack
      width="100%"
      direction="horizontal"
      background="secondaryLight"
      distribution="space-evenly"
      padding={16}
    >
      <Stack alignment="center" gap={8}>
        <Text intent="highlight">{preparationTime}'</Text>
        <Text fontSize={14}>Hands On</Text>
      </Stack>

      <Stack alignment="center" gap={8}>
        <Text intent="highlight">{cookingTime}'</Text>
        <Text fontSize={14}>Hands Off</Text>
      </Stack>

      <Stack alignment="center" gap={8}>
        <Text intent="highlight">{portions}</Text>
        <Text fontSize={14}>Portions</Text>
      </Stack>

      <Stack alignment="center" gap={8}>
        <Text intent="highlight">{difficulty}</Text>
        <Text fontSize={14}>Difficulty</Text>
      </Stack>
    </Stack>
  );
};

export default Info;
