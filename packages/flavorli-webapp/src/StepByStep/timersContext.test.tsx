import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {useRecipeTimersContext, RecipeTimersProvider} from './timersContext';

import {timer} from './mockData';
import {IRecipeTimer} from '../types';

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
  jest.useRealTimers();
});

const setup = ({
  initialValues,
}: {initialValues?: {[timerId: string]: IRecipeTimer}} = {}) => {
  const wrapper = ({children}: {children?: React.ReactNode}) => (
    <RecipeTimersProvider recipeId="1" initialValues={initialValues}>
      {children}
    </RecipeTimersProvider>
  );

  return renderHook(() => useRecipeTimersContext(), {wrapper});
};
describe('useRecipeTimersContext', () => {
  it('should throw an error when useRecipeTimersContext is not used within a TimersProvider', () => {
    const {result} = renderHook(() => useRecipeTimersContext());

    expect(() => {
      expect(result.current).not.toBe(undefined);
    }).toThrow(
      Error('useRecipeTimersContext must be used within a TimersProvider'),
    );
  });

  it('should expose the recipeTimers and setRecipeTimers function', () => {
    const {result} = setup();

    const recipeTimers = result.current['recipeTimers'];
    const setRecipeTimers = result.current['setRecipeTimers'];

    expect(recipeTimers).toEqual({});
    expect(typeof setRecipeTimers).toBe('function');
  });

  it('should use custom recipeTimers', () => {
    const initialValues = {[timer.id]: timer};

    const {result} = setup({initialValues});

    const recipeTimers = result.current['recipeTimers'];
    const setRecipeTimers = result.current['setRecipeTimers'];

    expect(recipeTimers).toEqual(initialValues);
    expect(typeof setRecipeTimers).toBe('function');
  });
});
