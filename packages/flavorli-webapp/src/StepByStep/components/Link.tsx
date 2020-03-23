import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import {ILink, IRecipeTimer} from '../../types';
import {useRecipeTimersContext} from '../timersContext';
import {useRecipeTimer, convertMsToMinsAndSecs} from '../useRecipeTimer';

interface ILinkProps {
  link: ILink;
}
const Link = ({link}: ILinkProps) => {
  const {recipeTimers} = useRecipeTimersContext();
  const onGoToStep = (number: number) => {
    document
      .getElementById(`step-${number}`)
      ?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <Button
      intent="text"
      onClick={() => onGoToStep(link.from)}
      style={{
        padding: 0,
        fontWeight: 'normal',
      }}
    >
      <Stack
        direction="horizontal"
        gap={4}
        width="100%"
        style={{flexWrap: 'wrap'}}
      >
        <Text>From step {link.from}: </Text>
        <Text color="secondaryTextColor">{link.name}</Text>
        {link.timerId && recipeTimers.get(link.timerId) && (
          <RemainingTime
            recipeTimer={recipeTimers.get(link.timerId) as IRecipeTimer}
          />
        )}
      </Stack>
    </Button>
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
    <Text color="secondaryTextColor" data-testid={`timerid-${recipeTimer.id}`}>
      [{minutes}m {seconds}s]
    </Text>
  );
};
