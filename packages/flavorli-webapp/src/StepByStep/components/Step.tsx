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
  isDialog?: boolean;
  step: IStep;
  noOfSteps: number;
  onChangeStep: (direction: 1 | -1) => void;
  onViewStep: (stepNo: number) => void;
  onClose?: () => void;
  className?: string;
}
export default ({
  isDialog,
  step,
  noOfSteps,
  onChangeStep,
  onViewStep,
  onClose,
  className,
}: IStepProps) => {
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

          <Links links={step.links} onViewStep={onViewStep} />

          <Kitchenware kitchenware={step.kitchenware} />

          <Ingredients ingredients={step.ingredients} />

          <Text spacing={{line: '1.5'}}>{step.description}</Text>

          <Timer id={step?.timer?.id} timerName={step?.timer?.name} />
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
        {!isDialog && (
          <>
            <PreviousButton
              aria-label="Previous Step"
              aria-controls="recipe-steps"
              hide={step.no === 1}
              tabIndex={step.no === 1 ? -1 : undefined}
              intent="secondary"
              onClick={() => onChangeStep(-1)}
            >
              Previous
            </PreviousButton>

            {step.no !== noOfSteps && (
              <Button
                aria-label="Next Step"
                aria-controls="recipe-steps"
                onClick={() => onChangeStep(1)}
                width="100%"
              >
                Continue
              </Button>
            )}
          </>
        )}
        {isDialog && (
          <Button width="100%" intent="secondary" onClick={onClose}>
            Close
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

const PreviousButton = styled(Button)<{hide: boolean}>`
  visibility: ${p => (p.hide ? 'hidden' : 'visible')};
`;
