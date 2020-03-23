import React from 'react';
import {IStep} from '../../types';
import Tag from './Tag';

import StepTasks from './StepTasks';
import {Stack, Text, Icon, H2, Button} from '@flavorli/elements';
import styled from 'styled-components';
import ImageList from './ImageList';
import Links from './Links';
import {IconName} from '@flavorli/elements/lib/miscellaneous/Icon';
import VideoPlayer from './VideoPlayer';

interface IRecipeStepProps {
  stepNo: number;
  noOfSteps: number;
  step: IStep;
}
const RecipeStep = ({stepNo, noOfSteps, step}: IRecipeStepProps) => {
  const refEl = React.useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = React.useState(false);

  const onDone = () => {
    setIsDone(true);

    const element = document.getElementById(`step-${stepNo + 2}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 190;

      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <Stack
      ref={refEl}
      width="100%"
      gap={16}
      background="surface"
      padding={24}
      shadow="LIGHT"
      borderRadius={8}
    >
      <UnstyledButton onClick={() => setIsDone(d => !d)}>
        <Stack width="100%" direction="horizontal" distribution="space-between">
          <H2 id={`step-${stepNo + 1}`}>
            Step {stepNo} of {noOfSteps}
          </H2>
        </Stack>
      </UnstyledButton>

      <>
        <Tag tag={step.for} />

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
            <VideoPlayer video={step.video} />
          ) : (
            <ImageList images={step.images} />
          ))}

        {step.heatLevel && <HeatLevel heatLevel={step.heatLevel} />}
        {step.ovenTemperature && (
          <OvenTemperature ovenTemperature={step.ovenTemperature} />
        )}

        <Links links={step.links} />

        <StepTasks tasks={step.tasks} />

        <Stack width="100%" alignment="end">
          {isDone ? (
            <Stack
              direction="horizontal"
              alignment="center"
              gap={4}
              height="35px"
            >
              <Text>Done</Text>
              <Icon name="check" />
            </Stack>
          ) : (
            <Button intent="secondary" onClick={onDone}>
              Complete
            </Button>
          )}
        </Stack>
      </>
    </Stack>
  );
};

export default RecipeStep;

const HeatLevel = ({heatLevel}: {heatLevel: string}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  let heat = 'Low Heat';

  if (heatLevel === 'mediumLow') {
    heat = 'Medium/Low Heat';
  }

  if (heatLevel === 'medium') {
    heat = 'Medium Heat';
  }

  if (heatLevel === 'mediumHigh') {
    heat = 'Medium High Heat';
  }

  if (heatLevel === 'high') {
    heat = 'High Heat';
  }

  let heatIcon: IconName = 'fireLow';

  if (heatLevel === 'mediumLow') {
    heatIcon = 'fireMediumLow';
  }
  if (heatLevel === 'medium') {
    heatIcon = 'fireMedium';
  }

  if (heatLevel === 'mediumHigh') {
    heatIcon = 'fireMediumHigh';
  }

  if (heatLevel === 'high') {
    heatIcon = 'fireHigh';
  }

  return (
    <UnstyledButton onClick={() => setIsOpen(o => !o)}>
      <Stack gap={8} padding={8} border="1px solid #eee" width="100% ">
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

          {isOpen ? <Icon name="chevronUp" /> : <Icon name="chevronDown" />}
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
    </UnstyledButton>
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

const UnstyledButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  margin-bottom: ${p => `${p.theme.spacings[16]}px`};
  cursor: pointer;
  background: none;
`;
