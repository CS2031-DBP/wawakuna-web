import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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
    const [warningAlert, setWarningAlert] = useState(false);

    const onDelete = () => {
        console.log(row.id) 
        axios({
            method: 'delete',
            url: API_URL + `${pathDelete}/${row.id}`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
            setWarningAlert(true);
            //setTimeout(() => window.location.reload(), 2000)
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
                <IconButton className='h-10' onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
            {
                warningAlert ? 
                <WarningAlert text="Hijo fue eliminado."/>
                :
                null
            }
        </TableRow>
    )
}

export default RowHijo