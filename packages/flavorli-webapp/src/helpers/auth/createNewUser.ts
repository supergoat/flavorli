import {CognitoUserAttribute, ISignUpResult} from 'amazon-cognito-identity-js';
import {INewUser} from '../../Authentication/types';
import {userPool} from '.';
import {promisify} from '../utils';

export async function createNewUser(newCognitoUser: INewUser) {
  const {pronouns, email, phone, username, password} = newCognitoUser;

  var attributeGender = new CognitoUserAttribute({
    Name: 'gender',
    Value: pronouns,
  });

  var attributeEmail = new CognitoUserAttribute({
    Name: 'email',
    Value: email,
  });
  var attributePhoneNumber = new CognitoUserAttribute({
    Name: 'phone_number',
    Value: phone,
  });

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
