import { GraphQLString } from 'graphql';

import QuoteSchema from '../../models/Quote'
import QuoteGraphQLType from '../quoteType';


export default {
    type: QuoteGraphQLType,
    args: {id: {type: GraphQLString}},
    resolve(parent, args) {
        return QuoteSchema.findOne({_id: args.id})
    }
};