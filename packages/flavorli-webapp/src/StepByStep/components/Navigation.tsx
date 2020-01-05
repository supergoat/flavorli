import React from 'react';
import {Button, Stack} from '@flavorli/elements';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import ChevronRightWhite from '../icons/right_chevron_white.svg';
import {useStepsContext} from '../helpers/StepByStepProvider';

interface INavigationProps {
  isDialog?: boolean;
}
const Navigation = ({isDialog}: INavigationProps) => {
  const {
    onNavigate,
    onCloseDialogStep,
    currentStep,
    noOfSteps,
  } = useStepsContext();

  const navigateToNextStep = () => {
    onNavigate(1);
  };

  const navigateToPreviousStep = () => {
    onNavigate(-1);
  };

  const hideBackButton = currentStep === 1;
  const hideNextButton = currentStep === noOfSteps;

  return (
    <NavigationWrapper
      direction="horizontal"
      gap={8}
      distribution="end"
      width="100%"
      paddingTop={16}
    >
      {!isDialog && (
        <>
          <PreviousButton
            hide={hideBackButton}
            aria-controls="recipe-steps"
            tabIndex={hideBackButton ? -1 : undefined}
            onClick={navigateToPreviousStep}
            intent={currentStep <= 3 ? 'secondaryOnPrimary' : 'secondary'}
          >
            back
          </PreviousButton>

          {!hideNextButton && (
            <Button
              aria-controls="recipe-steps"
              width="100%"
              onClick={navigateToNextStep}
              intent={currentStep <= 3 ? 'secondaryOnPrimary' : 'primary'}
            >
              {currentStep === 1 && 'Ingredients'}
              {currentStep === 2 && 'Items'}
              {currentStep === 3 && 'Preparation'}
              {currentStep > 3 && 'Next'}
              <ButtonIcon />
            </Button>
          )}
        </>
      )}
      {isDialog && (
        <Button width="100%" intent="secondary" onClick={onCloseDialogStep}>
          Close
        </Button>
      )}
    </NavigationWrapper>
  );
};

export default Navigation;

const NavigationWrapper = styled(Stack)`
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.4);
`;

const PreviousButton = styled(Button)<{
  hide: boolean;
  css?: FlattenSimpleInterpolation;
}>`
  ${p => p.css && p.css};
  visibility: ${p => (p.hide ? 'hidden' : 'visible')};
`;

const ButtonIcon = styled.img.attrs(() => ({
  src: ChevronRightWhite,
  alt: '',
}))`
  position: absolute;
  right: 15px;
`;
