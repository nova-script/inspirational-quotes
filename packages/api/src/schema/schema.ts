import { GraphQLSchema } from "graphql";

import Mutations from "./MutationType";
import rootQuery from "./QueryType";

export default new GraphQLSchema({
  query: rootQuery,
  mutation: Mutations,
});
