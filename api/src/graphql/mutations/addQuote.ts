import { GraphQLString } from 'graphql';

import QuoteSchema from '../../models/Quote'
import QuoteGraphQLType from '../quoteType';


export default {
    type: QuoteGraphQLType,
    args: {
        author: {type: GraphQLString},
        quote: {type: GraphQLString}
    },
    resolve(parent, args) {
        const newQuote = new QuoteSchema({
        author: args.author,
        quote: args.quote,
    })
    return newQuote.save()
    }
};
