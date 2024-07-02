import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import axios from 'axios';
import { API_URL, getToken } from '../../../utils/Utils';

const RowPadre = (props) => {
    const row = props.row
    const pathDelete = props.pathDelete
    const onDelete = () => {
        axios({
            method: 'delete',
            url: API_URL + `${pathDelete}/${row.id}`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            console.log(response);
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
            <TableCell align='right'>{row.email}</TableCell>
            <TableCell align='right'>{row.phoneNumber}</TableCell>
            <TableCell align='right'>
                <IconButton className='h-10' onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default RowPadre