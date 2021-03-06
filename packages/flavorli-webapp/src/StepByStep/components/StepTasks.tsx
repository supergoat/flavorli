import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';

interface IStepTasks {
  tasks: string[];
}

const Tasks = ({tasks}: IStepTasks) => {
  return (
    <Stack gap={8} id="step-tasks">
      {tasks.map((task, index) => {
        return (
          <Stack
            direction="horizontal"
            alignment="start"
            gap={8}
            key={`task-${index}`}
          >
            <Task>
              <CheckBox id={`task-${task}`} />
              <label htmlFor={`task-${task}`}>{task}</label>
            </Task>
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

const Task = styled.div`
  display: flex;
`;
