import React from 'react';
import {Button, Stack} from '@flavorli/elements';
import styled from 'styled-components';
import ChevronRightWhite from '../icons/right_chevron_white.svg';
import {useStepByStepContext} from '../stepByStepContext';
import {useHistory} from 'react-router';

interface INavigationProps {
  isDialog?: boolean;
}
const Navigation = ({isDialog}: INavigationProps) => {
  const history = useHistory();
  const {
    onNavigate,
    onCloseDialogStep,
    currentStep,
    noOfSteps,
  } = useStepByStepContext();

  const navigateToNextStep = () => {
    onNavigate(1);
  };

  const navigateToPreviousStep = () => {
    if (currentStep === 1) {
      history.goBack();
    } else {
      onNavigate(-1);
    }
  };

  const navigateToRecipe = () => {
    // For now we can go back in history once but this might change in the future
    history.goBack();
  };

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === noOfSteps;

  const hideBackButton = isFirstStep;
  const hideNextButton = isLastStep;

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
            aria-controls="recipe-steps"
            tabIndex={hideBackButton ? -1 : undefined}
            onClick={navigateToPreviousStep}
            intent="secondary"
          >
            back
          </PreviousButton>

          {!hideNextButton && (
            <Button
              aria-controls="recipe-steps"
              width="100%"
              onClick={navigateToNextStep}
              intent="primary"
            >
              Next
              <ButtonIcon />
            </Button>
          )}

          {isLastStep && (
            <Button
              aria-controls="recipe-steps"
              width="100%"
              onClick={navigateToRecipe}
              intent="primary"
            >
              Done
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

const PreviousButton = styled(Button)``;

const ButtonIcon = styled.img.attrs(() => ({
  src: ChevronRightWhite,
  alt: '',
}))`
  position: absolute;
  right: 15px;
`;
