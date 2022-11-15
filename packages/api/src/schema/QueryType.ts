import { GraphQLObjectType } from "graphql";

import queryAllQuotes from "../modules/quote/queries/queryAllQuotes";
import queryQuoteById from "../modules/quote/queries/queryQuoteById";

export default new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    queryQuoteById,
    queryAllQuotes,
  },
});
