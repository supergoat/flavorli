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
      navigateToHome();
    } else {
      onNavigate(-1);
    }
  };

  const onDone = () => {
    navigateToHome();
  };

  const navigateToHome = () => {
    // For now we can go back in history once but this might change in the future
    history.replace('/');
  };

  const isLastStep = currentStep === noOfSteps;

  const hideNextButton = isLastStep;

  return (
    <Stack
      background="surface"
      width="100%"
      paddingBottom={16}
      paddingLeft={24}
      paddingRight={24}
    >
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
                onClick={onDone}
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
    </Stack>
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
  right: 35px;
`;
