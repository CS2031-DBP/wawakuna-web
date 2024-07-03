import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { API_URL, getToken } from '../../../utils/Utils';
import WarningAlert from '../../alert/WarningAlert';

import { useState } from 'react';

const RowProfesor = (props) => {
    const row = props.row
    const pathDelete = props.pathDelete
    const method = props.method

    const [warningAlert, setWarningAlert] = useState(false);
    

    const onDelete = () => {
        axios({
            method: method,
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
            <TableCell component="th" scope="row">
            {row.nombre}
            </TableCell>
            <TableCell align='right'>{row.apellido}</TableCell>
            <TableCell align='right'>{row.email}</TableCell>
            <TableCell align='right'>
                <IconButton className='h-10' onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
            {
                warningAlert ? 
                <WarningAlert text="Profesor fue eliminado."/>
                :
                null
            }
        </TableRow>
    )
}

export default RowProfesor