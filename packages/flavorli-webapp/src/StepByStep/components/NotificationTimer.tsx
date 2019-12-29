import React from 'react';
import Timer from './Timer';
import {Stack, Text} from '@flavorli/elements';
import {useDecrementTimer} from '../helpers/timersContext';
import {ITimer} from '../types';

const NotificationTimer = ({timer}: {timer: ITimer}) => {
  useDecrementTimer(timer);

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
      <Timer timer={timer} type="notification" />
    </Stack>
  );
};

export default NotificationTimer;
