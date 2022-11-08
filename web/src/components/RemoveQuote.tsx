import { RefObject, createRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import relayEnvironment from '../relay/relayEnvironment';

import { useRecoilState } from 'recoil';
import { refetchAtom } from '../pages/Home';
import { commitRemoveQuoteMutation } from '../relay/quotes/RemoveQuoteMutation';
import { openQuoteRemovalModal } from './Quote';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '420px',
};


interface RemoveQuoteProps {
    id: string;
    open: boolean;
}


export default function RemoveQuote(props: RemoveQuoteProps) {
    const [close, setClose] = useState(false);
    const [refetch, setRefetch] = useRecoilState(refetchAtom)
    const [openModal, setOpenModal] = useRecoilState(openQuoteRemovalModal)


    function handleRemoveButton(): any {
        commitRemoveQuoteMutation(
            relayEnvironment,
            props.id)
        setRefetch(!refetch)
        setOpenModal(false)
    }
    function handleCancelButton(): any {
        setOpenModal(false)
    }

    return (
        <Modal
            open={props.open}
            onClose={handleCancelButton}>
            <Box sx={style}>
                <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'}}>

                    <Typography margin={2} marginBottom={0} variant='h6' fontWeight={900} color='primary'>
                        Are you sure you want to delete?
                    </Typography>

                    <Box sx={{minWidth: "20%", marginTop: "15px"}}>
                        <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => handleCancelButton()}
                        sx={{ height: "100%", width: "50%", padding: "10px", borderRadius: 0, borderBottomLeftRadius: 4}}>
                            <CancelIcon/>
                        </Button>
                        <Button
                        onClick={() => handleRemoveButton()}
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
    );
}