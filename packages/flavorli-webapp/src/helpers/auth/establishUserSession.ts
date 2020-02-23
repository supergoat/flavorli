import {CognitoUser, CognitoUserSession} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import {loginId} from '.';

export function establishUserSession(cognitoUser: CognitoUser) {
  cognitoUser.getSession((err: Error, session: CognitoUserSession) => {
    if (session) {
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env
          .REACT_APP_COGNITO_IDENTITY_POOL_ID as string,
        Logins: {
          [loginId]: session.getIdToken().getJwtToken(),
        },
      });

      refreshSession(cognitoUser, session);
    }

    if (err) {
      console.error(err);
    }
  });
}

export function refreshSession(
  cognitoUser: CognitoUser,
  session: CognitoUserSession,
) {
  const refresh_token = session.getRefreshToken();
  if (
    (AWS.config.credentials as AWS.CognitoIdentityCredentials).needsRefresh()
  ) {
    cognitoUser.refreshSession(refresh_token, (err, session) => {
      if (err) {
        console.log(err);
      } else {
        // @ts-ignore
        AWS.config.credentials.params.Logins[
          loginId
        ] = session.getIdToken().getJwtToken();
        refreshCredentials();
      }
    });
  }
}

export function refreshCredentials() {
  (AWS.config.credentials as AWS.CognitoIdentityCredentials).refresh(error => {
    if (error) {
      console.error(error);
    } else {
      console.log('Successfully logged!');
    }
  });
}
