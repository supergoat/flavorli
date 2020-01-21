import {Variables} from 'relay-runtime';

async function fetchGraphQL(text?: string | null, variables?: Variables) {
  const response = await fetch('http://localhost:4000/dev/graphql', {
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
