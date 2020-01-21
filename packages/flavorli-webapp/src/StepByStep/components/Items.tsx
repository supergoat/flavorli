import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IItem} from '../../types';

const Items = ({items = []}: {items?: IItem[]}) => {
  return !!items.length ? (
    <Stack gap={8} width="100%">
      <H3 color="primary">You will need</H3>

      {items.map(item => (
        <Text key={item.name}>
          {item.qty} {item.name}
        </Text>
      ))}
    </Stack>
  ) : null;
};

export default Items;
