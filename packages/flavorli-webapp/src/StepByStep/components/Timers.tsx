import React from 'react';

import {Stack, Button, Dialog} from '@flavorli/elements';
import {useTimersContext, useRunTimer} from '../helpers/timersContext';
import NotificationTimer from './NotificationTimer';
import styled from 'styled-components';
import {useRestoreFocus} from '../../helpers/hooks';
import {ITimer} from '../types';

const RunTimer = ({timer}: {timer: ITimer}) => {
  useRunTimer(timer);
  return null;
};

const RunTimers = ({timers}: {timers: ITimer[]}) => {
  return (
    <>
      {timers.map((timer: ITimer) => (
        <RunTimer timer={timer} />
      ))}
    </>
  );
};

export const Timers = () => {
  const refEl = React.useRef<HTMLButtonElement>(null);

  const [showTimers, setShowTimers] = React.useState(false);
  const context = useTimersContext();

  useRestoreFocus(refEl, !showTimers);

  const timers = Object.values(context.timers);
  return timers.length > 0 ? (
    <>
      <RunTimers timers={timers} />

      <Stack width="100%" paddingBottom={8} paddingLeft={8} paddingRight={8}>
        <Stack
          gap={8}
          padding={8}
          paddingLeft={16}
          paddingRight={16}
          background="secondary"
          borderRadiusBottomLeft={24}
          borderRadiusBottomRight={24}
          width="100%"
          id="timers"
        >
          {showTimers && (
            <DialogWrapper
              label="Timers"
              describedbyID="timers"
              onClose={() => setShowTimers(false)}
            >
              <Stack gap={8} width="100%">
                {timers.map((timer: ITimer) => {
                  return <NotificationTimer timer={timer} key={timer.id} />;
                })}
                <Stack
                  distribution="center"
                  width="100%"
                  padding={8}
                  borderRadius={4}
                >
                  <Button
                    intent="text"
                    width="100%"
                    onClick={() => setShowTimers(false)}
                  >
                    Hide Timers
                  </Button>
                </Stack>
              </Stack>
            </DialogWrapper>
          )}

          {!showTimers && (
            <Stack distribution="center" width="100%" padding={8}>
              <Button
                ref={refEl}
                intent="text"
                width="100%"
                onClick={() => setShowTimers(true)}
              >
                View Timers
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  ) : (
    <Stack height="58px">
      <div />
    </Stack>
  );
};
export default Timers;

const DialogWrapper = styled(Dialog)`
  width: 100%;
`;
