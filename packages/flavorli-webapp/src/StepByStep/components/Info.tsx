import React from 'react';
import {Stack, Icon, Text} from '@flavorli/elements';
import {IconName} from '@flavorli/elements/lib/miscellaneous/Icon';
import styled from 'styled-components';

interface InfoProps {
  name: string;
  value: string;
  icon: IconName;
}
const Info = ({name, icon, value}: InfoProps) => {
  return (
    <Stack gap={16} direction="horizontal" alignment="center" width="100%">
      <Icon name={icon} />
      <Stack gap={4} width="100%">
        <Heading fontSize={20}>{name}</Heading>
        <SubHeading fontSize={16}>{value}</SubHeading>
      </Stack>
    </Stack>
  );
};

export default Info;

const Heading = styled(Text)`
  font-family: ${p => p.theme.families.PatrickHand};
`;

const SubHeading = styled(Text)`
  font-weight: bold;
`;
