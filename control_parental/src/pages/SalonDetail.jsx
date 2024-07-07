import { useParams } from "react-router-dom";
import TableProfesor from "../components/table/TableProfesor";
import Add from "../components/add/Add"
import AddProfesor from "../components/add/AddProfesor";
import AddHijo from "../components/add/AddHijo";
import TableHijo from "../components/table/TableHijo";
const SalonDetail = () => {
    const { id,name } = useParams();
    return(
        <div className="p-10 justify-center flex flex-col space-y-10">
                <h1 className="text-lg">{name.replaceAll('-',' ')}</h1>
                <div className="flex flex-col space-y-5 w-1/2 self-center">
                    <div>
                        <TableProfesor pathGet = {`/profesor/salon/${id}`} pathDelete = {`/salon/${id}/quitarProfesor`} method="patch"/>
                    </div>
                    <div>
                        <AddProfesor id = {id}/>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 w-1/2 self-center">
                    <div>
                        <TableHijo pathGet = {`/hijo/salon/${id}`} pathDelete = {`/salon/${id}/quitarHijo`} method="patch"/>
                    </div>
                    <div>
                        <AddHijo id = {id}/>
                    </div>
                </div>
        </div>
    )
}

export default SalonDetail

//WARNING: checkear que el id sea int