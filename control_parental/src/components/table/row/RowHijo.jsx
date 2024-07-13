import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAlert from '../../alert/WarningAlert';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/Utils';
import { getToken } from '../../../utils/Utils';

const RowHijo = (props) => {
    const row = props.row
    const pathDelete = props.pathDelete
    const warningDelete = props.warningDelete
    const [warningAlert, setWarningAlert] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);


    const handleClose = () => {
        setOpenDialog(false);
    }

    const onDialog = () => {
        setOpenDialog(true);
    }

    const onDelete = () => {
        setOpenDialog(false);
        axios({
            method: 'delete',
            url: API_URL + `${pathDelete}/${row.id}`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            setWarningAlert(true);
            setTimeout(() => window.location.reload(), 2000)
        })
        .catch(error => {
            console.error(error);
        })
    }
    return(
        <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{row.nombre}</TableCell>
            <TableCell align='right'>{row.apellido}</TableCell>
            <TableCell align='right'>{row.padre}</TableCell>
            <TableCell align='right'>{row.email}</TableCell>
            <TableCell>
                <IconButton className='h-10' onClick={onDialog}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
            {
                warningAlert ? 
                <WarningAlert text="Hijo fue eliminado."/>
                :
                null
            }
            <Dialog open = {openDialog} onClose = {handleClose}>
                <DialogTitle>¿Eliminar Hijo?</DialogTitle>
                <DialogContent>
                    {warningDelete}
                </DialogContent>
                <DialogActions className='flex flex-row'>
                    <Button onClick={onDelete}>Eliminar Hijo</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </TableRow>
    )
}

export default RowHijo