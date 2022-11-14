import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

async function fetchRelay(params: any, variables: any) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});