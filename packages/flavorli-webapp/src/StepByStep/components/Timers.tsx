import React from 'react';
import {Stack, Button, Text, useCloseOnEsc} from '@flavorli/elements';
import {ITimer} from '../../types';
import Timer from './Timer';
import {useRestoreFocus} from '../../helpers/hooks';
import {useRecipeTimersContext} from '../timersContext';

export const Timers = () => {
  const refEl = React.useRef<HTMLButtonElement>(null);
  const [showRecipeTimers, setShowRecipeTimers] = React.useState(false);
  useCloseOnEsc(() => setShowRecipeTimers(false));
  useRestoreFocus(refEl, !showRecipeTimers);

  const context = useRecipeTimersContext();

  const recipeTimers = Object.keys(context.recipeTimers).map(function(timerId) {
    return context.recipeTimers[timerId];
  });

  return (
    <>
      {recipeTimers.length > 0 && (
        <Stack width="100%" paddingBottom={4} paddingLeft={4} paddingRight={4}>
          <Stack
            paddingTop={8}
            paddingLeft={8}
            paddingRight={8}
            background="secondaryLight"
            borderRadiusBottomLeft={8}
            borderRadiusBottomRight={8}
            width="100%"
            id="timers"
          >
            {showRecipeTimers && (
              <Stack gap={4} width="100%">
                {recipeTimers.map((timer: ITimer) => {
                  return (
                    <Stack
                      key={timer.id}
                      width="100%"
                      background="surface"
                      border="1px solid #e4e0ff"
                      gap={4}
                      borderRadius={4}
                      padding={8}
                      paddingLeft={16}
                      paddingRight={16}
                    >
                      <Text fontSize={14} color="primary">
                        {timer.name}
                      </Text>
                      {timer && <Timer timerInfo={timer} type="notification" />}
                    </Stack>
                  );
                })}
              </Stack>
            )}

            <Stack distribution="center" width="100%" padding={8}>
              <Button
                ref={refEl}
                intent="text"
                width="100%"
                onClick={() => setShowRecipeTimers(t => !t)}
              >
                {!showRecipeTimers ? 'View Timers' : 'Hide Timers'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}

      {recipeTimers.length === 0 && (
        <Stack height="46px">
          <div />
        </Stack>
      )}
    </>
  );
};
export default Timers;
