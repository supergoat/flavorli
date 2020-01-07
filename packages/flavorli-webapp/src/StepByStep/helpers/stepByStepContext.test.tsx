import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {useStepByStepContext, StepByStepProvider} from './stepByStepContext';

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe('useStepByStepContext', () => {
  it('should throw an error when useStepByStepContext is not used within a StepByStepProvider', () => {
    const {result} = renderHook(() => useStepByStepContext());

    expect(() => {
      expect(result.current).not.toBe(undefined);
    }).toThrow(
      Error('useStepByStepContext must be used within a StepByStepProvider'),
    );
  });

  it('should expose the correct functions and properties', () => {
    const wrapper = ({children}: {children?: React.ReactNode}) => (
      <StepByStepProvider initialValues={{noOfSteps: 10}}>
        {children}
      </StepByStepProvider>
    );

    const {result} = renderHook(() => useStepByStepContext(), {wrapper});

    const currentDialogStep = result.current['currentDialogStep'];
    const currentStep = result.current['currentStep'];
    const noOfSteps = result.current['noOfSteps'];
    const onOpenDialogStep = result.current['onOpenDialogStep'];
    const onCloseDialogStep = result.current['onCloseDialogStep'];
    const onNavigate = result.current['onNavigate'];

    expect(currentDialogStep).toEqual(null);
    expect(currentStep).toEqual(1);
    expect(noOfSteps).toEqual(10);
    expect(typeof onOpenDialogStep).toBe('function');
    expect(typeof onCloseDialogStep).toBe('function');
    expect(typeof onNavigate).toBe('function');
  });
});
