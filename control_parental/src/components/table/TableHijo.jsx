

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

import { useEffect, useState } from 'react';
import { API_URL, getToken } from '../../utils/Utils';

import axios from 'axios';
import { Button, Toolbar } from '@mui/material';
import RowHijo from './row/RowHijo';
import { useNavigate } from 'react-router-dom';
import DialogHijo from './dialog/DialogHijo';


function createData(id, nombre, apellido, padre, email) {
  return {
    id,
    nombre,
    apellido,
    padre,
    email
  };
}

export default function TableHijo(props) {
  const {pathGet, pathDelete} = props
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios({
        method: 'get',
        url: API_URL + pathGet,
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        params: {
          page: page,
          size: rowsPerPage
        }
    })
    .then(response => {
      const rowData = []
      response.data.map((row, index) => {
        rowData.push(createData(row.id, row.nombre, row.apellido, row.padre.nombre+" "+row.padre.apellido, row.padre.email))
      })
      setRows(rowData)
    })
    .catch(error => {
        console.error(error)
    })
  },[page])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const navigate = useNavigate();

  const id = props.id
  return (
    <TableContainer component={Paper}>
      <Toolbar className='flex flex-row'>
        <span className='flex-1'>Hijos</span>
        <div className='flex-1 flex justify-end'>
          <DialogHijo/>
        </div>
      </Toolbar>
      <Table aria-label="simple table" sx={{minWidth: 750}}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align='right'>Apellido</TableCell>
            <TableCell align='right'>Padre</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <RowHijo row={row} pathDelete={pathDelete} method = {props.method}/>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        rowsPerPageOptions={[3, 5, 10]}
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}