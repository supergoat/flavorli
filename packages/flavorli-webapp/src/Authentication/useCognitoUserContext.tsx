import React from 'react';
import {INewUser} from './types';

interface INewUserContext {
  user: INewUser;
  setUser: React.Dispatch<Partial<INewUser>>;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export const NewUserContext = React.createContext<INewUserContext | null>(null);

export function NewUserProvider({children}: {children: React.ReactNode}) {
  const [stage, setStage] = React.useState(1);
  const [user, setUser] = React.useReducer(
    (state: INewUser, action: Partial<INewUser>) => {
      return {
        ...state,
        ...action,
      };
    },
    {pronouns: '', email: '', phone: '', username: '', password: ''},
  );

  return (
    <NewUserContext.Provider
      value={{
        user,
        stage,
        setUser,
        setStage,
      }}
    >
      {children}
    </NewUserContext.Provider>
  );
}

export function useNewUserContext() {
  const context = React.useContext(NewUserContext);

  if (!context) {
    throw new Error('useNewUserContext must be used within a NewUserProvider');
  }
  return context;
}
