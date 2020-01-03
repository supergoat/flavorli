import React from 'react';
import {Button, Stack} from '@flavorli/elements';
import styled from 'styled-components';

interface INavigation {
  onNavigate: (direction: 1 | -1) => void;
  hideNextStepButton?: boolean;
  hidePreviousStepButton?: boolean;
  nextButtonName?: string;
  previousButtonName?: string;
}
const Navigation = ({
  onNavigate,
  hideNextStepButton = false,
  hidePreviousStepButton = false,
  nextButtonName,
  previousButtonName,
}: INavigation) => {
  const navigateToNextStep = () => {
    onNavigate(1);
  };

  const navigateToPreviousStep = () => {
    onNavigate(-1);
  };

  return (
    <Stack direction="horizontal" gap={8} distribution="end" width="100%">
      <PreviousButton
        hide={hidePreviousStepButton}
        aria-label="Previous Step"
        aria-controls="recipe-steps"
        tabIndex={hidePreviousStepButton ? -1 : undefined}
        onClick={navigateToPreviousStep}
        intent="secondary"
      >
        {previousButtonName || 'Previous Step'}
      </PreviousButton>

      {!hideNextStepButton && (
        <Button
          aria-label="Next Step"
          aria-controls="recipe-steps"
          width="100%"
          onClick={navigateToNextStep}
        >
          {nextButtonName || 'Next Step'}
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;

const PreviousButton = styled(Button)<{hide: boolean}>`
  visibility: ${p => (p.hide ? 'hidden' : 'visible')};
`;
