import { GraphQLList } from "graphql";

import QuoteSchema from "../QuoteModel";
import QuoteGraphQLType from "../QuoteType";

export default {
  type: new GraphQLList(QuoteGraphQLType),
  args: {},
  resolve(parent, args) {
    return QuoteSchema.find({});
  },
};
