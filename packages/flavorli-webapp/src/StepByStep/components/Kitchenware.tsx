import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IKitchenware} from '../types';

const Kitchenware = ({kitchenware}: {kitchenware: IKitchenware[]}) => {
  return !!kitchenware.length ? (
    <Stack gap={8} width="100%">
      <H3>You will need</H3>

      {kitchenware.map(item => (
        <Text key={item.name}>
          {item.qty} {item.name}
        </Text>
      ))}
    </Stack>
  ) : null;
};

export default Kitchenware;
