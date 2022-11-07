import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import BackspaceIcon from '@mui/icons-material/Backspace';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import { useMutation, graphql } from 'react-relay';
import { EditQuoteMutation } from '../relay/quotes/EditQuoteMutation';

import QuoteField from './QuoteField';

interface QuoteProps {
  id: string;
  author: string;
  quote: string;
}


export default function Quote(props: QuoteProps) {
  const [isEditing, setIsEditing] = useState(false)

  const [commitMutation, isMutationInFlight] = useMutation(EditQuoteMutation)


  return (
    <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'}}>

        <QuoteField
        type="quote"
        content={props.quote}
        isEditing={isEditing}/>
      
        <QuoteField
        type="author"
        content={props.author}
        isEditing={isEditing}/>

        <Box sx={{minWidth: "20%", marginTop: "15px"}}>
            <Button
            size="small"
            color="error"
            variant="contained"
            sx={{ height: "100%", width: "50%", borderRadius: 0, borderBottomLeftRadius: 4}}>
                {isEditing? <CancelIcon/> : <BackspaceIcon/>}
            </Button>
            <Button
            onClick={() => setIsEditing(!isEditing)}
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
