import { GraphQLString } from "graphql";

import QuoteSchema from "../QuoteModel";
import QuoteGraphQLType from "../QuoteType";

export default {
  type: QuoteGraphQLType,
  args: { id: { type: GraphQLString } },
  resolve(parent, args) {
    return QuoteSchema.findOne({ _id: args.id });
  },
};
