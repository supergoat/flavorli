import React from 'react';
import {IStep} from '../../types';
import Tag from './Tag';
import Video from '../../components/Video';

import StepTasks from './StepTasks';
import {Stack, Text, Icon, Button} from '@flavorli/elements';
import styled from 'styled-components';
import ImageList from './ImageList';
import Links from './Links';
import {IconName} from '@flavorli/elements/lib/miscellaneous/Icon';

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

      {step.heatLevel && <HeatLevel heatLevel={step.heatLevel} />}
      {step.ovenTemperature && (
        <OvenTemperature ovenTemperature={step.ovenTemperature} />
      )}

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

const HeatLevel = ({heatLevel}: {heatLevel: string}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  let heat = 'Low Heat';

  if (heatLevel === 'mediumLow') {
    heat = 'Medium/Low Heat';
  }

  if (heatLevel === 'medium') {
    heat = 'Medium Heat';
  }

  if (heatLevel === 'high') {
    heat = 'High Heat';
  }

  let heatIcon: IconName = 'fireOne';

  if (heatLevel === 'mediumLow') {
    heatIcon = 'fireTwo';
  }
  if (heatLevel === 'medium') {
    heatIcon = 'fireThree';
  }

  if (heatLevel === 'high') {
    heatIcon = 'fireFour';
  }

  return (
    <Stack gap={8} border="1px solid #eee" padding={8} width="100%">
      <Stack
        gap={8}
        direction="horizontal"
        width="100%"
        distribution="space-between"
        alignment="center"
      >
        <Stack direction="horizontal" alignment="center" gap={8}>
          <Icon name={heatIcon} />
          <Text>{heat}</Text>
        </Stack>
        <Button intent="text" onClick={() => setIsOpen(o => !o)}>
          {isOpen ? <Icon name="chevronUp" /> : <Icon name="chevronDown" />}
        </Button>
      </Stack>

      {isOpen && (
        <>
          {heatLevel === 'high' && (
            <Stack gap={4}>
              <Text>Highest heat setting</Text>
              <Text>For boiling and quickly raising the heat</Text>
            </Stack>
          )}
          {heatLevel === 'medium' && (
            <Stack gap={4}>
              <Text>Between mid-point and the highest heat setting</Text>
              <Text>For sauteing, browning and frying</Text>
            </Stack>
          )}
          {heatLevel === 'mediumLow' && (
            <Stack gap={4}>
              <Text>Between the mid point and the lowest heat setting</Text>
              <Text>FFor softening vegetables and rapid simmeriing</Text>
            </Stack>
          )}
          {heatLevel === 'low' && (
            <Stack gap={4}>
              <Text>Lowest heat setting</Text>
              <Text>For simmering</Text>
            </Stack>
          )}
        </>
      )}
    </Stack>
  );
};

const OvenTemperature = ({ovenTemperature}: {ovenTemperature: string}) => {
  return (
    <Stack gap={8} border="1px solid #eee" padding={8} width="100%">
      <Stack gap={8} direction="horizontal" width="100%" alignment="center">
        <Icon name="oven" />
        <Text>Fan oven: {ovenTemperature}</Text>
      </Stack>
    </Stack>
  );
};
