import React from 'react';
import {Button, Stack} from '@flavorli/elements';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import ChevronRightWhite from '../icons/right_chevron_white.svg';

interface INavigation {
  onNavigate: (direction: 1 | -1) => void;
  hideNextStepButton?: boolean;
  hideBackButton?: boolean;
  nextButtonName?: string;
  backButtonName?: string;
  variation?: 'onPrimary';
}
const Navigation = ({
  onNavigate,
  hideNextStepButton = false,
  hideBackButton = false,
  nextButtonName,
  backButtonName,
  variation,
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
        hide={hideBackButton}
        aria-controls="recipe-steps"
        tabIndex={hideBackButton ? -1 : undefined}
        onClick={navigateToPreviousStep}
        intent={variation === 'onPrimary' ? 'secondaryOnPrimary' : 'secondary'}
      >
        {backButtonName || 'back'}
      </PreviousButton>

      {!hideNextStepButton && (
        <Button
          aria-controls="recipe-steps"
          width="100%"
          onClick={navigateToNextStep}
          intent={variation === 'onPrimary' ? 'secondaryOnPrimary' : 'primary'}
        >
          {nextButtonName || 'Next'}
          <ButtonIcon />
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;

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
