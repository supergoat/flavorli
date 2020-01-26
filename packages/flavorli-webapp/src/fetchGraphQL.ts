import {Variables} from 'relay-runtime';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://fkb9k885i0.execute-api.eu-west-2.amazonaws.com/prod/graphql'
    : 'http://localhost:4000/dev/graphql';

async function fetchGraphQL(text?: string | null, variables?: Variables) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
