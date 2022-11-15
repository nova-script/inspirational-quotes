import { GraphQLSchema } from 'graphql'

import Mutations from './mutations'
import rootQuery from './queries/rootQuery'

export default new GraphQLSchema({
  query: rootQuery,
  mutation: Mutations
})
