import React from 'react';
import {Stack, Icon, Text} from '@flavorli/elements';
import {IconName} from '@flavorli/elements/lib/miscellaneous/Icon';

interface InfoProps {
  name: string;
  value: string;
  icon: IconName;
}
const Info = ({name, icon, value}: InfoProps) => {
  return (
    <Stack width="25%" gap={4} alignment="center" distribution="center">
      <Text intent="highlight">{value}</Text>
      <Text intent="secondary">{name}</Text>
    </Stack>
  );
};

export default Info;
