import React from 'react';
import {Stack, Text, Scroll, Button} from '@flavorli/elements';
import {IStep} from '../types';
import Timer from './Timer';
import Links from './Links';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';
import styled from 'styled-components';
import ImageList from './ImageList';
import Navigation from './Navigation';

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
      borderRadiusTopLeft={isDialog ? undefined : 24}
      borderRadiusTopRight={isDialog ? undefined : 24}
      paddingBottom={24}
      role="group"
      aria-label={`Step ${step.no} of ${noOfSteps}`}
    >
      {step.type !== 'MISE_EN_PLACE_STEP' && (
        <Stack paddingLeft={24} paddingTop={24} width="100%">
          <StepNo>{step.no}</StepNo>
        </Stack>
      )}

      {step.type === 'MISE_EN_PLACE_STEP' && (
        <Stack paddingLeft={48} paddingTop={48} paddingBottom={8} width="100%">
          <Stack gap={4}>
            <Heading>Mise en place</Heading>
            <SubHeading>Preparation</SubHeading>
          </Stack>
        </Stack>
      )}

      <Scroll>
        <Stack
          paddingTop={step.type === 'MISE_EN_PLACE_STEP' ? 8 : 48}
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

          <Text spacing={{line: '1.5'}} id="step-description">
            {step.description}
          </Text>

          {step.timer && <Timer timer={step.timer} />}

          {step?.images && step?.images?.length > 0 && (
            <ImageList images={step?.images} />
          )}
        </Stack>
      </Scroll>

      <Stack
        direction="horizontal"
        gap={8}
        distribution="end"
        width="100%"
        paddingTop={16}
        paddingLeft={48}
        paddingRight={48}
      >
        {!isDialog && (
          <Navigation
            onNavigate={onChangeStep}
            hideNextStepButton={step.no === noOfSteps}
          />
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

const StepNo = styled.p`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[48]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.tagRed};
  font-weight: normal;
`;
