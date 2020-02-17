import React from 'react';
import {IRecipeTimer} from '../types';
import {getRecipeTimers} from './useRecipeTimer';

interface IRecipeTimersContext {
  recipeId: string;
  recipeTimers: Map<string, IRecipeTimer>;
  setRecipeTimers: React.Dispatch<{
    timerId: string;
    recipeTimer: IRecipeTimer;
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
  initialValues?: Map<string, IRecipeTimer>;
  children: React.ReactNode;
}) {
  const savedRecipeTimers = getRecipeTimers(recipeId);

  const [initState] = React.useState(
    initialValues || savedRecipeTimers || new Map<string, IRecipeTimer>([]),
  );

  const [recipeTimers, setRecipeTimers] = React.useReducer(
    (
      state: Map<string, IRecipeTimer>,
      action: {timerId: string; recipeTimer: IRecipeTimer},
    ) => {
      const {timerId, recipeTimer} = action;
      const cloneState = new Map(state);
      cloneState.set(timerId, recipeTimer);
      return cloneState;
    },
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
