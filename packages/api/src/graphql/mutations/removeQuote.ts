import { GraphQLString } from 'graphql'

import QuoteSchema from '../../models/Quote'
import QuoteGraphQLType from '../quoteType'

export default {
  type: QuoteGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  async resolve (parent, args) {
    return await QuoteSchema.findOneAndDelete({ _id: args.id }).remove()
  }
}
