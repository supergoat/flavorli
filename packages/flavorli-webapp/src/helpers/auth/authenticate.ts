import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import {userPool} from '.';

export async function authenticate(username: string, password: string) {
  var userData = {
    Username: username,
    Pool: userPool,
  };

  var authenticationData = {
    Username: username,
    Password: password,
  };

  var cognitoUser = new CognitoUser(userData);
  var authenticationDetails = new AuthenticationDetails(authenticationData);

  try {
    const result = await new Promise<CognitoUser>((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(cognitoUser),
        onFailure: err => reject(err),
      });
    });

    return {result};
  } catch (err) {
    return {err};
  }
}
