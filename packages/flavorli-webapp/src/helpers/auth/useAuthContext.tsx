import React from 'react';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {userPool} from '.';

interface IAuthContext {
  cognitoUser: CognitoUser | null;
  setCognitoUser: React.Dispatch<CognitoUser>;
}

export const AuthContext = React.createContext<IAuthContext | null>(null);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [cognitoUser, setCognitoUser] = React.useState<CognitoUser | null>(
    userPool.getCurrentUser(),
  );

  return (
    <AuthContext.Provider
      value={{
        cognitoUser,
        setCognitoUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
}
