import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';

import {ILink, IRecipeTimer} from '../../types';
import {useStepByStepContext} from '../stepByStepContext';
import {useRecipeTimersContext} from '../timersContext';
import {useRecipeTimer, convertMsToMinsAndSecs} from '../useRecipeTimer';

interface ILinkProps {
  link: ILink;
}
const Link = ({link}: ILinkProps) => {
  const {recipeTimers} = useRecipeTimersContext();
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
          {link.timerId && (
            <RemainingTime recipeTimer={recipeTimers[link.timerId]} />
          )}

          <Button intent="text" onClick={() => onOpenDialogStep(link.from)}>
            View Step
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Link;

const RemainingTime = ({recipeTimer}: {recipeTimer: IRecipeTimer}) => {
  const ms = useRecipeTimer(
    recipeTimer.updatedAt,
    recipeTimer.remainingTime,
    recipeTimer.isPaused,
  );

  const {minutes, seconds} = convertMsToMinsAndSecs(ms);

  return (
    <Text color="primary" data-testid={`timerid-${recipeTimer.id}`}>
      {minutes}m {seconds}s
    </Text>
  );
};
