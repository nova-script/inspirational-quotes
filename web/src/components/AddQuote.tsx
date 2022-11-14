import { RefObject, createRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { QuoteField } from './QuoteField';

import { commitAddQuoteMutation } from '../relay/quotes/AddQuoteMutation';
import relayEnvironment from '../relay/relayEnvironment';

import { useRecoilState } from 'recoil';
import { refetchAtom } from '../pages/Home';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '420px',
};

interface AddQuoteProps {
    refresh: any;
}

export default function AddQuote(props: AddQuoteProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const authorRef: RefObject<any> = createRef()
    const quoteRef: RefObject<any> = createRef()

    const [refetch, setRefetch] = useRecoilState(refetchAtom)

    function handleCreateButton(): any {
        commitAddQuoteMutation(
            relayEnvironment,
            quoteRef.current.getContent(),
            authorRef.current.getContent())
        setRefetch(!refetch)
        props.refresh()
        handleClose()
    }

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant='contained'
                sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <AddCircleIcon
                fontSize='large'
                sx={{color: 'white'}}/>
                <Typography fontWeight='600'> Add new quote </Typography>
            </Button>
            <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={style}>
                <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'}}>

                    <Typography margin={2} marginBottom={0} variant='h6' fontWeight={900} color='primary'>
                        📝 Add new quote:
                    </Typography>

                    <QuoteField
                    placeholder="Insert quote"
                    type="quote"
                    content={''}
                    isEditing={true}
                    ref={quoteRef}/>
                
                    <QuoteField
                    placeholder="Insert author"
                    type="author"
                    content={''}
                    isEditing={true}
                    ref={authorRef}/>

                    <Box sx={{minWidth: "20%", marginTop: "15px"}}>
                        <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={handleClose}
                        sx={{ height: "100%", width: "50%", padding: "10px", borderRadius: 0, borderBottomLeftRadius: 4}}>
                            <CancelIcon/>
                        </Button>
                        <Button
                        onClick={() => handleCreateButton()}
                        size="small"
                        color="primary"
                        variant="contained"
                        sx={{ height: "100%", width: "50%", padding: "10px", borderRadius: 0, borderBottomRightRadius: 4}}>
                            <AddCircleIcon/>
                        </Button>
                    </Box>
                </Card>
            </Box>
            </Modal>
        </div>
    );
}