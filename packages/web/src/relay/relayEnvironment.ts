import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'
import fetchGraphQL from './fetchGraphQL'

async function fetchRelay (params: any, variables: any): Promise<any> {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return await fetchGraphQL(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})
