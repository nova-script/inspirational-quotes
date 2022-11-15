import { GraphQLObjectType } from "graphql";

import addQuote from "../modules/quote/mutations/QuoteAddMutation";
import editQuote from "../modules/quote/mutations/QuoteEditMutation";
import removeQuote from "../modules/quote/mutations/QuoteRemoveMutation";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addQuote,
    editQuote,
    removeQuote,
  },
});

export default Mutation;
