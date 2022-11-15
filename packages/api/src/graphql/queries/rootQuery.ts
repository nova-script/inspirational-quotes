import { GraphQLObjectType } from 'graphql'

import queryAllQuotes from './queryAllQuotes'
import queryQuoteById from './queryQuoteById'

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryQuoteById,
    queryAllQuotes
  }
})
