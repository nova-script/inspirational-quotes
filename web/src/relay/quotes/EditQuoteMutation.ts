import { graphql } from 'react-relay';

export const EditQuoteMutation = graphql`
  mutation EditQuoteMutation {
    editQuote(id: $input author: $input quote: $input) {
        id
        quote
        author
    }
  }
`;