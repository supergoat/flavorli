import {CognitoUserPool} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import {authenticate} from './authenticate';
import {createNewUser} from './createNewUser';
import {establishUserSession} from './establishUserSession';
import {verifyPhoneNumber} from './verifyPhoneNumber';

AWS.config.region = 'eu-west-2';

export const userPool = new CognitoUserPool({
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID as string,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID as string,
});

export const loginId = `cognito-idp.${
  AWS.config.region
}.amazonaws.com/${userPool.getUserPoolId()}`;

export {authenticate, createNewUser, establishUserSession, verifyPhoneNumber};
