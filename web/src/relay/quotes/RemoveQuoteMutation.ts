import { commitMutation, graphql } from 'react-relay';


const RemoveQuoteMutation = graphql`
  mutation RemoveQuoteMutation($id: String!) {
    removeQuote(id: $id) {
        id
    }
  }
`;

export function commitRemoveQuoteMutation(environment: any, id: any) {
  return commitMutation(environment, {
    mutation: RemoveQuoteMutation,
    variables: {
      id,
    },
    onCompleted: response => {},
    onError: error => {}
  })
}