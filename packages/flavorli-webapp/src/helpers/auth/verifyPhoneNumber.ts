import {CognitoUser, ISignUpResult} from 'amazon-cognito-identity-js';
import {promisify} from '../utils';
import {userPool} from '.';

export async function verifyPhoneNumber(username: string, code: string) {
  var userData = {
    Username: username,
    Pool: userPool,
  };
  var cognitoUser = new CognitoUser(userData);

  try {
    const result = await promisify<Error, ISignUpResult>(callback => {
      cognitoUser.confirmRegistration(code, true, callback);
    });

    return {result};
  } catch (err) {
    return {err};
  }
}
