import React from 'react';
import {Stack, Text} from '@flavorli/elements';
import styled from 'styled-components';

interface IStepTasks {
  tasks: string[];
}

const Tasks = ({tasks}: IStepTasks) => {
  return (
    <Stack gap={8} id="step-tasks">
      {tasks.map(task => {
        return (
          <Stack direction="horizontal" alignment="start" gap={8}>
            <Label>
              <input type="checkbox" />
              <Text>{task}</Text>
            </Label>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Tasks;

// const FakeCheckBox = styled.div`
//   width: 15px;
//   height: 15px;
//   flex-shrink: 0;
//   /* border: ${p => `1px solid ${p.theme.colors.primary}`}; */

//   border-radius: ${p => `${p.theme.spacings[2]}px`};
//   box-shadow: inset 0px 0px 2px 0px var(--Primary, #273b7a);
// `;

const Label = styled.label`
  display: flex;
  input {
    margin-right: 8px;
  }
`;
