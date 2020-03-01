import React from 'react';
import {IStep} from '../../types';
import Tag from './Tag';
import Video from '../../components/Video';

import StepTasks from './StepTasks';
import {Stack, Text, Icon} from '@flavorli/elements';
import styled from 'styled-components';
import ImageList from './ImageList';

interface IRecipeStepProps {
  step: IStep;
}
const RecipeStep = ({step}: IRecipeStepProps) => {
  return (
    <Stack width="100%" gap={16}>
      <Dot />

      <Tag tag={`for ${step.for}`} />
      {step?.notes && (
        <Stack
          background="primary"
          padding={16}
          gap={8}
          borderRadius={4}
          width="100%"
          direction="horizontal"
        >
          <Icon name="exclamation" />

          <Stack width="calc(100% - 26px)" gap={4}>
            {(step?.notes || []).map(note => (
              <Text width="100%" key={note} color="textOnPrimary">
                {note}
              </Text>
            ))}
          </Stack>
        </Stack>
      )}

      {(step.images || step.video) &&
        (step.video ? (
          <Video video={step.video} />
        ) : (
          <ImageList images={step.images} />
        ))}

      <StepTasks tasks={step.tasks} />
    </Stack>
  );
};

export default RecipeStep;

const Dot = styled.div`
  position: absolute;
  top: 4px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.colors.tagRed};
`;
