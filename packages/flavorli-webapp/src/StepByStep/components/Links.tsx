import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import {ILink} from '../types';

const StepList = ({links}: {links: ILink[]}) => {
  return !!links.length ? (
    <Stack gap={8} alignment="start" width="100%" height="auto">
      {links.map(link => {
        return (
          <Stack
            key={link.name}
            borderRadius={2}
            border="1px solid #e4e0ff"
            width="100%"
            background="secondary"
            paddingTop={8}
            paddingRight={16}
            paddingBottom={8}
            paddingLeft={16}
            gap={4}
          >
            <Stack
              direction="horizontal"
              distribution="space-between"
              alignment="end"
              width="100%"
            >
              <Stack gap={4}>
                <Text intent="secondary" fontSize={14}>
                  {link.heading}
                </Text>
                <Text intent="highlight">{link.name}</Text>
              </Stack>
              <Text color="primary">0m 54s</Text>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  ) : null;
};

export default StepList;
