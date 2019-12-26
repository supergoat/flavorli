import React from 'react';
import {Stack, Icon, H2} from '@flavorli/elements';
import {IconName} from '@flavorli/elements/lib/miscellaneous/Icon';

const SectionHeading = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: IconName;
}) => {
  return (
    <Stack direction="horizontal" gap={8} alignment="center">
      <Icon name={icon} />
      <H2>{children}</H2>
    </Stack>
  );
};

export default SectionHeading;
