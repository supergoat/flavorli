import React from 'react';
import {Stack, Text, Button} from '@flavorli/elements';
import styled from 'styled-components';
import {ITask} from '../../types';

interface IStepTasks {
  tasks: ITask[];
}

const Tasks = ({tasks}: IStepTasks) => {
  return (
    <Stack gap={8} id="step-tasks">
      {tasks.map((task, index) => {
        return (
          <Stack direction="horizontal" gap={8} key={`task-${task.name}`}>
            <CheckBox id={`task-${task.name}`} />
            <Stack width="calc(100% - 22px)" gap={8}>
              <label htmlFor={`task-${task.name}`}>{task.name}</label>
              {/* <HowToLink intent="text">How to: Finely chop an onion</HowToLink> */}

              <Stack gap={4}>
                {(task?.notes || []).map(note => (
                  <Text key={note} intent="secondary">
                    {note}
                  </Text>
                ))}
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Tasks;

const CheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  flex-shrink: 0;
  margin-right: 8px;
`;

const HowToLink = styled(Button)`
  color: ${p => p.theme.colors.secondaryTextColor};
  text-align: left;
`;
