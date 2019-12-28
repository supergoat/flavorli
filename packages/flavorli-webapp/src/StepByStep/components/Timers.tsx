import React from 'react';
import Timer from './Timer';
import {Stack, Text} from '@flavorli/elements';
import {
  useTimersContext,
  useUpdateTimers,
  useInitStepTimers,
} from '../../helpers/timers';
import {IStep} from '../types';

export const Timers = ({steps}: {steps: IStep[]}) => {
  const {timers, setTimers} = useTimersContext();
  useInitStepTimers(steps);
  useUpdateTimers(timers, setTimers);
  return (
    <Stack gap={8} padding={8}>
      {Object.values(timers).map((timer: any) => {
        return (
          <Stack
            key={timer.id}
            width="100%"
            background="secondary"
            borderRadius={4}
            padding={8}
            paddingLeft={16}
            paddingRight={16}
          >
            <Text intent="highlight" color="secondaryTextColor">
              {timer.name}
            </Text>
            <Timer id={timer.id} timerName={timer.name} />
          </Stack>
        );
      })}
    </Stack>
  );
};
export default Timers;
