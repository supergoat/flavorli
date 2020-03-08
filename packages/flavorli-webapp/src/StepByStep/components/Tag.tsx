import React from 'react';
import {Stack, Text} from '@flavorli/elements';

const Tag = ({tag}: {tag: string}) => {
  return (
    <Stack
      distribution="center"
      width="auto"
      paddingTop={4}
      paddingRight={8}
      paddingLeft={8}
      paddingBottom={4}
      borderRadius={4}
      background={'tagRed'}
    >
      <Text intent="textOnPrimary">{tag}</Text>
    </Stack>
  );
};

export default Tag;
