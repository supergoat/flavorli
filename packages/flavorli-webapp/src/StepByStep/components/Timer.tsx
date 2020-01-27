import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import {
  useAddTimerIfItDoesNotExist,
  useTimer,
  convertMillisecondsToMinutesAndSeconds,
  useToggleTimer,
  useResetTimer,
} from '../timersContext';
import {ITimer} from '../../types';

interface ITimerProps {
  type?: 'notification';
  timer?: ITimer;
}

export default ({timer, type}: ITimerProps) => {
  if (!timer) return null;

  const savedTimer = useAddTimerIfItDoesNotExist(timer);

  const remainingTimerInMs = useTimer(
    savedTimer.updatedAt,
    savedTimer.remainingTime,
    savedTimer.isPaused,
  );

  const {minutes, seconds} = convertMillisecondsToMinutesAndSeconds(
    remainingTimerInMs,
  );

  const toggleTimer = useToggleTimer(savedTimer, remainingTimerInMs);
  const resetTimer = useResetTimer(timer);

  return (
    <Stack
      width="100%"
      gap={4}
      direction={type === 'notification' ? 'horizontal' : 'vertical'}
      distribution={type === 'notification' ? 'space-between' : 'start'}
      alignment={type === 'notification' ? 'center' : 'start'}
    >
      <Text
        id={`timer-${savedTimer.id}`}
        role="timer"
        aria-label={savedTimer.name}
        aria-atomic={true}
        fontSize={type === 'notification' ? 24 : 32}
      >
        {minutes}m {seconds}s
      </Text>

      <Stack direction="horizontal" gap={8}>
        {(minutes > 0 || seconds > 0) && (
          <Button
            intent="text"
            width="47px"
            onClick={toggleTimer}
            aria-controls={`timer-${savedTimer.id}`}
          >
            {savedTimer.isPaused ? 'START' : 'PAUSE'}
          </Button>
        )}
        <Button intent="text" color="secondaryTextColor" onClick={resetTimer}>
          RESET
        </Button>
      </Stack>
    </Stack>
  );
};
