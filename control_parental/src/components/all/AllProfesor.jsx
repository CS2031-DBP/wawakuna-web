import TableProfesor from '../table/TableProfesor';


export default function AllProfesor() {
  return (
    <TableProfesor pathGet = "/profesor/all" pathDelete = "/profesor" method = "delete" warningDelete="Esta operación es irreversible"/>
  );
}