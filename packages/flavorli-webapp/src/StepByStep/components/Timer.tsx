import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import {useAddTimerIfItDoesNotExist} from '../timersContext';
import {ITimer} from '../../types';

interface ITimerProps {
  type?: 'notification';
  timer?: ITimer;
}
export default ({timer, type}: ITimerProps) => {
  if (!timer) return null;

  const {timers, setTimers} = useAddTimerIfItDoesNotExist(timer);

  const initialisedTimer = timers[timer.id];

  if (!initialisedTimer) return null;

  const toggleTimer = () => {
    setTimers({
      [initialisedTimer.id]: {
        ...initialisedTimer,
        isPaused: !initialisedTimer.isPaused,
      },
    });
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
        id={`timer-${initialisedTimer.id}`}
        role="timer"
        aria-label={initialisedTimer.name}
        aria-atomic={true}
        fontSize={type === 'notification' ? 24 : 32}
      >
        {`${initialisedTimer.minutes}m ${initialisedTimer.seconds}s`}
      </Text>

      <Stack direction="horizontal" gap={8}>
        <Button
          intent="text"
          width="47px"
          onClick={toggleTimer}
          aria-controls={`timer-${initialisedTimer.id}`}
        >
          {initialisedTimer.isPaused ? 'START' : 'PAUSE'}
        </Button>
        <Button intent="text" color="secondaryTextColor">
          RESET
        </Button>
      </Stack>
    </Stack>
  );
};
