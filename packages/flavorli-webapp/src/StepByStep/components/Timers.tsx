import React from 'react';
import {Stack, Button, Text, useCloseOnEsc} from '@flavorli/elements';
import {useTimersContext} from '../helpers/timersContext';
import {ITimer} from '../types';
import Timer from './Timer';
import {useRestoreFocus} from '../../helpers/hooks';

export const Timers = () => {
  const refEl = React.useRef<HTMLButtonElement>(null);
  const [showTimers, setShowTimers] = React.useState(false);
  const context = useTimersContext();
  const timers = Object.values(context.timers);

  useCloseOnEsc(() => setShowTimers(false));
  useRestoreFocus(refEl, !showTimers);

  return (
    <>
      {timers.length > 0 && (
        <Stack width="100%" paddingBottom={16} paddingLeft={8} paddingRight={8}>
          <Stack
            paddingTop={8}
            paddingLeft={16}
            paddingRight={16}
            background="secondaryLight"
            borderRadiusBottomLeft={24}
            borderRadiusBottomRight={24}
            width="100%"
            id="timers"
          >
            {showTimers && (
              <Stack gap={4} width="100%">
                {timers.map((timer: ITimer) => {
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
                      <Timer timer={timer} type="notification" />
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
                onClick={() => setShowTimers(t => !t)}
              >
                {!showTimers ? 'View Timers' : 'Hide Timers'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}

      {timers.length === 0 && (
        <Stack height="58px">
          <div />
        </Stack>
      )}
    </>
  );
};
export default Timers;
