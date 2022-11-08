import { commitMutation, graphql } from 'react-relay';


const AddQuoteMutation = graphql`
  mutation AddQuoteMutation($quote: String! $author: String!) {
    addQuote(quote: $quote author: $author) {
      quote
      author
    }
  }
`;

export function commitAddQuoteMutation(environment: any, quote: any, author: any) {
  return commitMutation(environment, {
    mutation: AddQuoteMutation,
    variables: {
      quote,
      author
    },
    onCompleted: response => {},
    onError: error => {}
  })
}