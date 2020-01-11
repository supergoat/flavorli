import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import {ITag} from '../types';

const Tag = ({tag}: {tag: ITag}) => {
  return (
    <Stack
      distribution="center"
      width="auto"
      paddingTop={4}
      paddingRight={16}
      paddingLeft={16}
      paddingBottom={4}
      borderRadius={4}
      background={tag.color}
    >
      <Text intent="textOnPrimary"> {tag.text}</Text>
    </Stack>
  );
};

export default Tag;
