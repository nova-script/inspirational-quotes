import { createRef, RefObject, useState } from "react";
import { Box, Button, Card } from "@mui/material";
import { commitMutation, graphql } from "react-relay";

import BackspaceIcon from "@mui/icons-material/Backspace";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import relayEnvironment from "../../relay/relayEnvironment";
import { QuoteField } from "./Field";
import { RemoveQuote } from "./Remove";

const EditQuoteMutation = graphql`
  mutation IndexEditMutation($id: String!, $quote: String!, $author: String!) {
    editQuote(id: $id, quote: $quote, author: $author) {
      id
      quote
      author
    }
  }
`;

function commitEditQuoteMutation(
  environment: any,
  id: any,
  quote: any,
  author: any,
): any {
  return commitMutation(environment, {
    mutation: EditQuoteMutation,
    variables: {
      id,
      quote,
      author,
    },
  });
}

interface QuoteProps {
  id: string;
  author: string;
  quote: string;
  refresh: any;
}

export default function Quote(props: QuoteProps): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  const authorRef: RefObject<any> = createRef();
  const quoteRef: RefObject<any> = createRef();

  function handleEditButton(): any {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      // The user is trying to save the editing.
      commitEditQuoteMutation(
        relayEnvironment,
        props.id,
        quoteRef.current.getContent(),
        authorRef.current.getContent(),
      );
      setIsEditing(false);
    }
  }

  function handleRemoveButton(): void {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsRemoving(true);
    }
  }

  function handleRemoveModalOnClose(): void {
    setIsRemoving(false);
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <QuoteField
        type="quote"
        content={props.quote}
        placeholder={"Edit quote"}
        isEditing={isEditing}
        ref={quoteRef}
      />

      <QuoteField
        type="author"
        content={props.author}
        placeholder={"Edit author"}
        isEditing={isEditing}
        ref={authorRef}
      />

      <Box sx={{ minWidth: "20%", marginTop: "15px" }}>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={e => {
            handleRemoveButton();
          }}
          sx={{
            height: "100%",
            width: "50%",
            borderRadius: 0,
            borderBottomLeftRadius: 4,
          }}
        >
          {isEditing ? <CancelIcon /> : <BackspaceIcon />}
        </Button>
        <RemoveQuote
          refresh={props.refresh}
          id={props.id}
          open={isRemoving}
          onClose={handleRemoveModalOnClose}
        />
        <Button
          onClick={() => handleEditButton()}
          size="small"
          color={isEditing ? "primary" : "success"}
          variant="contained"
          sx={{
            height: "100%",
            width: "50%",
            padding: "10px",
            borderRadius: 0,
            borderBottomRightRadius: 4,
          }}
        >
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </Button>
      </Box>
    </Card>
  );
}
