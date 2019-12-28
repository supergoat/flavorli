import React from 'react';
import Timer from './Timer';
import {Stack, Text} from '@flavorli/elements';
import {useUpdateTimers, initTimer} from '../../helpers/timers';

const NotificationTimer = ({timer}: {timer: initTimer}) => {
  useUpdateTimers(timer);

  return (
    <Stack
      width="100%"
      background="secondary"
      gap={4}
      borderRadius={4}
      padding={8}
      paddingLeft={16}
      paddingRight={16}
    >
      <Text fontSize={14} color="primary">
        {timer.name}
      </Text>
      <Timer id={timer.id} type="notification" />
    </Stack>
  );
};

export default NotificationTimer;
