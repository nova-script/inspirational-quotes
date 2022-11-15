import { GraphQLList } from "graphql";

import QuoteSchema from "../../models/Quote";
import QuoteGraphQLType from "../quoteType";

export default {
  type: new GraphQLList(QuoteGraphQLType),
  args: {},
  resolve(parent, args) {
    return QuoteSchema.find({});
  },
};
