import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

async function fetchRelay(
  {name, text}: RequestParameters,
  variables: Variables,
) {
  console.log(`fetching query ${name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
