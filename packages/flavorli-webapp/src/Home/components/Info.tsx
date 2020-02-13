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
        <Text fontSize={16}>{preparationTime}'</Text>
        <p>Hands On</p>
      </Stack>

      <Stack alignment="center" gap={8}>
        <Text fontSize={16}>{cookingTime}'</Text>
        <p>Hands Off</p>
      </Stack>

      <Stack alignment="center" gap={8}>
        <Text fontSize={16}>{portions}</Text>
        <p>Portions</p>
      </Stack>

      <Stack alignment="center" gap={8}>
        <Text fontSize={16}>{difficulty}</Text>
        <p>Difficulty</p>
      </Stack>
    </Stack>
  );
};

export default Info;
