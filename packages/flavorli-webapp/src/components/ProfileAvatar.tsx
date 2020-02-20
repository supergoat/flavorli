import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import Avatar from './Avatar';

interface IProfileAvatarProps {
  name: string;
}
const ProfileAvatar = ({name}: IProfileAvatarProps) => {
  return (
    <Stack direction="horizontal" gap={8} alignment="center">
      <Avatar />
      <Stack>
        <Text intent="secondary">{name}</Text>
      </Stack>
    </Stack>
  );
};

export default ProfileAvatar;
