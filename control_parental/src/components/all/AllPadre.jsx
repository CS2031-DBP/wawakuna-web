import TablePadre from '../table/TablePadre';

export default function AllPadre() {
  return (
    <TablePadre pathGet = "/padre/all" pathDelete = "/padre" warningDelete = "Esta operación es irreversible y se eliminarán sus hijos"/>
  );
}