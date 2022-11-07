import { graphql } from 'react-relay';

export const AppAllQuotesQuery = graphql`
    query AppAllQuotesQuery {
        queryAllQuotes {
            id
            quote
            author
        }
    }`
;