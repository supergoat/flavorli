import React from 'react';
import {Stack, Text, Scroll, Button} from '@flavorli/elements';
import {IStep} from '../types';
import Timer from './Timer';
import Links from './Links';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';
import styled from 'styled-components';

interface IStepProps {
  step: IStep;
  noOfSteps: number;
  onChangeStep: (direction: 1 | -1) => void;
  className?: string;
}
export default ({step, noOfSteps, onChangeStep, className}: IStepProps) => {
  return (
    <Stack
      className={className}
      width="100%"
      height="100%"
      background="surface"
      borderRadiusTopLeft={16}
      borderRadiusTopRight={16}
      paddingBottom={24}
      role="group"
      aria-label={`Step ${step.no} of ${noOfSteps}`}
    >
      <Stack paddingLeft={24} paddingTop={24} width="100%">
        <Text fontSize={32} intent="secondary">
          {step.no}
        </Text>
      </Stack>

      <Scroll>
        <Stack
          paddingTop={48}
          paddingRight={48}
          paddingLeft={48}
          gap={16}
          height="100%"
          width="100%"
        >
          <Tag tag={step.tag} />

          <Links links={step.links} />

          <Kitchenware kitchenware={step.kitchenware} />

          <Ingredients ingredients={step.ingredients} />

          <Text spacing={{line: '1.5'}}>{step.description}</Text>

          <Timer timer={step.timer} />
        </Stack>
      </Scroll>

      <Stack
        direction="horizontal"
        gap={8}
        distribution="end"
        width="100%"
        paddingLeft={48}
        paddingRight={48}
      >
        <PreviousButton
          aria-controls="recipe-steps"
          hide={step.no === 1}
          intent="secondary"
          onClick={() => onChangeStep(-1)}
        >
          Previous
        </PreviousButton>

        {step.no !== noOfSteps && (
          <Button
            aria-controls="recipe-steps"
            onClick={() => onChangeStep(1)}
            width="100%"
          >
            Continue
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

const PreviousButton = styled(Button)<{hide: boolean}>`
  visibility: ${p => (p.hide ? 'hidden' : 'visible')};
`;
