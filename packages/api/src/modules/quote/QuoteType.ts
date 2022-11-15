import { GraphQLObjectType, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "Quote",
  fields: () => ({
    id: { type: GraphQLString },
    author: { type: GraphQLString },
    quote: { type: GraphQLString },
  }),
});
