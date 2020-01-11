import React from 'react';
import {Stack, Icon, Text} from '@flavorli/elements';

interface InfoProps {
  cookingTime: number;
  preparationTime: number;
  portions: string;
}
const Info = ({cookingTime, preparationTime, portions}: InfoProps) => {
  return (
    <Stack
      width="100%"
      direction="horizontal"
      background="secondaryLight"
      padding={16}
    >
      <Stack
        width="30%"
        direction="horizontal"
        alignment="center"
        gap={8}
        aria-label="Preparation Time"
        title="Preparation Time"
      >
        <Icon name="preparationTime" size="20px" />
        <Text fontSize={16}>{preparationTime} mins</Text>
      </Stack>

      <Stack
        width="30%"
        direction="horizontal"
        alignment="center"
        gap={8}
        aria-label="Cooking Time"
        title="Cooking Time"
      >
        <Icon name="cookingTime" size="20px" />
        <Text fontSize={16}>{cookingTime} mins</Text>
      </Stack>

      <Stack
        width="40%"
        direction="horizontal"
        alignment="center"
        gap={8}
        aria-label="Portions"
        title="Portions"
      >
        <Icon name="serves" size="20px" />
        <Text fontSize={16}>{portions} people</Text>
      </Stack>
    </Stack>
  );
};

export default Info;
