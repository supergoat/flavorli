import React from 'react';
import {Stack, Scroll} from '@flavorli/elements';
import {IColor} from '@flavorli/elements/lib/theme/colors';
import styled, {css} from 'styled-components';
import Navigation from './Navigation';

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
  return (
    <StepWrapper
      image={image}
      background={background}
      width="100%"
      height="100%"
      borderRadiusTopLeft={isDialog ? undefined : 24}
      borderRadiusTopRight={isDialog ? undefined : 24}
      paddingTop={48}
    >
      <Scroll>
        <Stack
          width="100%"
          gap={16}
          height="100%"
          paddingLeft={48}
          paddingRight={48}
        >
          {children}
        </Stack>
      </Scroll>

      <Stack width="100%" paddingLeft={48} paddingRight={48} paddingBottom={24}>
        <Navigation isDialog={isDialog} />
      </Stack>
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
