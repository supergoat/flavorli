import React from 'react';

interface IStepsContext {
  currentDialogStep: number;
  currentStep: number;
  noOfSteps: number;
  onOpenDialogStep: (stepNo: number) => void;
  onCloseDialogStep: () => void;
  onNavigate: (direction: 1 | -1) => void;
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
  const [currentDialogStep, setCurrentDialogStep] = React.useState();
  const [lastFocus, setLastFocus] = React.useState();

  const onOpenDialogStep = (stepNo: number) => {
    setLastFocus(document.activeElement);
    setCurrentDialogStep(stepNo);
  };

  const onCloseDialogStep = () => {
    setCurrentDialogStep(null);
    lastFocus.focus();
  };

  const onNavigate = (direction: 1 | -1) => {
    setCurrentStep(s => s + direction);
  };

  return (
    <StepByStepContext.Provider
      value={{
        currentStep,
        currentDialogStep,
        onOpenDialogStep,
        onCloseDialogStep,
        onNavigate,
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
