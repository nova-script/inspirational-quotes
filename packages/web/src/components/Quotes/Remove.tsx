import { forwardRef } from "react";
import { commitMutation, graphql } from "react-relay";
import { Box, Button, Typography, Modal, Card } from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CancelIcon from "@mui/icons-material/Cancel";

import relayEnvironment from "../../relay/relayEnvironment";

const RemoveQuoteMutation = graphql`
  mutation RemoveQuoteMutation($id: String!) {
    removeQuote(id: $id) {
      id
    }
  }
`;

function commitRemoveQuoteMutation(environment: any, id: any): any {
  return commitMutation(environment, {
    mutation: RemoveQuoteMutation,
    variables: {
      id,
    },
  });
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "420px",
};

interface RemoveQuoteProps {
  id: string;
  open: boolean;
  refresh: any;
  onClose: any;
}

export const RemoveQuote = forwardRef((props: RemoveQuoteProps, ref): JSX.Element => {
  function handleRemoveButton(): any {
    commitRemoveQuoteMutation(relayEnvironment, props.id);
    props.onClose();
    props.refresh();
  }

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={style}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            margin={2}
            marginBottom={0}
            variant="h6"
            fontWeight={900}
            textAlign="center"
          >
            Are you sure you want to delete?
          </Typography>

          <Box sx={{ minWidth: "20%", marginTop: "15px" }}>
            <Button
              size="small"
              color="error"
              variant="contained"
              onClick={() => props.onClose()}
              sx={{
                height: "100%",
                width: "50%",
                padding: "10px",
                borderRadius: 0,
                borderBottomLeftRadius: 4,
              }}
            >
              <CancelIcon />
            </Button>
            <Button
              onClick={() => handleRemoveButton()}
              size="small"
              color="warning"
              variant="contained"
              sx={{
                height: "100%",
                width: "50%",
                padding: "10px",
                borderRadius: 0,
                borderBottomRightRadius: 4,
              }}
            >
              <DeleteForeverIcon />
            </Button>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
});
