import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';

import {ILink, IContextITimer} from '../../types';
import {useStepByStepContext} from '../stepByStepContext';
import {
  useTimer,
  useTimersContext,
  convertMillisecondsToMinutesAndSeconds,
} from '../timersContext';

interface ILinkProps {
  link: ILink;
}
const Link = ({link}: ILinkProps) => {
  const {timers} = useTimersContext();
  const {onOpenDialogStep} = useStepByStepContext();

  return (
    <Stack
      borderRadius={2}
      width="100%"
      background="secondary"
      paddingTop={8}
      paddingRight={16}
      paddingBottom={8}
      paddingLeft={16}
      gap={4}
    >
      <Stack
        direction="horizontal"
        distribution="space-between"
        alignment="end"
        width="100%"
      >
        <Stack gap={4} width="72%">
          <Text intent="secondary" fontSize={14}>
            {link.heading}
          </Text>
          <Text color="primary">{link.name}</Text>
        </Stack>
        <Stack gap={4} alignment="end" width="28%">
          {link.timerId && <RemainingTime timer={timers[link.timerId]} />}

          <Button intent="text" onClick={() => onOpenDialogStep(link.from)}>
            View Step
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Link;

const RemainingTime = ({timer}: {timer: IContextITimer}) => {
  const ms = useTimer(timer.updatedAt, timer.remainingTime, timer.isPaused);

  const {minutes, seconds} = convertMillisecondsToMinutesAndSeconds(ms);

  return (
    <Text color="primary" data-testid={`timerid-${timer.id}`}>
      {minutes}m {seconds}s
    </Text>
  );
};
