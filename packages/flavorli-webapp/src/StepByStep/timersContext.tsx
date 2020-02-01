import React from 'react';
import {IRecipeTimer} from '../types';
import {getSavedTimersFromLocalStorage} from './useRecipeTimer';

interface IRecipeTimersContext {
  recipeId: string;
  recipeTimers: {[timerId: string]: IRecipeTimer};
  setRecipeTimers: React.Dispatch<{
    [timerId: string]: IRecipeTimer;
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
  initialValues?: {[timerId: string]: IRecipeTimer};
  children: React.ReactNode;
}) {
  const [initState] = React.useState(
    initialValues || getSavedTimersFromLocalStorage()[recipeId] || {},
  );

  const [recipeTimers, setRecipeTimers] = React.useReducer(
    (
      state: {[timerId: string]: IRecipeTimer},
      action: {[timerId: string]: IRecipeTimer},
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
