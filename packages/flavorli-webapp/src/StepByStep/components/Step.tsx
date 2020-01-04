import React from 'react';
import {Stack, Scroll} from '@flavorli/elements';
import {IColor} from '@flavorli/elements/lib/theme/colors';
import styled, {css} from 'styled-components';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IPreparationStepListProps {
  stepNo: number;
  noOfSteps: number;
  navigation: React.ReactNode;
  children: React.ReactNode;
  background?: IColor;
  image?: string;
}
const Step = ({
  stepNo,
  noOfSteps,
  background,
  image,
  navigation,
  children,
}: IPreparationStepListProps) => {
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
      aria-label={`Step ${stepNo} of ${noOfSteps}`}
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
      {navigation}
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
