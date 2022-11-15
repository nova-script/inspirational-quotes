import { GraphQLString } from "graphql";

import QuoteSchema from "../QuoteModel";
import QuoteGraphQLType from "../QuoteType";

export default {
  type: QuoteGraphQLType,
  args: {
    id: { type: GraphQLString },
  },
  async resolve(parent, args) {
    return await QuoteSchema.findOneAndDelete({ _id: args.id }).remove();
  },
};
