import React from 'react';
import {IStep} from '../../types';
import Tag from './Tag';
import Video from '../../components/Video';

import StepTasks from './StepTasks';
import {Stack, Text, Icon} from '@flavorli/elements';
import styled from 'styled-components';
import ImageList from './ImageList';
import Links from './Links';

interface IRecipeStepProps {
  stepNo: number;
  noOfSteps: number;
  step: IStep;
}
const RecipeStep = ({stepNo, noOfSteps, step}: IRecipeStepProps) => {
  return (
    <Stack width="100%" gap={16} id={`step-${stepNo}`}>
      <Dot />
      <Stack gap={8}>
        <Text>
          Step {stepNo} of {noOfSteps}
        </Text>
        <Tag tag={step.for} />
      </Stack>

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
      <Links links={step.links} />

      <StepTasks tasks={step.tasks} />
    </Stack>
  );
};

export default RecipeStep;

const Dot = styled.div`
  position: absolute;
  top: 3px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.textColor};
`;
