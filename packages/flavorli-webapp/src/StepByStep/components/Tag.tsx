import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import {ITag} from '../types';

const Tag = ({tag}: {tag: ITag}) => {
  return (
    <Stack
      distribution="center"
      width="auto"
      paddingTop={4}
      paddingRight={24}
      paddingLeft={24}
      paddingBottom={4}
      borderRadius={2}
      background="primary"
    >
      <Text intent="textOnPrimary"> {tag.text}</Text>
    </Stack>
  );
};

export default Tag;
