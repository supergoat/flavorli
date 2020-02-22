import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  ISignUpResult,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import {promisify} from '../helpers/utils';
import {ICognitoUser} from './types';

const UserPoolId = 'eu-west-2_o2dQnu9LD';
const ClientId = '56jsd50es7e76ftapsuijsemb2';
const IdentityPoolId = 'eu-west-2:4bc7aeee-352a-483a-92f3-0772baadd86f';

var poolData = {
  UserPoolId,
  ClientId,
};

var userPool = new CognitoUserPool(poolData);

export async function createUser(user: ICognitoUser) {
  const {pronouns, email, phone, username, password} = user;

  var dataGender = {
    Name: 'gender',
    Value: pronouns,
    Required: true,
  };

  var dataEmail = {
    Name: 'email',
    Value: email,
    Required: true,
  };

  var dataPhoneNumber = {
    Name: 'phone_number',
    Value: phone,
    Required: true,
  };

  var attributeGender = new CognitoUserAttribute(dataGender);

  var attributeEmail = new CognitoUserAttribute(dataEmail);
  var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
  var attributeList = [attributeEmail, attributePhoneNumber, attributeGender];

  try {
    const result = await promisify<Error, ISignUpResult>(callback => {
      userPool.signUp(username, password, attributeList, [], callback);
    });

    return {result};
  } catch (err) {
    return {err};
  }
}

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
    const result = await new Promise<CognitoUserSession>((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(result),
        onFailure: err => reject(err),
      });
    });

    return {result};
  } catch (err) {
    return {err};
  }
}

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

export function establishUserSession(result: CognitoUserSession) {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId,
    Logins: {
      [`cognito-idp.${
        AWS.config.region
      }.amazonaws.com/${userPool.getUserPoolId()}`]: result
        .getIdToken()
        .getJwtToken(),
    },
  });

  refreshCredentials();
}

export function refreshCredentials() {
  (<AWS.CognitoIdentityCredentials>AWS.config.credentials).refresh(error => {
    if (error) {
      console.error(error);
    } else {
      console.log('Successfully logged!');
    }
  });
}
