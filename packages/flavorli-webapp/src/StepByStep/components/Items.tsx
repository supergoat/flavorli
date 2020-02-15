import React from 'react';
import {Stack, Text, H3} from '@flavorli/elements';
import {IItem} from '../../types';
import styled from 'styled-components';

const Items = ({items = []}: {items?: IItem[]}) => {
  return !!items.length ? (
    <Stack gap={8} width="100%">
      <H3 color="primary">You will need</H3>

      {items.map(item => (
        <div key={`${item.qty}-${item.name}`}>
          {item.link ? (
            <Link target="_blank" href={item.link}>
              {item.qty} {item.name}
            </Link>
          ) : (
            <>
              {item.qty} {item.name}
            </>
          )}
          <Text intent="secondary">{item?.notes}</Text>
        </div>
      ))}
    </Stack>
  ) : null;
};

export default Items;

const Link = styled.a`
  color: ${p => p.theme.colors.primary};
`;
