import {Variables} from 'relay-runtime';
// import {userPool} from './helpers/auth';
// import {CognitoUserSession} from 'amazon-cognito-identity-js';

const API_URL = process.env.REACT_APP_API_URL as string;

async function fetchGraphQL(text?: string | null, variables?: Variables) {
  // let token = '';
  // userPool
  //   ?.getCurrentUser()
  //   ?.getSession((err: any, session: CognitoUserSession) => {
  //     token = session?.getIdToken()?.getJwtToken();
  //   });

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `${token}`,
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
