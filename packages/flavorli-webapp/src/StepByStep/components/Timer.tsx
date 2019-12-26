import React from 'react';
import styled, {css} from 'styled-components';
import {Stack, Text} from '@flavorli/elements';
import {useTimer} from '../../helpers/hooks';
import {ITimer} from '../types';

interface ITimerProps {
  timer?: ITimer;
}
export default ({timer}: ITimerProps) => {
  if (!timer) return null;

  const [time, isPaused, setIsPaused] = useTimer(timer.minutes, timer.seconds);

  return (
    <Stack gap={4}>
      <Text
        id="timer"
        role="timer"
        aria-label={timer.name}
        aria-atomic={true}
        fontSize={32}
      >
        {`${time.minutes}m ${
          time.seconds < 10 ? `0${time.seconds}` : time.seconds
        }s`}
      </Text>

      <Stack direction="horizontal">
        <StartPauseButton
          onClick={() => setIsPaused(!isPaused)}
          aria-controls="timer"
        >
          {isPaused ? 'START' : 'PAUSE'}
        </StartPauseButton>
        {/* <ResetButton onClick={() => setIsPaused(!isPaused)}>RESET</ResetButton> */}
      </Stack>
    </Stack>
  );
};

const timerStyles = css`
  color: ${p => p.theme.colors.primary};
  font-weight: bold;
  border: none;
  background: none;
  margin: 0;
  width: 47px;
  padding: 0;
  margin-right: 8px;
`;

const StartPauseButton = styled.button`
  ${timerStyles}
`;

// const ResetButton = styled.button`
//   ${timerStyles}
//   color: ${p => p.theme.colors.secondaryTextColor}
// `;
