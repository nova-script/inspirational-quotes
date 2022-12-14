import { GraphQLString } from "graphql";

import QuoteSchema from "../QuoteModel";
import QuoteGraphQLType from "../QuoteType";

export default {
  type: QuoteGraphQLType,
  args: {
    id: { type: GraphQLString },
    author: { type: GraphQLString },
    quote: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const quote = await QuoteSchema.findOne({ _id: args.id });
    if (quote != null) {
      quote.author = args.author;
      quote.quote = args.quote;
      return await quote.save();
    }
  },
};
