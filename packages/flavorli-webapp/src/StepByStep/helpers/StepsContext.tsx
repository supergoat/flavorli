import React from 'react';

interface IStepsContext {
  openLink: number;
  currentStep: number;
  noOfSteps: number;
  onViewStep: (stepNo: number) => void;
  onCloseViewStep: () => void;
  onChangeStep: (direction: 1 | -1) => void;
}

export const StepByStepContext = React.createContext<IStepsContext | null>(
  null,
);

export function StepByStepProvider({
  initialValues,
  ...props
}: {
  initialValues: {
    noOfSteps: number;
    currentStep?: number;
  };
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = React.useState(
    initialValues?.currentStep || 1,
  );
  const [openLink, setOpenLink] = React.useState();
  const [lastFocus, setLastFocus] = React.useState();

  const onViewStep = (stepNo: number) => {
    setLastFocus(document.activeElement);
    setOpenLink(stepNo);
  };

  const onCloseViewStep = () => {
    setOpenLink(null);
    lastFocus.focus();
  };

  const onChangeStep = (direction: 1 | -1) => {
    setCurrentStep(s => s + direction);
  };

  return (
    <StepByStepContext.Provider
      value={{
        currentStep,
        openLink,
        onViewStep,
        onCloseViewStep,
        onChangeStep,
        noOfSteps: initialValues.noOfSteps,
      }}
      {...props}
    />
  );
}

export function useStepsContext() {
  const context = React.useContext(StepByStepContext);

  if (!context) {
    throw new Error('useStepsContext must be used within a StepsProvider');
  }
  return context;
}
