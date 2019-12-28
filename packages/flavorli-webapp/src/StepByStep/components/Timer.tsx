import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import {useTimersContext} from '../../helpers/timers';

interface ITimerProps {
  timerName?: string;
  id?: number;
}
export default ({id, timerName}: ITimerProps) => {
  if (!id || !timerName) return null;

  const {timers, setTimers} = useTimersContext();

  const timer = timers[id];

  return (
    <Stack
      width="100%"
      gap={4}
      // direction="horizontal"
      // distribution="space-between"
      // alignment="center"
    >
      <Text
        id={`timer-${id}`}
        role="timer"
        aria-label={timerName}
        aria-atomic={true}
        fontSize={32}
      >
        {`${timer.minutes}m ${
          timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds
        }s`}
      </Text>

      <Stack direction="horizontal" gap={8}>
        <Button
          intent="text"
          width="47px"
          onClick={() =>
            setTimers(t => ({
              ...t,
              [timer.id]: {...timer, isPaused: !timer.isPaused},
            }))
          }
          aria-controls={`timer-${id}`}
        >
          {timer.isPaused ? 'START' : 'PAUSE'}
        </Button>
        {/* <Button intent="text">RESET</Button> */}
      </Stack>
    </Stack>
  );
};
