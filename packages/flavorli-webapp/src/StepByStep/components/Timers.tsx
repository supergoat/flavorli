import React from 'react';

import {Stack} from '@flavorli/elements';
import {useTimersContext} from '../../helpers/timers';
import NotificationTimer from './NotificationTimer';

export const Timers = () => {
  const {timers} = useTimersContext();
  return (
    <Stack gap={8} padding={8}>
      {Object.values(timers).map((timer: any) => {
        return <NotificationTimer timer={timer} key={timer.id} />;
      })}
    </Stack>
  );
};
export default Timers;
