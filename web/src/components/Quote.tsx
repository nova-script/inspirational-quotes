import { createRef, RefObject, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import BackspaceIcon from '@mui/icons-material/Backspace';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import { commitEditQuoteMutation } from '../relay/quotes/EditQuoteMutation';
import relayEnvironment from '../relay/relayEnvironment';
import { QuoteField } from './QuoteField';
import RemoveQuote from './RemoveQuote';
import { atom, useRecoilState } from 'recoil';


interface QuoteProps {
  id: string;
  author: string;
  quote: string;
}

export const openQuoteRemovalModal = atom({
  key: 'openQuoteModal',
  default: false,
});

export default function Quote(props: QuoteProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const authorRef: RefObject<any> = createRef()
  const quoteRef: RefObject<any> = createRef()

  const [openModal, setOpenModal] = useRecoilState(openQuoteRemovalModal)


  function handleEditButton(): any {
    if (isEditing === false) {
      setIsEditing(true)
      return
    } else {
      // The user is trying to save the editing.
      commitEditQuoteMutation(
        relayEnvironment,
        props.id,
        quoteRef.current.getContent(),
        authorRef.current.getContent())
      setIsEditing(false)
    }
  }

  function handleRemoveButton(): any {
    if (isEditing === true) {
      setIsEditing(false)
      return
    } else {
      setOpenModal(true)
    }
  }

  return (
    <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'}}>

        <QuoteField
        type="quote"
        content={props.quote}
        placeholder={"Edit quote"}
        isEditing={isEditing}
        ref={quoteRef}/>
      
        <QuoteField
        type="author"
        content={props.author}
        placeholder={"Edit author"}
        isEditing={isEditing}
        ref={authorRef}/>

        <Box sx={{minWidth: "20%", marginTop: "15px"}}>
            <Button
            size="small"
            color="error"
            variant="contained"
            onClick={(e) => {handleRemoveButton()}}
            sx={{ height: "100%", width: "50%", borderRadius: 0, borderBottomLeftRadius: 4}}>
                {isEditing? <CancelIcon/> : <BackspaceIcon/>}
            </Button>
            <RemoveQuote id={props.id} open={openModal}/>
            <Button
            onClick={() => handleEditButton()}
            size="small"
            color={isEditing? "primary" : "success"}
            variant="contained"
            sx={{ height: "100%", width: "50%", padding: "10px", borderRadius: 0, borderBottomRightRadius: 4}}>
                {isEditing? <SaveIcon/> : <EditIcon/>}
            </Button>
        </Box>
    </Card>
  );
}
