import React from 'react';
import {useTimer} from './hooks';
import {Stack, Icon, Text, Button} from '@flavorli/elements';
import styled from 'styled-components';

interface ITimer {
  minutes: number;
  seconds: number;
}
export default ({minutes, seconds}: ITimer) => {
  const [time, isPaused, setIsPaused] = useTimer(minutes, seconds);

  return (
    <Stack
      direction="horizontal"
      alignment="center"
      border="1px solid #eef"
      padding={16}
      borderRadius={4}
      gap={48}
    >
      <Stack direction="horizontal" alignment="center" gap={16} width="100%">
        <Icon name="timer" />
        <Text color="primary" fontSize={24}>
          {time}
        </Text>
      </Stack>

      <Button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? 'START' : 'PAUSE'}
      </Button>
      {/* <Text intent="highlight" fontSize={16}>
       
      </Text> */}
    </Stack>
  );
};
