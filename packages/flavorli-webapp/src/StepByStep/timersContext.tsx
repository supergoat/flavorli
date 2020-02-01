import React from 'react';
import {IContextITimer} from '../types';
import {getSavedTimersFromLocalStorage} from './useTimer';

interface IRecipeTimersContext {
  recipeId: string;
  recipeTimers: {[timerId: string]: IContextITimer};
  setRecipeTimers: React.Dispatch<{
    [timerId: string]: IContextITimer;
  }>;
}

export const RecipeTimersContext = React.createContext<IRecipeTimersContext | null>(
  null,
);

export function RecipeTimersProvider({
  recipeId,
  initialValues,
  ...props
}: {
  recipeId: string;
  initialValues?: {[timerId: string]: IContextITimer};
  children: React.ReactNode;
}) {
  const [initState] = React.useState(
    initialValues || getSavedTimersFromLocalStorage()[recipeId] || {},
  );

  const [recipeTimers, setRecipeTimers] = React.useReducer(
    (
      state: {[timerId: string]: IContextITimer},
      action: {[timerId: string]: IContextITimer},
    ) => ({
      ...state,
      ...action,
    }),
    initState,
  );

  return (
    <RecipeTimersContext.Provider
      value={{recipeTimers, setRecipeTimers, recipeId}}
      {...props}
    />
  );
}

export function useRecipeTimersContext() {
  const context = React.useContext(RecipeTimersContext);

  if (!context) {
    throw new Error(
      'useRecipeTimersContext must be used within a TimersProvider',
    );
  }
  return context;
}
