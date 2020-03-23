import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import Avatar from './Avatar';

interface IProfileAvatarProps {
  name: string;
}
const ProfileAvatar = ({name}: IProfileAvatarProps) => {
  return (
    <Stack direction="horizontal" gap={8} alignment="center">
      <Avatar />
      <Stack gap={8}>
        <Text>{name}</Text>
        <Button intent="secondary" height="25px" width="90px">
          Follow
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProfileAvatar;
