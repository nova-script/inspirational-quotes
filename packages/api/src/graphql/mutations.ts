import { GraphQLObjectType } from "graphql";

import addQuote from "./mutations/addQuote";
import editQuote from "./mutations/editQuote";
import removeQuote from "./mutations/removeQuote";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addQuote,
    editQuote,
    removeQuote,
  },
});

export default Mutation;
