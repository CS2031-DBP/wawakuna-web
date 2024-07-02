import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const RowHijo = (props) => {
    const row = props.row
    const onDelete = () => {
        axios({
            method: 'delete',
            url: API_URL + `/hijo/${row.id}"`,
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        .then(response => {
//            console.log(response);
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
            <TableCell align='right'>{row.padre.email}</TableCell>
            <TableCell align='right'>{row.padre.nombre}</TableCell>
            <TableCell align='right'>{row.padre.apellido}</TableCell>
            
            <TableCell>
                <IconButton className='h-10' onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default RowHijo