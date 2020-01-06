import React from 'react';
import {useRunTimer, useTimersContext} from '../helpers/timersContext';
import {IStepByStep, ITimer} from '../types';

interface IStepByStepProps {
  stepByStep?: IStepByStep;
}

const RunTimer = ({timer}: {timer: ITimer}) => {
  useRunTimer(timer);
  return null;
};

const RunTimers = () => {
  const context = useTimersContext();
  const timers = Object.values(context.timers);

  return (
    <>
      {timers.map((timer: ITimer) => (
        <RunTimer timer={timer} key={timer.id} />
      ))}
    </>
  );
};

export default RunTimers;
