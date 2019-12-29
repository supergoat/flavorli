import React from 'react';

import {Stack, Button, Dialog} from '@flavorli/elements';
import {useTimersContext} from '../helpers/timersContext';
import NotificationTimer from './NotificationTimer';
import styled from 'styled-components';

export const Timers = () => {
  const [showTimers, setShowTimers] = React.useState(false);
  const {timers} = useTimersContext();

  return Object.keys(timers).length > 0 ? (
    <Stack
      padding={8}
      gap={8}
      paddingLeft={4}
      paddingRight={4}
      width="100%"
      id="timers"
    >
      {showTimers && (
        <DialogWrapper
          label="Timers"
          describedbyID="timers"
          onClose={() => setShowTimers(t => !t)}
        >
          <Stack gap={8} width="100%">
            {Object.values(timers).map((timer: any) => {
              return <NotificationTimer timer={timer} key={timer.id} />;
            })}
            <Stack
              distribution="center"
              width="100%"
              padding={8}
              background="surface"
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
        <Stack
          distribution="center"
          width="100%"
          padding={8}
          background="surface"
          borderRadius={4}
        >
          <Button
            intent="text"
            width="100%"
            onClick={() => setShowTimers(true)}
          >
            View Timers
          </Button>
        </Stack>
      )}
    </Stack>
  ) : (
    <Stack height="50px">
      <div />
    </Stack>
  );
};
export default Timers;

const DialogWrapper = styled(Dialog)`
  width: 100%;
  height: 100%;
`;
