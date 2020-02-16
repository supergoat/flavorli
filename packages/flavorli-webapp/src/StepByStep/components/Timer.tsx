import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import {
  useAddRecipeTimerIfItDoesNotExist,
  useRecipeTimer,
  convertMsToMinsAndSecs,
  useToggleTimer,
  useResetTimer,
} from '../useRecipeTimer';
import {ITimer} from '../../types';

interface ITimerProps {
  type?: 'notification';
  timerInfo: ITimer;
}

const Timer = ({timerInfo, type}: ITimerProps) => {
  const timer = useAddRecipeTimerIfItDoesNotExist(timerInfo);

  const remainingTimerInMs = useRecipeTimer(
    timer.updatedAt,
    timer.remainingTime,
    timer.isPaused,
  );

  const {minutes, seconds} = convertMsToMinsAndSecs(remainingTimerInMs);

  const toggleTimer = useToggleTimer(timer, remainingTimerInMs);
  const resetTimer = useResetTimer(timerInfo);

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
        {minutes}m {seconds}s
      </Text>

      <Stack direction="horizontal" gap={8}>
        {(minutes > 0 || seconds > 0) && (
          <Button
            intent="text"
            onClick={toggleTimer}
            aria-controls={`timer-${timer.id}`}
          >
            {timer.isPaused ? 'START' : 'PAUSE'}
          </Button>
        )}
        <Button intent="text" color="secondaryTextColor" onClick={resetTimer}>
          RESET
        </Button>
      </Stack>
    </Stack>
  );
};

export default Timer;
