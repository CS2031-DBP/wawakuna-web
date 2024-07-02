import { useEffect, useState } from 'react';
import { API_URL, getToken } from '../../utils/Utils';

import axios from 'axios';
import TablePadre from '../table/TablePadre';
import TableHijo from '../table/TableHijo';


function createData(id,nombre,apellido, padre) {
  return {id, nombre,apellido, padre: {email: padre.email, nombre: padre.nombre, apellido: padre.apellido}};
}


const rows = [
  createData(1,'Fernando', 'Ayala', {email:'eduardo.aragon@utec.edu.pe', nombre:'Eduardo', apellido:'Aragon'}),
];

export default function AllHijo() {
  /*const [rows, setRows] = useState([]);
  useEffect(() => {
    axios({
      method: 'post',
      url: API_URL + `/all/profesores`,
      headers:{
        Authorization: `Bearer ${getToken()}`
      }
    })
    .then(response => {setRows(response.data)})
    .catch(error => {console.error(error)})
  }, [])*/
  return (
    <TableHijo rows = {rows}/>
  );
}