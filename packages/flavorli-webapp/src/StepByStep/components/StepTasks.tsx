import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';
import ImageList from './ImageList';
import {ITask} from '../../types';

interface IStepTasks {
  tasks: ITask[];
}

const Tasks = ({tasks}: IStepTasks) => {
  return (
    <Stack gap={8} id="step-tasks">
      {tasks.map((task, index) => {
        return (
          <Stack direction="horizontal" gap={8} key={`task-${index}`}>
            <CheckBox id={`task-${task}`} />
            <Stack width="100%" gap={4}>
              <label htmlFor={`task-${task}`}>{task.name}</label>
              <Text intent="secondary">{task.description}</Text>
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
