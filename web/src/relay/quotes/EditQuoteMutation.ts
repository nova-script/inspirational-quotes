import { commitMutation, graphql } from 'react-relay';

import type { Environment } from 'react-relay';


const EditQuoteMutation = graphql`
  mutation EditQuoteMutation($id: String! $quote: String! $author: String!) {
    editQuote(id: $id quote: $quote author: $author) {
      id
      quote
      author
    }
  }
`;

export function commitEditQuoteMutation(environment: any, id: any, quote: any, author: any) {
  return commitMutation(environment, {
    mutation: EditQuoteMutation,
    variables: {
      id,
      quote,
      author
    },
    onCompleted: response => {},
    onError: error => {}
  })
}