import React from 'react';
import {ICognitoUser} from './types';

interface ICognitoUserContext {
  user: ICognitoUser;
  setUser: React.Dispatch<Partial<ICognitoUser>>;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export const CognitoUserContext = React.createContext<ICognitoUserContext | null>(
  null,
);

export function CognitoUserProvider({children}: {children: React.ReactNode}) {
  const [stage, setStage] = React.useState(1);
  const [user, setUser] = React.useReducer(
    (state: ICognitoUser, action: Partial<ICognitoUser>) => {
      return {
        ...state,
        ...action,
      };
    },
    {pronouns: '', email: '', phone: '', username: '', password: ''},
  );

  return (
    <CognitoUserContext.Provider
      value={{
        user,
        stage,
        setUser,
        setStage,
      }}
    >
      {children}
    </CognitoUserContext.Provider>
  );
}

export function useCognitoUserContext() {
  const context = React.useContext(CognitoUserContext);

  if (!context) {
    throw new Error(
      'useCognitoUserContext must be used within a CognitoUserProvider',
    );
  }
  return context;
}
