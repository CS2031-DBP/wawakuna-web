import TableHijo from '../table/TableHijo';

function createData(id,nombre,apellido, padre) {
  return {id, nombre,apellido, padre: {email: padre.email, nombre: padre.nombre, apellido: padre.apellido}};
}

export default function AllHijo() {
  return (
    <TableHijo pathGet = "/hijo/all" pathDelete = "/hijo" method = "delete"/>
  );
}


//WARNING quiza cambiar el createData