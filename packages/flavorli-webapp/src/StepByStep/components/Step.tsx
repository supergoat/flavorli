import React from 'react';
import {Stack, Scroll} from '@flavorli/elements';
import {IColor} from '@flavorli/elements/lib/theme/colors';
import styled, {css} from 'styled-components';
import {useStepsContext} from '../helpers/StepsContext';
import Navigation from './Navigation';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IPreparationStepListProps {
  children: React.ReactNode;
  isDialog?: boolean;
  background?: IColor;
  image?: string;
}
const Step = ({
  background,
  image,
  isDialog,
  children,
}: IPreparationStepListProps) => {
  const {currentStep, noOfSteps} = useStepsContext();

  return (
    <StepWrapper
      image={image}
      background={background}
      width="100%"
      height="100%"
      borderRadiusTopLeft={24}
      borderRadiusTopRight={24}
      padding={48}
      paddingBottom={24}
      role="group"
      aria-label={`Step ${currentStep} of ${noOfSteps}`}
      overflow="hidden"
    >
      <Scroll height="100%">
        <Stack
          width="100%"
          gap={16}
          height="100%"
          paddingLeft={4}
          paddingRight={4}
        >
          {children}
        </Stack>
      </Scroll>

      <Navigation isDialog={isDialog} />
    </StepWrapper>
  );
};

export default Step;

const StepWrapper = styled(Stack)<{image?: string}>`
  position: relative;
  ${p =>
    p.image &&
    css`
      &::before {
        content: '';
        background-image: url(${p.image});
        background-size: 550px;
        background-repeat: no-repeat;
        opacity: 0.1;
        top: 100px;
        left: 50px;
        bottom: 0;
        right: 0;
        position: absolute;
      }
    `}
`;
