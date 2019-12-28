import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import {useTimersContext} from '../helpers/timersContext';

interface ITimerProps {
  type?: 'notification';
  id?: number;
}
export default ({id, type}: ITimerProps) => {
  if (!id) return null;

  const {timers, setTimers} = useTimersContext();

  const timer = timers[id];

  const toggleTimer = () => {
    setTimers(t => ({
      ...t,
      [timer.id]: {
        ...timer,
        isPaused: !timer.isPaused,
      },
    }));
  };

  return (
    <Stack
      width="100%"
      gap={4}
      direction={type === 'notification' ? 'horizontal' : 'vertical'}
      distribution={type === 'notification' ? 'space-between' : 'start'}
      alignment={type === 'notification' ? 'center' : 'start'}
    >
      <Text
        id={`timer-${timer.id}`}
        role="timer"
        aria-label={timer.name}
        aria-atomic={true}
        fontSize={type === 'notification' ? 24 : 32}
      >
        {`${timer.minutes}m ${
          timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds
        }s`}
      </Text>

      <Stack direction="horizontal" gap={8}>
        <Button
          intent="text"
          width="47px"
          onClick={toggleTimer}
          aria-controls={`timer-${timer.id}`}
        >
          {timer.isPaused ? 'START' : 'PAUSE'}
        </Button>
        <Button intent="text" color="secondaryTextColor">
          RESET
        </Button>
      </Stack>
    </Stack>
  );
};
