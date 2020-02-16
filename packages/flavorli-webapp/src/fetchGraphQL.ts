import {Variables} from 'relay-runtime';

const API_URL = process.env.REACT_APP_API_URL as string;

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
