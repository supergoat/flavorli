import React from 'react';
import {Stack, Button, Text, useCloseOnEsc} from '@flavorli/elements';
import {useTimersContext, useRunTimer} from '../helpers/timersContext';
import {ITimer} from '../types';
import Timer from './Timer';
import {AnimatePresence} from 'framer-motion';
import {useRestoreFocus} from '../../helpers/hooks';

const RunTimer = ({timer}: {timer: ITimer}) => {
  useRunTimer(timer);
  return null;
};

const RunTimers = ({timers}: {timers: ITimer[]}) => {
  return (
    <>
      {timers.map((timer: ITimer) => (
        <RunTimer timer={timer} key={timer.id} />
      ))}
    </>
  );
};

export const Timers = () => {
  const refEl = React.useRef<HTMLButtonElement>(null);
  const [showTimers, setShowTimers] = React.useState(false);
  const context = useTimersContext();
  const timers = Object.values(context.timers);

  useCloseOnEsc(() => setShowTimers(false));
  useRestoreFocus(refEl, !showTimers);

  const variants = {
    visible: {height: 'auto'},
    hidden: {height: '0'},
  };

  const timerVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
  };

  return (
    <>
      <RunTimers timers={timers} />

      <AnimatePresence>
        {timers.length > 0 && (
          <Stack
            initial={{translateY: '-100%'}}
            animate={{translateY: 0}}
            exit={{translateY: '-100%'}}
            width="100%"
            paddingBottom={16}
            paddingLeft={8}
            paddingRight={8}
          >
            <Stack
              paddingTop={8}
              paddingLeft={16}
              paddingRight={16}
              background="secondary"
              borderRadiusBottomLeft={24}
              borderRadiusBottomRight={24}
              width="100%"
              id="timers"
            >
              <AnimatePresence>
                {showTimers && (
                  <Stack
                    gap={4}
                    width="100%"
                    initial="hidden"
                    variants={variants}
                    animate="visible"
                    exit="hidden"
                    transition={{
                      type: 'tween',
                    }}
                    overflow="hidden"
                  >
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
                          variants={timerVariants}
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
              </AnimatePresence>
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
      </AnimatePresence>

      {timers.length === 0 && (
        <Stack height="58px">
          <div />
        </Stack>
      )}
    </>
  );
};
export default Timers;
