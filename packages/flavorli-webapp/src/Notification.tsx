import React from 'react';
import {Stack, Text, Icon} from '@flavorli/elements';
import styled from 'styled-components';
import {INotification} from './types';

export default ({
  notification,
  className,
}: {
  notification: INotification;
  className?: string;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Notification onClick={() => setIsExpanded(o => !o)} className={className}>
      <Stack
        borderRadius={4}
        border="1px solid #e4e0ff"
        width="100%"
        background="secondary"
        paddingTop={8}
        paddingRight={16}
        paddingBottom={8}
        paddingLeft={16}
        gap={4}
        overflow="hidden"
      >
        <Stack direction="horizontal" alignment="end" width="100%">
          <Stack width="100%" gap={4}>
            <Text intent="secondary" fontSize={14}>
              {notification.heading}
            </Text>
            <Text intent="highlight">{notification.name}</Text>
          </Stack>
          <Icon name="boiling" />
        </Stack>
        <Text
          initial="collapsed"
          animate={isExpanded ? 'open' : 'collapsed'}
          exit="collapsed"
          variants={{
            open: {opacity: 1, height: 'auto', transition: {ease: 'easeOut'}},
            collapsed: {opacity: 0, height: 0, transition: {ease: 'easeOut'}},
          }}
          color="primary"
        >
          {notification.description}
        </Text>
      </Stack>
    </Notification>
  );
};

const Notification = styled.button`
  padding: 0;
  border: none;
  /* background: ${p => p.theme.colors.secondary}; */
`;
